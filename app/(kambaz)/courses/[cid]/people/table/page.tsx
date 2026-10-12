import { FaUserCircle } from "react-icons/fa";

const people = [
  { name: "Kishan Prajapati", login: "kishan", section: "Boston", role: "STUDENT" },
  { name: "Ada Lovelace", login: "ada", section: "S101", role: "STUDENT" },
  { name: "Alan Turing", login: "alan", section: "S101", role: "STUDENT" },
  { name: "Grace Hopper", login: "grace", section: "S101", role: "FACULTY" },
  { name: "Margaret Hamilton", login: "margaret", section: "S102", role: "STUDENT" },
  { name: "Katherine Johnson", login: "katherine", section: "S102", role: "STUDENT" },
];
export default function People() {
  return (
    <section id="wd-people">
      <h3 className="mb-4 text-2xl font-semibold">People</h3>
      <div id="wd-people-table" className="overflow-x-auto rounded border border-neutral-300">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-neutral-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Login ID</th>
              <th className="p-3">Section</th>
              <th className="p-3">Role</th>
              <th className="p-3">Last Activity</th>
              <th className="p-3">Total Activity</th>
            </tr>
          </thead>
          <tbody>
            {people.map(({ name, login, section, role }) => (
              <tr key={login} className="border-t border-neutral-200 odd:bg-neutral-50">
                <td className="whitespace-nowrap p-3 font-medium text-red-700">
                  <FaUserCircle className="mr-2 inline text-xl text-neutral-500" aria-hidden="true" />
                  {name}
                </td>
                <td className="p-3">{login}</td>
                <td className="p-3">{section}</td>
                <td className="p-3">{role}</td>
                <td className="p-3">—</td>
                <td className="p-3">—</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
