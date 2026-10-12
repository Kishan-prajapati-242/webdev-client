import Link from "next/link";
export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  return (
    <li className="wd-assignment-list-item border-b border-l-4 border-b-neutral-200 border-l-green-600 p-4">
      <Link
        className="wd-assignment-link font-semibold text-red-700 hover:underline"
        href={`/courses/${cid}/assignments/${aid}`}
      >
        {title}
      </Link>
      <p className="m-0 mt-1 text-sm text-neutral-600">{details}</p>
    </li>
  );
}
