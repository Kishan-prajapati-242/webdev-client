"use client";
import { usePathname } from "next/navigation";
import { useCoursesStore } from "../../store/coursesStore";
export default function Breadcrumb({ cid }: { cid: string }) {
  const path = usePathname();
  const section = path.split("/").filter(Boolean)[2] ?? "home";
  const label = section === "people" ? "People" : section.charAt(0).toUpperCase() + section.slice(1);
  const course = useCoursesStore((state) => state.courses.find((entry) => entry._id === cid));
  return <header className="wd-a3-breadcrumb" id="wd-course-breadcrumb">
    {course?.name} ({cid}) <span className="wd-muted">&gt; {label}</span>
  </header>;
}
