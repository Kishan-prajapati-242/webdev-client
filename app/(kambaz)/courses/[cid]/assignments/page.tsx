import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="relative">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            className="rounded border border-neutral-300 py-2 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="flex items-center gap-1 rounded border border-neutral-300 px-3 py-2 text-sm"
          >
            <FaPlus /> Group
          </button>
          <button
            id="wd-add-assignment"
            type="button"
            className="flex items-center gap-1 rounded bg-red-600 px-3 py-2 text-sm text-white"
          >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <h2
        id="wd-assignments-title"
        className="m-0 rounded bg-neutral-200 p-3 text-lg font-semibold"
      >
        ASSIGNMENTS 40% of Total
      </h2>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        <AssignmentItem
          cid={cid}
          aid="A101"
          title="A1 - ENV + HTML"
          details="Multiple Modules | Due Sep 27 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="A102"
          title="A2 - CSS + TAILWIND"
          details="Multiple Modules | Due Oct 11 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="A103"
          title="A3 - JAVASCRIPT + REACT"
          details="Multiple Modules | Due Oct 25 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="A104"
          title="A4 - My full stack portfolio"
          details="Multiple Modules | Due Nov 8 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="ai-a"
          title="A9 - Sample assignment"
          details="Multiple Modules | Due Dec 1 at 11:59pm | 100 pts"
        />
      </ul>
    </div>
  );
}
