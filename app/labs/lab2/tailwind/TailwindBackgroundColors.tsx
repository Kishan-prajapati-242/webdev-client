export default function TailwindBackgroundColors() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Background colors</h2>
      <div className="mb-3 bg-red-500 p-4 text-white">Red 500</div>
      <div className="mb-3 bg-green-500 p-4 text-white">Green 500</div>
      <div className="mb-3 bg-blue-500 p-4 text-white">Blue 500</div>
      <div className="mb-3 bg-yellow-500 p-4 text-black">Yellow 500</div>
      <div className="mb-3 bg-teal-100 p-4 text-teal-900">
        A lighter shade with dark text
      </div>
      <div id="wd-ai-bg" className="mb-3 bg-indigo-700 p-4 text-white">
        Indigo 700
      </div>
    </section>
  );
}
