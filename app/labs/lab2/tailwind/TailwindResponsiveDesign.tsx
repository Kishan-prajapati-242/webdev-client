export default function TailwindResponsiveDesign() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Responsive card</h2>
      <article className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-white shadow-md md:flex md:bg-sky-50">
        <div className="flex h-48 items-center justify-center bg-slate-800 p-8 md:h-auto md:w-48 md:shrink-0">
          <img
            src="/images/reactjs.svg"
            alt="React logo"
            className="h-28 w-28"
          />
        </div>
        <div className="p-5 md:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            My project
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">
            Doctor-to-Human Translator
          </h3>
          <p className="mt-2 text-slate-600">
            I am working on making medical language easier for patients to
            understand.
          </p>
        </div>
      </article>
      <article
        id="wd-ai-responsive"
        className="mt-5 rounded-lg bg-slate-100 p-4 md:bg-indigo-50 md:p-8 lg:p-12"
      >
        <h3 className="text-lg font-semibold">Sample responsive card</h3>
        <p className="mt-2">
          The padding and background change at wider breakpoints.
        </p>
      </article>
    </section>
  );
}
