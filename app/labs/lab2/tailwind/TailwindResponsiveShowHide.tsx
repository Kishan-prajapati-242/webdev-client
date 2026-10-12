export default function TailwindResponsiveShowHide() {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-bold">Show and hide</h2>
      <p className="rounded bg-yellow-200 p-3 md:hidden">
        Visible on small screens.
      </p>
      <p className="hidden rounded bg-green-200 p-3 md:block">
        Visible from medium screens up.
      </p>
    </section>
  );
}
