import { create } from "zustand";
import { courses as initialCourses } from "../database";

export type Course = (typeof initialCourses)[number];
export const emptyCourse: Course = {
  _id: "", name: "", number: "", description: "", image: "/images/a3-rs101.svg",
  term: "Fall 2026", startDate: "2026-09-09", endDate: "2026-12-18", credits: 4,
};

type CoursesState = {
  courses: Course[];
  addCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
  deleteCourse: (id: string) => void;
};

export const useCoursesStore = create<CoursesState>((set) => ({
  courses: initialCourses.map((course) => ({ ...course })),
  addCourse: (course) => set((state) => ({ courses: [...state.courses, course] })),
  updateCourse: (course) => set((state) => ({
    courses: state.courses.map((item) => item._id === course._id ? course : item),
  })),
  deleteCourse: (id) => set((state) => ({
    courses: state.courses.filter((course) => course._id !== id),
  })),
}));
