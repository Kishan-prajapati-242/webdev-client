export default function TailwindGrids() {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-bold">Tailwind Grids</h2>
      <h3 className="mt-5 text-lg font-bold">4 Columns Grid</h3>
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="bg-blue-300 p-3 text-center">
            {String(i + 1).padStart(2, "0")}
          </div>
        ))}
      </div>
      <h3 className="mt-5 text-lg font-bold">3 Columns Grid with spans</h3>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-300 p-3">01</div>
        <div className="bg-blue-300 p-3">02</div>
        <div className="bg-blue-300 p-3">03</div>
        <div className="col-span-2 bg-blue-300 p-3">04 spans two columns</div>
        <div className="bg-blue-300 p-3">05</div>
      </div>
      <div id="wd-tailwind-grid-system" className="mt-5">
        <h3 className="text-lg font-bold">12 column layout</h3>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 bg-rose-200 p-3">Sidebar</div>
          <div className="col-span-9 bg-teal-200 p-3">Content</div>
        </div>
      </div>
      <div
        id="wd-ai-grid"
        className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4"
      >
        <div className="col-span-2 bg-indigo-200 p-3">Sample span</div>
        <div className="bg-indigo-200 p-3">Three</div>
        <div className="bg-indigo-200 p-3">Four</div>
      </div>
    </section>
  );
}
