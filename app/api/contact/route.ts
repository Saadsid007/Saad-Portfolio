import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  subject: z.string().min(3).max(120),
  message: z.string().min(10).max(4000)
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = ContactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null;

    const userAgent = req.headers.get("user-agent") || null;

    await prisma.message.create({
      data: {
        ...parsed.data,
        ip: ip ?? undefined,
        userAgent: userAgent ?? undefined
      }
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
