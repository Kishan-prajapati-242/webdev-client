import Link from "next/link";
export default function CourseCard({_id,name,description,image}:{_id:string;name:string;description:string;image:string}){
 return <article className="wd-dashboard-course wd-a3-card"><Link href={`/courses/${_id}/home`} className="wd-dashboard-course-link"><img src={image} alt={`${name} course illustration`} width={640} height={360}/><div className="wd-a3-card-inner"><h3 className="wd-dashboard-course-title">{name}</h3><p className="wd-dashboard-course-description">{description}</p><span className="wd-a3-btn">Go</span></div></Link></article>
}
