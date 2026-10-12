export default function TailwindResponsiveSpacingText() {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-bold">Spacing and text size</h2>
      <div className="rounded bg-violet-200 p-3 text-sm md:p-6 md:text-lg lg:p-10 lg:text-2xl">
        This text and its padding grow with the viewport.
      </div>
    </section>
  );
}
