import "./index.css";
import Selectors from "./Selectors";
import ColorsAndBoxes from "./ColorsAndBoxes";
import LayoutSamples from "./LayoutSamples";
import ReactIconsSampler from "./ReactIconsSampler";
export default function Lab2() {
  return (
    <main id="wd-lab2">
      <h1>Lab 2 — CSS and Tailwind</h1>
      <p>Small CSS examples first, then the responsive Tailwind page.</p>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
      <Selectors />
      <ColorsAndBoxes />
      <LayoutSamples />
      <ReactIconsSampler />
    </main>
  );
}
