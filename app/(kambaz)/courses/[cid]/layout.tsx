import type { ReactNode } from "react";
import CourseNavigation from "./Navigation";
export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <header className="mb-5 border-b border-neutral-300 pb-3">
        <h2 className="m-0 text-xl font-medium">Courses {cid}</h2>
      </header>
      <div className="flex min-w-0 flex-col gap-5 md:flex-row">
        <CourseNavigation cid={cid} />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
