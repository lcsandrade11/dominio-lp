import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const formSubmissionsTable = pgTable("form_submissions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  // Form fields
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  phone: varchar({ length: 50 }).notNull(),
  motivo: varchar({ length: 100 }).notNull(),

  // Tracking fields
  referrer: text(),
  utm_medium: varchar({ length: 100 }),
  utm_campaign: varchar({ length: 255 }),
  utm_content: varchar({ length: 255 }),

  // Facebook tracking (existing)
  fbp: varchar({ length: 255 }),
  fbc: varchar({ length: 255 }),
  event_id: varchar({ length: 100 }),
  page_url: text(),
  user_agent: text(),

  // Metadata
  created_at: timestamp().defaultNow().notNull(),
});
