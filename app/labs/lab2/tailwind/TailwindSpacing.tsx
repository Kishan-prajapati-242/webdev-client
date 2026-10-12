export default function TailwindSpacing() {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold">Margin</h2>
      <div className="border border-slate-400 bg-slate-100">
        <div className="mb-4 bg-blue-200 p-4">Bottom margin of 4.</div>
        <div className="ms-4 me-8 bg-blue-200 p-4">Start margin of 4 and end margin of 8.</div>
        <h2 className="mt-8 text-3xl font-bold">Padding</h2>
        <div className="mb-4 bg-green-200 ps-2 pt-4 pb-8">
          Start padding of 2, top padding of 4, and bottom padding of 8.
        </div>
        <div className="bg-green-200 p-6">Padding of 6 on every side.</div>
        <p className="ml-6 mt-6 rounded bg-orange-100 p-3">
          I give my examples room to breathe.
        </p>
        <p id="wd-ai-spacing" className="mt-6 bg-purple-200 ps-8 pb-4">
          A second spacing sample.
        </p>
      </div>
    </section>
  );
}
