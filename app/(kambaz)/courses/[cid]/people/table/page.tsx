import * as db from "../../../../database";
export default async function PeopleTable({params}:{params:Promise<{cid:string}>}){
 const {cid}=await params;
 const enrolledIds=new Set(db.enrollments.filter(e=>e.course===cid).map(e=>e.user));
 const people=db.users.filter(u=>enrolledIds.has(u._id));
 return <div id="wd-people-table"><h2>People ({people.length})</h2><div className="wd-a3-table-wrap"><table className="wd-a3-table"><thead><tr><th>Name</th><th>Login ID</th><th>Role</th></tr></thead><tbody>{people.map(user=><tr key={user._id}><td>{user.firstName} {user.lastName}</td><td>{user.username}</td><td>{user.role}</td></tr>)}</tbody></table></div></div>;
}
