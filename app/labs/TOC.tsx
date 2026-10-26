"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
const LINKS=[{label:"Home",id:"wd-home-link",href:"/labs"},{label:"Lab 1",id:"wd-lab1-link",href:"/labs/lab1"},{label:"Lab 2",id:"wd-lab2-link",href:"/labs/lab2"},{label:"Lab 3",id:"wd-lab3-link",href:"/labs/lab3"},{label:"Kambaz",id:"wd-kambaz-link",href:"/dashboard"},{label:"Book Ch3",id:"wd-book-ch3-link",href:"https://kambaz.dev/book/ch3",external:true}];
export default function TOC(){const pathname=usePathname();return <nav id="wd-labs-toc" aria-label="Labs table of contents" style={{display:"flex",flexWrap:"wrap",gap:7,padding:"14px 0"}}>{LINKS.map(link=>{
 const active=!link.external&&link.href.startsWith("/labs/lab")&&(pathname===link.href||pathname.startsWith(link.href+"/"));
 return <Link key={link.label} id={link.id} href={link.href} aria-current={active?"page":undefined} target={link.external?"_blank":undefined} rel={link.external?"noreferrer":undefined}
 style={{padding:"8px 12px",borderRadius:20,textDecoration:"none",border:"1px solid #cbd5e1",background:active?"#b71e26":"#fff",color:active?"#fff":"#334155",fontWeight:active?700:400}}>{link.label}</Link>;
 })}</nav>}
