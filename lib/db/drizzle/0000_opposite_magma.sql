CREATE TABLE "form_submissions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "form_submissions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"motivo" varchar(100) NOT NULL,
	"referrer" text,
	"utm_medium" varchar(100),
	"utm_campaign" varchar(255),
	"utm_content" varchar(255),
	"fbp" varchar(255),
	"fbc" varchar(255),
	"event_id" varchar(100),
	"page_url" text,
	"user_agent" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
