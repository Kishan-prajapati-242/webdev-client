import Link from "next/link";
import {notFound} from "next/navigation";
import * as db from "../../../../database";
export default async function AssignmentEditor({params}:{params:Promise<{cid:string;aid:string}>}){
 const {cid,aid}=await params;const assignment=db.assignments.find(a=>a._id===aid&&a.course===cid);
 if(!assignment) notFound();
 const back=`/courses/${cid}/assignments`;
 return <main id="wd-assignments-editor"><h2>Edit Assignment</h2><div className="wd-a3-edit">
  <label htmlFor="wd-name">Assignment Name</label><input id="wd-name" defaultValue={assignment.title}/><p style={{fontSize:13,color:"#556070"}}>Assignment id: {aid}</p>
  <label htmlFor="wd-description">Description</label><textarea id="wd-description" defaultValue={assignment.description} rows={6}/>
  <div className="wd-a3-fields"><div><label htmlFor="wd-points">Points</label><input id="wd-points" type="number" defaultValue={assignment.points}/></div>
  <div><label htmlFor="wd-group">Assignment Group</label><select id="wd-group" defaultValue="ASSIGNMENTS"><option value="ASSIGNMENTS">ASSIGNMENTS</option></select></div></div>
  <div className="wd-a3-fields"><div><label htmlFor="wd-due-date">Due</label><input id="wd-due-date" type="date" defaultValue={assignment.due}/></div>
  <div><label htmlFor="wd-available-from">Available from</label><input id="wd-available-from" type="date" defaultValue={assignment.available}/></div></div>
  <div className="wd-a3-actions"><Link id="wd-cancel" className="wd-a3-btn secondary" href={back}>Cancel</Link><Link id="wd-save" className="wd-a3-btn" href={back}>Save</Link></div>
 </div></main>;
}
