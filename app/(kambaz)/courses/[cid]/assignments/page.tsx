import Link from "next/link";
import * as db from "../../../database";
export default async function Assignments({params}:{params:Promise<{cid:string}>}){
 const {cid}=await params;const assignments=db.assignments.filter(a=>a.course===cid);
 return <div id="wd-assignments"><div className="wd-a3-toolbar"><input id="wd-search-assignment" aria-label="Search for Assignments" placeholder="Search for Assignments"/><span className="wd-a3-btn">+ Assignment</span></div><h2 id="wd-assignments-title">Assignments</h2>
 <ul className="wd-a3-assignments" id="wd-assignment-list">{assignments.map(assignment=><li key={assignment._id} className="wd-assignment-item"><Link href={`/courses/${cid}/assignments/${assignment._id}`}><strong>{assignment.title}</strong><span className="wd-details">Multiple Modules | Available {assignment.available} | Due {assignment.due} | {assignment.points} pts</span></Link></li>)}</ul>
 {assignments.length===0&&<p className="wd-a3-empty">No assignments.</p>}</div>;
}
