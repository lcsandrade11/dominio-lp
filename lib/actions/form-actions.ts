"use server";

import { db } from "@/lib/db";
import { formSubmissionsTable } from "@/lib/db/schema";

function normalizeEnvValue(value?: string) {
  if (!value) return value;
  const trimmed = value.trim();
  return trimmed.replace(/^['"]|['"]$/g, "");
}

async function fetchPreserveMethodOnRedirect(
  url: string,
  init: RequestInit,
  maxRedirects = 5,
) {
  let currentUrl = url;

  for (let redirectCount = 0; redirectCount <= maxRedirects; redirectCount += 1) {
    const response = await fetch(currentUrl, { ...init, redirect: "manual" });

    if (
      response.status === 301 ||
      response.status === 302 ||
      response.status === 303 ||
      response.status === 307 ||
      response.status === 308
    ) {
      const location = response.headers.get("location");
      if (!location) return response;

      const nextUrl = new URL(location, currentUrl);
      console.warn("Google Sheets webhook redirected", {
        status: response.status,
        host: nextUrl.host,
        pathname: nextUrl.pathname,
      });
      currentUrl = nextUrl.toString();
      continue;
    }

    return response;
  }

  throw new Error(`Too many redirects when calling ${new URL(url).host}`);
}

async function pushToGoogleSheets(data: {
  name: string;
  email: string;
  phone: string;
  motivo: string;
  referrer?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
}) {
  const SHEET_WEBHOOK_URL = normalizeEnvValue(
    process.env.GOOGLE_SHEET_WEBHOOK_URL,
  );
  const SHEET_SECRET = normalizeEnvValue(process.env.GOOGLE_SHEET_SECRET);

  if (!SHEET_WEBHOOK_URL || !SHEET_SECRET) {
    console.warn("Google Sheets credentials not configured", {
      hasWebhookUrl: Boolean(SHEET_WEBHOOK_URL),
      hasSecret: Boolean(SHEET_SECRET),
    });
    return;
  }

  try {
    // Validate URL early for clearer error logs (common issue: quotes copied into prod env vars).
    const webhookUrl = new URL(SHEET_WEBHOOK_URL);
    console.info("Google Sheets webhook configured", {
      host: webhookUrl.host,
      pathname: webhookUrl.pathname,
    });
  } catch (error) {
    console.error("Invalid GOOGLE_SHEET_WEBHOOK_URL", { error });
    return;
  }

  try {
    const body = JSON.stringify({
      "X-Secret-Token": SHEET_SECRET,
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      motivo: data.motivo,
      utm_medium: data.utm_medium || "",
      utm_campaign: data.utm_campaign || "",
      utm_content: data.utm_content || "",
      referrer: data.referrer || "",
    });

    const response = await fetchPreserveMethodOnRedirect(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(8000),
      body,
    });

    const contentType = response.headers.get("content-type") || "";
    const bodyText = await response.text();

    if (!contentType.includes("application/json")) {
      console.error("Unexpected Google Sheets response", {
        status: response.status,
        url: response.url,
        contentType,
        bodySnippet: bodyText.slice(0, 200),
      });
      return;
    }

    try {
      const json = JSON.parse(bodyText) as unknown;
      if (
        !json ||
        typeof json !== "object" ||
        !("success" in json) ||
        (json as { success?: unknown }).success !== true
      ) {
        console.error("Google Sheets rejected submission", { response: json });
      }
    } catch (error) {
      console.error("Failed to parse Google Sheets JSON response", {
        error,
        bodySnippet: bodyText.slice(0, 200),
      });
    }
  } catch (error) {
    console.error("Failed to push to Google Sheets:", error);
  }
}

export async function saveFormSubmission(formData: {
  name: string;
  email: string;
  phone: string;
  motivo: string;
  referrer?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  fbp: string;
  fbc: string;
  event_id: string;
  page_url: string;
  user_agent: string;
}) {
  try {
    const result = await db
      .insert(formSubmissionsTable)
      .values(formData)
      .returning();

    // Best-effort push to Google Sheets (never blocks DB save on failure)
    await pushToGoogleSheets(formData);

    return { success: true, data: result };
  } catch (error) {
    console.error("Database insert error:", error);
    return { success: false, error: "Failed to save form data" };
  }
}
