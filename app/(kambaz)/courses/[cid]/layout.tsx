"use client";
import type { ReactNode } from "react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useCoursesStore } from "../../store/coursesStore";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
export default function CourseLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams<{ cid: string }>();
  const course = useCoursesStore((state) => state.courses.find((c) => c._id === cid));
  const [expanded, setExpanded] = useState(true);
  if (!course) return <main className="wd-a3-page"><h2>Course not found</h2></main>;
  return <div className="wd-a3-page">
    <button id="wd-course-nav-toggle" className="wd-a4-nav-toggle" type="button" aria-expanded={expanded}
      onClick={() => setExpanded(!expanded)}>☰ Course navigation</button>
    <div className={`wd-a3-course-shell ${expanded ? "" : "wd-a4-nav-collapsed"}`}>
      {expanded && <CourseNavigation cid={cid} />}
      <main><Breadcrumb cid={cid} />{children}</main>
    </div>
  </div>;
}
