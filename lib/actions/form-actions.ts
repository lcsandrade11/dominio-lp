"use server";

import { db } from "@/lib/db";
import { formSubmissionsTable } from "@/lib/db/schema";

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
  const SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  const SHEET_SECRET = process.env.GOOGLE_SHEET_SECRET;

  if (!SHEET_WEBHOOK_URL || !SHEET_SECRET) {
    console.warn("Google Sheets credentials not configured");
    return;
  }

  try {
    await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Secret-Token": SHEET_SECRET,
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        motivo: data.motivo,
        utm_medium: data.utm_medium || "",
        utm_campaign: data.utm_campaign || "",
        utm_content: data.utm_content || "",
        referrer: data.referrer || "",
      }),
    });
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

    // Push to Google Sheets asynchronously (non-blocking)
    pushToGoogleSheets(formData).catch((err) =>
      console.error("Sheet sync failed:", err),
    );

    return { success: true, data: result };
  } catch (error) {
    console.error("Database insert error:", error);
    return { success: false, error: "Failed to save form data" };
  }
}
