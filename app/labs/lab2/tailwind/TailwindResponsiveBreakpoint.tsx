export default function TailwindResponsiveBreakpoint() {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-bold">Breakpoint color</h2>
      <div className="bg-red-500 p-5 text-white md:bg-green-500 lg:bg-blue-600">
        Red on phones, green on medium screens, blue on wide screens.
      </div>
    </section>
  );
}
