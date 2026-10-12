import {
  FaBullhorn,
  FaCalendarAlt,
  FaChartBar,
  FaCloudUploadAlt,
  FaHome,
  FaRegBell,
  FaStream,
} from "react-icons/fa";
export default function CourseStatus() {
  const actions = [
    [FaCloudUploadAlt, "Import Existing Content"],
    [FaCloudUploadAlt, "Import from Commons"],
    [FaHome, "Choose Home Page"],
    [FaStream, "View Course Stream"],
    [FaBullhorn, "New Announcement"],
    [FaChartBar, "New Analytics"],
    [FaRegBell, "View Course Notifications"],
    [FaCalendarAlt, "View Course Calendar"],
  ] as const;
  return (
    <aside
      id="wd-course-status"
      className="rounded border border-neutral-200 p-4"
    >
      <h2 className="mt-0 text-lg font-semibold">Course Status</h2>
      <div className="mb-4 flex gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 px-3 py-2 text-sm"
        >
          Unpublish
        </button>
        <button
          type="button"
          className="rounded bg-green-600 px-3 py-2 text-sm text-white"
        >
          Publish
        </button>
      </div>
      <div className="grid gap-2">
        {actions.map(([Icon, label]) => (
          <button
            key={label}
            type="button"
            className="flex items-center gap-2 rounded border border-neutral-300 bg-neutral-50 px-3 py-2 text-left text-sm"
          >
            <Icon className="text-neutral-500" />
            {label}
          </button>
        ))}
        <button
          id="wd-ai-status"
          type="button"
          className="flex items-center gap-2 rounded border border-neutral-300 bg-neutral-50 px-3 py-2 text-left text-sm"
        >
          <FaChartBar className="text-neutral-500" /> Sample action
        </button>
      </div>
    </aside>
  );
}
