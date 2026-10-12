import CourseCard from "./CourseCard";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="mb-2 text-3xl font-semibold">
        Dashboard
      </h1>
      <hr className="border-neutral-300" />
      <h2 id="wd-dashboard-published" className="my-5 text-xl font-medium">
        Published Courses (4)
      </h2>
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="/images/reactjs.svg"
        />
        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="/images/nodejs.svg"
        />
        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="/images/mongodb.svg"
        />
        <CourseCard
          id="5100"
          title="CS5100 Foundations of AI"
          subtitle="Search, reasoning, and learning"
          image="/images/reactjs.svg"
        />
      </div>
    </div>
  );
}
