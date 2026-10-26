import Link from "next/link";
import * as db from "../../../database";
export default async function CourseHome({params}:{params:Promise<{cid:string}>}){
 const {cid}=await params;const course=db.courses.find(c=>c._id===cid);
 const modules=db.modules.filter(m=>m.course===cid);
 return <div id="wd-home"><h2>Welcome to {course?.name}</h2><p>{course?.description}</p><p>Term: {course?.term}</p><h3>Course Modules</h3><ul>{modules.map(m=><li key={m._id}>{m.name}</li>)}</ul><p><Link className="wd-a3-btn" href={`/courses/${cid}/modules`}>View Modules</Link></p></div>;
}
