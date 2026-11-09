"use client";
import { useState, type FormEvent } from "react";
import CourseCard from "./CourseCard";
import { useCoursesStore, emptyCourse, type Course } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccount } from "../account/AccountContext";

export default function Dashboard() {
  const { courses, addCourse, updateCourse, deleteCourse } = useCoursesStore();
  const { enrollments, enroll, unenroll } = useEnrollmentsStore();
  const { currentUser } = useAccount();
  const [course, setCourse] = useState<Course>({ ...emptyCourse });
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [error, setError] = useState("");
  const visibleCourses = courses.filter((item) => !currentUser || showAllCourses ||
    enrollments.some((e) => e.user === currentUser._id && e.course === item._id));
  const setField = (key: keyof Course, value: string) => setCourse((old) => ({ ...old, [key]: value }));
  function save(update: boolean) {
    if (!course.name.trim() || !course.number.trim()) {
      setError("Course name and number are required."); return;
    }
    setError("");
    if (update && course._id) updateCourse(course);
    else addCourse({ ...course, _id: `RS${Date.now()}` });
    setCourse({ ...emptyCourse });
  }
  return <main className="wd-a3-page" id="wd-dashboard">
    <div className="wd-a4-header"><h1 id="wd-dashboard-title">Dashboard</h1>
      {currentUser && <button className="wd-a3-btn secondary" id="wd-enrollments-toggle" type="button"
        onClick={() => setShowAllCourses((v) => !v)}>Enrollments: {showAllCourses ? "All courses" : "My courses"}</button>}
    </div>
    <hr className="wd-a3-rule" />
    <form className="wd-a4-course-form" id="wd-course-form" onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); save(false); }}>
      <h2>Course</h2>
      <div className="wd-a4-form-grid">
        <label>Course name<input id="wd-course-name" aria-label="Course name" value={course.name} onChange={(e) => setField("name", e.target.value)} placeholder="Course name" /></label>
        <label>Course number<input id="wd-course-number" aria-label="Course number" value={course.number} onChange={(e) => setField("number", e.target.value)} placeholder="RS105" /></label>
        <label>Start date<input id="wd-course-start-date" aria-label="Course start date" type="date" value={course.startDate} onChange={(e) => setField("startDate", e.target.value)} /></label>
        <label>Description<textarea id="wd-course-description" aria-label="Course description" rows={2} value={course.description} onChange={(e) => setField("description", e.target.value)} placeholder="What is the course about?" /></label>
      </div>
      {error && <p role="alert" className="wd-a4-error">{error}</p>}
      <div className="wd-a4-actions"><button id="wd-add-course" className="wd-a3-btn" type="submit">Add</button>
        <button id="wd-update-course" className="wd-a3-btn secondary" type="button" onClick={() => save(true)} disabled={!course._id}>Update</button>
        <button className="wd-a3-btn secondary" type="button" onClick={() => { setCourse({ ...emptyCourse }); setError(""); }}>Clear</button></div>
    </form>
    <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
    <div id="wd-dashboard-courses" className="wd-a3-grid">
      {visibleCourses.map((item) => {
        const enrolled = !!currentUser && enrollments.some((e) => e.user === currentUser._id && e.course === item._id);
        return <CourseCard key={item._id} course={item}
          onEdit={() => { setCourse({ ...item }); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          onDelete={() => { if (window.confirm(`Delete ${item.name}?`)) deleteCourse(item._id); }}
          enrollmentButton={currentUser && <button type="button" className={`wd-a3-btn ${enrolled ? "danger" : "success"}`}
            onClick={() => enrolled ? unenroll(currentUser._id, item._id) : enroll(currentUser._id, item._id)}>
            {enrolled ? "Unenroll" : "Enroll"}
          </button>}
        />;
      })}
    </div>
  </main>;
}
