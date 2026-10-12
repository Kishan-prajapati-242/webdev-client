const people = [
  ["Kishan Prajapati", "Student", "Computer Science"],
  ["Ada Lovelace", "Student", "Computer Science"],
  ["Alan Turing", "Student", "Mathematics"],
  ["Grace Hopper", "Student", "Computer Science"],
  ["Margaret Hamilton", "Student", "Software Engineering"],
  ["Katherine Johnson", "Student", "Mathematics"],
];
export default function People() {
  return (
    <section id="wd-people">
      <h3 className="mb-4 text-2xl font-semibold">People</h3>
      <div className="overflow-x-auto rounded border border-neutral-300">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-neutral-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Department</th>
            </tr>
          </thead>
          <tbody>
            {people.map(([name, role, department]) => (
              <tr key={name} className="border-t border-neutral-200">
                <td className="p-3 font-medium text-red-700">{name}</td>
                <td className="p-3">{role}</td>
                <td className="p-3">{department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
