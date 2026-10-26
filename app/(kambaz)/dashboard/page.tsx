import CourseCard from "./CourseCard";
import * as db from "../database";
export default function Dashboard(){return <main className="wd-a3-page" id="wd-dashboard"><h1 id="wd-dashboard-title">Dashboard</h1><hr className="wd-a3-rule"/><h2 id="wd-dashboard-published">Published Courses ({db.courses.length})</h2><div id="wd-dashboard-courses" className="wd-a3-grid">{db.courses.map(course=><CourseCard key={course._id} {...course}/>)}</div></main>}
