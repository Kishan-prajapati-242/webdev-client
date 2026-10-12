import { FaHeart, FaRegCalendarAlt } from "react-icons/fa";
import { MdSchool, MdOutlineEmail } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { BsCodeSlash } from "react-icons/bs";
export default function ReactIconsSampler() {
  return (
    <section id="wd-react-icons">
      <h2>React Icons</h2>
      <div className="wd-icon-row">
        <FaHeart title="Heart" className="wd-icon-red" />
        <FaRegCalendarAlt title="Calendar" />
        <MdSchool title="School" />
        <MdOutlineEmail title="Email" />
        <HiOutlineAcademicCap title="Learning" className="wd-icon-blue" />
        <BsCodeSlash title="Code" className="wd-icon-blue" />
      </div>
    </section>
  );
}
