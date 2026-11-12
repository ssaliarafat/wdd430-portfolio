export default function Loading() {
  return (
    <main className="space-y-6">
      <div className="h-10 w-64 rounded bg-slate-200 animate-pulse" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="h-40 rounded-lg bg-slate-200 animate-pulse" />
        <div className="h-40 rounded-lg bg-slate-200 animate-pulse" />
      </div>
    </main>
  );
}