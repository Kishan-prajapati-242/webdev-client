export default function TailwindFilters() {
  const src = "/images/reactjs.svg";
  return (
    <section>
      <h2 className="mb-3 text-2xl font-bold">Blurs and filters</h2>
      <div className="flex flex-wrap gap-3">
        {["blur-none", "blur-sm", "blur-lg", "blur-2xl"].map((filter) => (
          <div key={filter} className="w-24 text-center">
            <img src={src} alt={filter} className={`h-20 w-20 ${filter}`} />
            <span className="text-xs">{filter}</span>
          </div>
        ))}
      </div>
      <h3 className="mt-5 text-lg font-semibold">Contrast</h3>
      <div className="flex gap-3">
        <img src={src} alt="low contrast" className="h-20 w-20 contrast-50" />
        <img src={src} alt="high contrast" className="h-20 w-20 contrast-150" />
      </div>
      <div id="wd-ai-filters">
        <h3 className="mt-5 text-lg font-semibold">Grayscale and brightness</h3>
        <div className="flex gap-2">
          {["grayscale", "grayscale-0", "brightness-50", "brightness-150"].map(
            (filter) => (
              <img
                key={filter}
                src={src}
                alt={filter}
                className={`w-1/4 max-w-24 ${filter}`}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
