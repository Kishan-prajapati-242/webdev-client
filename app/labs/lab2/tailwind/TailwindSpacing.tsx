export default function TailwindSpacing() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Margins and padding</h2>
      <div className="border border-slate-400 bg-slate-100">
        <p className="m-4 bg-blue-200 p-4">
          m-4 and p-4: margin outside, padding inside.
        </p>
        <p className="mx-8 my-4 bg-green-200 px-8 py-3">
          Separate horizontal and vertical spacing.
        </p>
        <p className="ml-6 mt-6 rounded bg-orange-100 p-3">
          I give my examples room to breathe.
        </p>
        <p id="wd-ai-spacing" className="mb-6 ms-6 bg-violet-200 p-5">
          A second spacing sample.
        </p>
      </div>
    </section>
  );
}
