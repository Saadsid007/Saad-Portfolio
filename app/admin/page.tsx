import { prisma } from "@/lib/prisma";

export const metadata = { title: "Admin — Messages" };

export default async function AdminPage() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Messages</h1>
          <p className="text-sm text-white/70">Protected via Basic Auth (middleware).</p>
        </div>
        <p className="text-sm text-white/70">Total: {messages.length}</p>
      </div>

      <div className="grid gap-4">
        {messages.map((m) => (
          <div key={m.id} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium">{m.subject}</p>
                <p className="text-sm text-white/70">
                  {m.name} • {m.email}
                </p>
              </div>
              <p className="text-sm text-white/60">{m.createdAt.toISOString()}</p>
            </div>
            <p className="mt-4 whitespace-pre-wrap text-white/85">{m.message}</p>
            {(m.ip || m.userAgent) && (
              <p className="mt-4 text-xs text-white/50">
                {m.ip ? `IP: ${m.ip}` : ""} {m.userAgent ? `• UA: ${m.userAgent}` : ""}
              </p>
            )}
          </div>
        ))}

        {messages.length === 0 && (
          <div className="rounded-2xl border border-border bg-card p-6 text-white/70">
            No messages yet.
          </div>
        )}
      </div>
    </div>
  );
}
