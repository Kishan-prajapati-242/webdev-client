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
    <li className="wd-assignment-list-item">
      <Link
        className="wd-assignment-link"
        href={`/courses/${cid}/assignments/${aid}`}
      >
        {title}
      </Link>

      <p>{details}</p>
    </li>
  );
}
