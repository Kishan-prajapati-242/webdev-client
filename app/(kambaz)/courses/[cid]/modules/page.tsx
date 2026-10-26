import * as db from "../../../database";
export default async function Modules({params}:{params:Promise<{cid:string}>}){
 const {cid}=await params;const modules=db.modules.filter(m=>m.course===cid);
 return <div id="wd-modules-container"><div className="wd-a3-toolbar"><h2>Modules</h2><span className="wd-a3-btn secondary">Publish All</span></div>
 <ul id="wd-modules" className="wd-a3-modules">{modules.map(module=><li key={module._id} className="wd-a3-module"><h3>{module.name}</h3><ul>{module.lessons?.map(lesson=><li key={lesson._id}>{lesson.name}</li>)}</ul></li>)}</ul>
 {modules.length===0&&<p className="wd-a3-empty">No modules for this course.</p>}
 </div>;
}
