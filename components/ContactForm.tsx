"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  name: z.string().min(2, "Name is too short").max(80),
  email: z.string().email("Invalid email").max(120),
  subject: z.string().min(3, "Subject is too short").max(120),
  message: z.string().min(10, "Message is too short").max(4000)
});

type FormValues = z.infer<typeof Schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label className="text-sm text-white/80">Name</label>
        <input
          className="mt-1 w-full rounded-xl border border-border bg-white/5 px-3 py-2 outline-none focus:border-white/30"
          {...register("name")}
          placeholder="Your name"
        />
        {errors.name ? <p className="mt-1 text-xs text-red-300">{errors.name.message}</p> : null}
      </div>

      <div>
        <label className="text-sm text-white/80">Email</label>
        <input
          className="mt-1 w-full rounded-xl border border-border bg-white/5 px-3 py-2 outline-none focus:border-white/30"
          {...register("email")}
          placeholder="you@example.com"
        />
        {errors.email ? <p className="mt-1 text-xs text-red-300">{errors.email.message}</p> : null}
      </div>

      <div>
        <label className="text-sm text-white/80">Subject</label>
        <input
          className="mt-1 w-full rounded-xl border border-border bg-white/5 px-3 py-2 outline-none focus:border-white/30"
          {...register("subject")}
          placeholder="Project / Internship / Freelance"
        />
        {errors.subject ? <p className="mt-1 text-xs text-red-300">{errors.subject.message}</p> : null}
      </div>

      <div>
        <label className="text-sm text-white/80">Message</label>
        <textarea
          className="mt-1 min-h-[140px] w-full rounded-xl border border-border bg-white/5 px-3 py-2 outline-none focus:border-white/30"
          {...register("message")}
          placeholder="Write your message..."
        />
        {errors.message ? <p className="mt-1 text-xs text-red-300">{errors.message.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl border border-border bg-blue-500/20 px-4 py-2 text-sm hover:bg-blue-500/30 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {status === "success" ? <p className="text-sm text-green-300">Message sent successfully.</p> : null}
      {status === "error" ? <p className="text-sm text-red-300">Something went wrong. Try again.</p> : null}
    </form>
  );
}
