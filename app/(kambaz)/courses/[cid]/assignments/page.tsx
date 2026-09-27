import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" />
      <button>+ Group</button>
      <button>+ Assignment</button>

      <h2 id="wd-assignments-title">Assignments 40% of Total</h2>

      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="A101"
          title="A1 - ENV + HTML"
          details="Multiple Modules | Not available until Sep 20 at 12:00am | Due Sep 27 at 11:59pm | 100 pts"
        />

        <AssignmentItem
          cid={cid}
          aid="A102"
          title="A2 - CSS + BOOTSTRAP"
          details="Multiple Modules | Not available until Oct 1 at 12:00am | Due Oct 4 at 11:59pm | 100 pts"
        />

        <AssignmentItem
          cid={cid}
          aid="A103"
          title="A3 - JAVASCRIPT + REACT"
          details="Multiple Modules | Not available until Oct 8 at 12:00am | Due Oct 11 at 11:59pm | 100 pts"
        />
      </ul>
    </div>
  );
}
