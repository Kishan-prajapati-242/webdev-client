"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Course } from "../store/coursesStore";

export default function CourseCard({ course, onEdit, onDelete, enrollmentButton }: {
  course: Course; onEdit: () => void; onDelete: () => void; enrollmentButton?: ReactNode;
}) {
  return <article className="wd-dashboard-course wd-a3-card" data-course-id={course._id}>
    <Link href={`/courses/${course._id}/home`} className="wd-dashboard-course-link">
      <img src={course.image} alt={`${course.name} course illustration`} width={640} height={360} />
      <div className="wd-a3-card-inner"><h3 className="wd-dashboard-course-title">{course.name}</h3>
        <p className="wd-dashboard-course-description">{course.description}</p>
        <span className="wd-a3-btn">Go</span>
      </div>
    </Link>
    <div className="wd-a4-card-actions">
      <button type="button" className="wd-a3-btn secondary" onClick={onEdit}>Edit</button>
      <button type="button" className="wd-a3-btn danger" onClick={onDelete}>Delete</button>
      {enrollmentButton}
    </div>
  </article>;
}
