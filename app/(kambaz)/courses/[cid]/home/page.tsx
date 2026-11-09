"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCoursesStore } from "../../../store/coursesStore";
import { useModulesStore } from "../../../store/modulesStore";
export default function CourseHome() {
  const { cid } = useParams<{ cid: string }>();
  const course = useCoursesStore((state) => state.courses.find((entry) => entry._id === cid));
  const modules = useModulesStore((state) => state.modules.filter((entry) => entry.course === cid));
  return <div id="wd-home"><h2>Welcome to {course?.name}</h2>
    <p>{course?.description}</p><p>Term: {course?.term}</p>
    <h3>Course Modules</h3><ul>{modules.map((module) => <li key={module._id}>{module.name}</li>)}</ul>
    <p><Link className="wd-a3-btn" href={`/courses/${cid}/modules`}>View Modules</Link></p>
  </div>;
}
