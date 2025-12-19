"use server";

import { db } from "@/lib/db";
import { formSubmissionsTable } from "@/lib/db/schema";

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
    return { success: true, data: result };
  } catch (error) {
    console.error("Database insert error:", error);
    return { success: false, error: "Failed to save form data" };
  }
}
