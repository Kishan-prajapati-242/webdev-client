import Modules from "../modules/page";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div id="wd-home" className="flex flex-col gap-5 lg:flex-row">
      <div className="min-w-0 flex-1">
        <Modules />
      </div>
      <div className="w-full lg:w-72 lg:shrink-0">
        <CourseStatus />
      </div>
    </div>
  );
}
