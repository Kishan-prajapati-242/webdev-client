import { create } from "zustand";
import { assignments as initialAssignments } from "../database";

export type Assignment = (typeof initialAssignments)[number] & { until?: string };
export const emptyAssignment: Assignment = {
  _id: "", title: "", course: "", description: "", points: 100,
  due: "", available: "", until: "",
};

type AssignmentsState = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (id: string) => void;
};
export const useAssignmentsStore = create<AssignmentsState>((set) => ({
  assignments: initialAssignments.map((assignment) => ({ ...assignment, until: "" })),
  addAssignment: (assignment) => set((state) => ({
    assignments: [...state.assignments, assignment],
  })),
  updateAssignment: (assignment) => set((state) => ({
    assignments: state.assignments.map((item) => item._id === assignment._id ? assignment : item),
  })),
  deleteAssignment: (id) => set((state) => ({
    assignments: state.assignments.filter((item) => item._id !== id),
  })),
}));
