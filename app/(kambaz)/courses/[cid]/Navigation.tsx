"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
const LINKS=[{label:"Home",path:"home"},{label:"Modules",path:"modules"},{label:"Assignments",path:"assignments"},{label:"People",path:"people/table"},{label:"Announcements",path:"announcements"}];
export default function CourseNavigation({cid}:{cid:string}){
 const pathname=usePathname();
 return <nav className="wd-a3-course-links" id="wd-course-navigation" aria-label="Course navigation">{LINKS.map(link=>{
 const url=`/courses/${cid}/${link.path}`;const active=pathname===url||pathname.startsWith(url+"/");
 return <Link key={link.label} id={`wd-course-${link.label.toLowerCase()}-link`} href={url} aria-current={active?"page":undefined}>{link.label}</Link>;
 })}</nav>;
}
