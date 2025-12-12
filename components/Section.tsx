import Link from "next/link";

export default function Section({
  title,
  children,
  actionHref,
  actionText
}: {
  title: string;
  children: React.ReactNode;
  actionHref?: string;
  actionText?: string;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {actionHref && actionText ? (
          <Link className="text-sm text-white/70 hover:text-white" href={actionHref}>
            {actionText}
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  );
}
