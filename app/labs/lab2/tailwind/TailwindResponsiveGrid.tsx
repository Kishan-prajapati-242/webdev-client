export default function TailwindResponsiveGrid() {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-bold">Responsive grid columns</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {["HTML", "CSS", "React", "Next.js"].map((item) => (
          <div key={item} className="rounded bg-rose-200 p-4">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
