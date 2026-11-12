import { Suspense } from "react";
import SchoolProjectList from "@/components/SchoolProjectList";

export const instant = false;

function SchoolProjectSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 animate-pulse">
      <div className="h-40 rounded-lg bg-slate-200" />
      <div className="h-40 rounded-lg bg-slate-200" />
    </div>
  );
}

export default function SchoolProjectsPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">School Projects</h1>

      <Suspense fallback={<SchoolProjectSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}