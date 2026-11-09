import { create } from "zustand";
import { enrollments as initialEnrollments } from "../database";

export type Enrollment = (typeof initialEnrollments)[number];
type EnrollmentState = {
  enrollments: Enrollment[];
  enroll: (user: string, course: string) => void;
  unenroll: (user: string, course: string) => void;
};
export const useEnrollmentsStore = create<EnrollmentState>((set) => ({
  enrollments: initialEnrollments.map((enrollment) => ({ ...enrollment })),
  enroll: (user, course) => set((state) => {
    if (state.enrollments.some((entry) => entry.user === user && entry.course === course)) return state;
    return { enrollments: [...state.enrollments, {
      _id: `E${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, user, course,
    }] };
  }),
  unenroll: (user, course) => set((state) => ({
    enrollments: state.enrollments.filter((entry) => entry.user !== user || entry.course !== course),
  })),
}));
