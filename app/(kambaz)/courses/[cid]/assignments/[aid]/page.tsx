"use client";
import { useEffect, useState, type FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAssignmentsStore, emptyAssignment, type Assignment } from "../../../../store/assignmentsStore";
export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const { assignments, addAssignment, updateAssignment } = useAssignmentsStore();
  const existing = assignments.find((item) => item._id === aid && item.course === cid);
  const [draft, setDraft] = useState<Assignment>(() => existing ? { ...existing } : { ...emptyAssignment, course: cid });
  useEffect(() => { setDraft(existing ? { ...existing } : { ...emptyAssignment, course: cid }); }, [existing, cid, aid]);
  const newAssignment = aid === "new";
  const back = `/courses/${cid}/assignments`;
  if (!newAssignment && !existing) return <div id="wd-assignments-editor"><h2>Assignment not found</h2></div>;
  const update = (key: keyof Assignment, value: string | number) => setDraft((old) => ({ ...old, [key]: value }));
  function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft.title.trim()) return;
    if (newAssignment) addAssignment({ ...draft, _id: `A${Date.now()}`, course: cid });
    else updateAssignment({ ...draft, _id: aid, course: cid });
    router.push(back);
  }
  return <main id="wd-assignments-editor"><h2>{newAssignment ? "New Assignment" : "Edit Assignment"}</h2>
    <form className="wd-a3-edit" onSubmit={save}>
      <label htmlFor="wd-name">Assignment Name</label><input id="wd-name" value={draft.title} required onChange={(e) => update("title", e.target.value)} />
      <p className="wd-details">Assignment id: {newAssignment ? "new" : aid}</p>
      <label htmlFor="wd-description">Description</label><textarea id="wd-description" value={draft.description} rows={6} onChange={(e) => update("description", e.target.value)} />
      <div className="wd-a3-fields">
        <div><label htmlFor="wd-points">Points</label><input type="number" id="wd-points" min={0} value={draft.points} onChange={(e) => update("points", Number(e.target.value))} /></div>
        <div><label htmlFor="wd-group">Assignment Group</label><select id="wd-group" defaultValue="ASSIGNMENTS"><option>ASSIGNMENTS</option><option>QUIZZES</option><option>PROJECTS</option></select></div>
        <div><label htmlFor="wd-due-date">Due</label><input type="date" id="wd-due-date" value={draft.due} onChange={(e) => update("due", e.target.value)} /></div>
        <div><label htmlFor="wd-available-from">Available from</label><input type="date" id="wd-available-from" value={draft.available} onChange={(e) => update("available", e.target.value)} /></div>
        <div><label htmlFor="wd-available-until">Until</label><input type="date" id="wd-available-until" value={draft.until ?? ""} onChange={(e) => update("until", e.target.value)} /></div>
      </div>
      <div className="wd-a3-actions"><button id="wd-cancel" type="button" className="wd-a3-btn secondary" onClick={() => router.push(back)}>Cancel</button>
        <button id="wd-save" type="submit" className="wd-a3-btn">Save</button></div>
    </form>
  </main>;
}
