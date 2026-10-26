import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import * as db from "../../database";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
export default async function CourseLayout({children,params}:{children:ReactNode;params:Promise<{cid:string}>}){
 const {cid}=await params;const course=db.courses.find(c=>c._id===cid);
 if(!course) notFound();
 return <div className="wd-a3-page"><div className="wd-a3-course-shell"><CourseNavigation cid={cid}/><main><Breadcrumb cid={cid}/>{children}</main></div></div>
}
