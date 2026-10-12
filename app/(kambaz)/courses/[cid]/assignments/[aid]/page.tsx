import Link from "next/link";
import { assignments } from "../data";
const field =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = assignments.find((item) => item.aid === aid) ?? assignments[0];
  const back = `/courses/${cid}/assignments`;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <h1 className="mb-5 text-2xl font-semibold">Assignment Editor</h1>
      <div className="grid gap-5">
        <div>
          <label htmlFor="wd-name" className="mb-1 block font-medium">
            Assignment Name
          </label>
          <input
            id="wd-name"
            className={field}
            defaultValue={assignment.title}
          />
        </div>
        <div>
          <label htmlFor="wd-description" className="mb-1 block font-medium">
            Description
          </label>
          <textarea
            id="wd-description"
            rows={5}
            className={field}
            defaultValue={assignment.description}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="wd-points" className="mb-1 block font-medium">
              Points
            </label>
            <input
              id="wd-points"
              type="number"
              className={field}
              defaultValue={assignment.points}
            />
          </div>
          <div>
            <label htmlFor="wd-group" className="mb-1 block font-medium">
              Assignment Group
            </label>
            <select id="wd-group" className={field} defaultValue="ASSIGNMENTS">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </select>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="wd-display-grade-as"
              className="mb-1 block font-medium"
            >
              Display Grade as
            </label>
            <select
              id="wd-display-grade-as"
              className={field}
              defaultValue="Percentage"
            >
              <option>Percentage</option>
              <option>Points</option>
              <option>Letter Grade</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="wd-submission-type"
              className="mb-1 block font-medium"
            >
              Submission Type
            </label>
            <select
              id="wd-submission-type"
              className={field}
              defaultValue="Online"
            >
              <option>Online</option>
              <option>On Paper</option>
              <option>No Submission</option>
            </select>
          </div>
        </div>
        <fieldset className="rounded border border-neutral-300 p-4">
          <legend className="px-1 font-medium">Online Entry Options</legend>
          {[
            ["wd-text-entry", "Text Entry"],
            ["wd-website-url", "Website URL"],
            ["wd-media-recordings", "Media Recordings"],
            ["wd-student-annotation", "Student Annotation"],
            ["wd-file-upload", "File Upload"],
          ].map(([id, label]) => (
            <label
              key={id}
              htmlFor={id}
              className="mb-2 flex items-center gap-2 text-sm"
            >
              <input
                id={id}
                type="checkbox"
                defaultChecked={id === "wd-website-url"}
              />
              {label}
            </label>
          ))}
        </fieldset>
        <fieldset className="rounded border border-neutral-300 p-4">
          <legend className="px-1 font-medium">Assign</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="wd-assign-to" className="mb-1 block font-medium">
                Assign to
              </label>
              <input
                id="wd-assign-to"
                className={field}
                defaultValue="Everyone"
              />
            </div>
            {[
              ["wd-due-date", "Due"],
              ["wd-available-from", "Available from"],
              ["wd-available-until", "Until"],
            ].map(([id, label]) => (
              <div key={id}>
                <label htmlFor={id} className="mb-1 block font-medium">
                  {label}
                </label>
                <input id={id} type="datetime-local" className={field} />
              </div>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="wd-ai-editor-notes" className="mb-1 block font-medium">
            Sample notes
          </label>
          <textarea
            id="wd-ai-editor-notes"
            rows={2}
            className={field}
            placeholder="Notes for this sample assignment"
          />
        </div>
        <div className="flex justify-end gap-2 border-t border-neutral-200 pt-4">
          <Link
            id="wd-cancel"
            href={back}
            className="rounded border border-neutral-300 px-4 py-2 text-neutral-700"
          >
            Cancel
          </Link>
          <Link
            id="wd-save"
            href={back}
            className="rounded bg-red-600 px-4 py-2 text-white"
          >
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
