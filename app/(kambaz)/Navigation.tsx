"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard, AiOutlineHistory, AiOutlineCalendar, AiOutlineBook, AiOutlineInbox, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
const LINKS=[
 { label:"Dashboard",path:"/dashboard",icon:AiOutlineDashboard },
 { label:"Courses",path:"/dashboard",icon:AiOutlineBook },
 { label:"Calendar",path:"/calendar",icon:AiOutlineCalendar },
 { label:"Inbox",path:"/inbox",icon:AiOutlineInbox },
 { label:"Labs",path:"/labs",icon:AiOutlineSetting },
 { label:"History",path:"/history",icon:AiOutlineHistory },
];
export default function Navigation(){
 const path=usePathname();const account=path.startsWith("/account");
 return <nav id="wd-kambaz-navigation" className="wd-a3-side" aria-label="Kambaz navigation">
  <div className="wd-a3-mark">NEU</div>
  <Link href="/account/signin" id="wd-account-link" className={account?"wd-active":""} aria-current={account?"page":undefined}><AiOutlineUser className="wd-nav-ico"/>Account</Link>
  {LINKS.map(({label,path:href,icon:Icon})=>{
   const active=label==="Courses"?path.startsWith("/courses/"):label==="Dashboard"?path==="/dashboard":label==="Labs"?path.startsWith("/labs"):path===href||path.startsWith(href+"/");
   return <Link key={label} href={href} id={`wd-${label.toLowerCase()}-link`} aria-current={active?"page":undefined}><Icon className="wd-nav-ico"/>{label}</Link>;
  })}
 </nav>
}
