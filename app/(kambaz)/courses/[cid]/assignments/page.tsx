"use client";
import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const router = useRouter();
  const { assignments, deleteAssignment } = useAssignmentsStore();
  const [search, setSearch] = useState("");
  const selected = useMemo(() => assignments.filter((a) => a.course === cid && a.title.toLowerCase().includes(search.toLowerCase())), [assignments, cid, search]);
  return <div id="wd-assignments"><div className="wd-a3-toolbar">
    <input id="wd-search-assignment" aria-label="Search for Assignments" placeholder="Search for Assignments" value={search} onChange={(e) => setSearch(e.target.value)} />
    <button id="wd-add-assignment" type="button" className="wd-a3-btn" onClick={() => router.push(`/courses/${cid}/assignments/new`)}>+ Assignment</button>
  </div><h2 id="wd-assignments-title">Assignments</h2>
    <ul className="wd-a3-assignments" id="wd-assignment-list">{selected.map((assignment) => <li key={assignment._id} className="wd-assignment-item wd-a4-assignment-row">
      <Link href={`/courses/${cid}/assignments/${assignment._id}`}><strong>{assignment.title}</strong><span className="wd-details">Multiple Modules | Available {assignment.available} | Due {assignment.due} | {assignment.points} pts</span></Link>
      <button type="button" className="wd-a3-btn danger" aria-label={`Delete ${assignment.title}`} onClick={() => {
        if (window.confirm(`Delete ${assignment.title}?`)) deleteAssignment(assignment._id);
      }}>Delete</button>
    </li>)}</ul>
    {selected.length === 0 && <p className="wd-a3-empty">No assignments found.</p>}
  </div>;
}
