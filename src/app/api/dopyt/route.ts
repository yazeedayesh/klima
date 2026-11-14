import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type DopytPayload = {
  name?: unknown;
  phone?: unknown;
  city?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown; // honeypot — real users never fill this
};

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: DopytPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill every field, including this hidden one.
  if (str(payload.website).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = str(payload.name);
  const phone = str(payload.phone);
  const city = str(payload.city);
  const service = str(payload.service);
  const message = str(payload.message);

  if (!name || !phone || !city || !service) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.DOPYT_TO;

  if (!apiKey || !to) {
    console.error("Chýba RESEND_API_KEY alebo DOPYT_TO v prostredí.");
    return NextResponse.json({ ok: false, error: "server_not_configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const text = [
    `Nový dopyt z webu ${site.name}`,
    `Meno: ${name}`,
    `Telefón: ${phone}`,
    `Obec / mesto: ${city}`,
    `Služba: ${service}`,
    message ? `Popis: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: `Dopyty ${site.name} <dopyt@${site.email.split("@")[1]}>`,
      to,
      replyTo: phone,
      subject: `Dopyt z webu – ${service}`,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Dopyt send failed:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
