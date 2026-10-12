import Link from "next/link";
import Image from "next/image";
export default function CourseCard({
  id,
  title,
  subtitle,
  image,
}: {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <article className="wd-dashboard-course overflow-hidden rounded border border-neutral-300 bg-white shadow-sm">
      <Link
        className="wd-dashboard-course-link block text-neutral-800"
        href={`/courses/${id}/home`}
      >
        <div className="flex h-36 items-center justify-center bg-neutral-100">
          <Image
            src={image}
            width={170}
            height={120}
            alt=""
            className="h-28 w-auto object-contain"
          />
        </div>
        <div className="p-4">
          <h3 className="m-0 text-lg font-semibold text-red-700">{title}</h3>
          <p className="wd-dashboard-course-title mt-1 text-sm text-neutral-600">
            {subtitle}
          </p>
          <span className="inline-block rounded border border-neutral-300 px-3 py-1 text-sm">
            Go to course
          </span>
        </div>
      </Link>
    </article>
  );
}
