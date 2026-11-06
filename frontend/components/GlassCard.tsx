type GlassCardProps = {
  title: string;
  value: string;
  detail: string;
};

export function GlassCard({ title, value, detail }: GlassCardProps) {
  return (
    <section
      aria-label={title}
      className="glass-card w-full max-w-sm p-panel text-foreground"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-label font-semibold uppercase tracking-[0.16em] text-muted">
            {title}
          </p>
          <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
        </div>
        <span className="rounded-full border border-mars/30 bg-mars-soft px-2.5 py-1 text-xs font-medium text-mars-bright">
          LIVE
        </span>
      </div>
      <p className="mt-5 border-t border-line pt-3 telemetry-text">{detail}</p>
    </section>
  );
}
