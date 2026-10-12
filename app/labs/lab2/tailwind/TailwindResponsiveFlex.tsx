export default function TailwindResponsiveFlex() {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-bold">Stack, then side by side</h2>
      <div className="flex flex-col gap-3 md:flex-row">
        {["Research", "Code", "Review"].map((item) => (
          <div key={item} className="flex-1 rounded bg-sky-200 p-4">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
