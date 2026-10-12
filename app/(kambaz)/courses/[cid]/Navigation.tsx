"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const pages = [
    ["home", "Home"],
    ["modules", "Modules"],
    ["piazza", "Piazza"],
    ["zoom", "Zoom"],
    ["assignments", "Assignments"],
    ["quizzes", "Quizzes"],
    ["grades", "Grades"],
    ["people/table", "People"],
  ];
  return (
    <nav
      id="wd-courses-navigation"
      aria-label="Course"
      className="wd-course-nav flex w-full flex-col border-b border-neutral-200 pb-3 md:w-[145px] md:shrink-0 md:border-b-0"
    >
      {pages.map(([slug, label]) => (
        <Link
          key={slug}
          href={`/courses/${cid}/${slug}`}
          id={`wd-course-${slug.split("/")[0]}-link`}
          className={`${pathname.includes(`/courses/${cid}/${slug}`) ? "active" : "border-l-3 border-transparent"} px-3 py-2 text-sm text-neutral-700`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
