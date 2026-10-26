"use client";
import {usePathname} from "next/navigation";
import * as db from "../../database";
export default function Breadcrumb({cid}:{cid:string}){
 const path=usePathname();const parts=path.split("/").filter(Boolean);
 const section=parts[2]??"home";
 const label=section==="people"?"People":section.charAt(0).toUpperCase()+section.slice(1);
 const course=db.courses.find(c=>c._id===cid);
 return <header className="wd-a3-breadcrumb" id="wd-course-breadcrumb">{course?.name} ({cid}) <span className="wd-muted">&gt; {label}</span></header>;
}
