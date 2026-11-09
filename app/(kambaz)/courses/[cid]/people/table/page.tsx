"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useAccount } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const { users } = useAccount();
  const { enrollments, enroll, unenroll } = useEnrollmentsStore();
  const [selectedUser, setSelectedUser] = useState("");
  const enrolled = new Set(enrollments.filter((entry) => entry.course === cid).map((entry) => entry.user));
  const people = users.filter((user) => enrolled.has(user._id));
  return <div id="wd-people-table"><h2>People ({people.length})</h2>
    <div className="wd-a4-actions" style={{ marginBottom: 16 }}>
      <select aria-label="Choose a user to enroll" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Choose a user</option>{users.filter((user) => !enrolled.has(user._id)).map((user) => <option key={user._id} value={user._id}>{user.firstName} {user.lastName}</option>)}
      </select>
      <button type="button" className="wd-a3-btn" disabled={!selectedUser} onClick={() => { enroll(selectedUser, cid); setSelectedUser(""); }}>Add person</button>
    </div>
    <div className="wd-a3-table-wrap"><table className="wd-a3-table"><thead><tr><th>Name</th><th>Login ID</th><th>Role</th><th>Action</th></tr></thead>
      <tbody>{people.map((user) => <tr key={user._id}><td>{user.firstName} {user.lastName}</td><td>{user.username}</td><td>{user.role}</td><td>
        <button type="button" className="wd-a3-btn danger" onClick={() => unenroll(user._id, cid)}>Unenroll</button>
      </td></tr>)}</tbody></table></div>
  </div>;
}
