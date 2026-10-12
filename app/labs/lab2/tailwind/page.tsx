import "./index.css";
import TailwindSpacing from "./TailwindSpacing";
import TailwindTypography from "./TailwindTypography";
import TailwindBackgroundColors from "./TailwindBackgroundColors";
import TailwindResponsiveBreakpoint from "./TailwindResponsiveBreakpoint";
import TailwindResponsiveShowHide from "./TailwindResponsiveShowHide";
import TailwindResponsiveFlex from "./TailwindResponsiveFlex";
import TailwindResponsiveGrid from "./TailwindResponsiveGrid";
import TailwindResponsiveSpacingText from "./TailwindResponsiveSpacingText";
import TailwindResponsiveDesign from "./TailwindResponsiveDesign";
import TailwindFilters from "./TailwindFilters";
import TailwindGrids from "./TailwindGrids";
export default function TailwindLab() {
  return (
    <main className="mx-auto max-w-5xl p-6 text-slate-900 md:p-8">
      <a href="/labs/lab2" className="text-blue-700 underline">
        ← CSS Lab 2
      </a>
      <h1 className="my-7 text-4xl font-bold">Tailwind CSS</h1>
      <TailwindSpacing />
      <hr className="my-8 border-slate-200" />
      <TailwindTypography />
      <hr className="my-8 border-slate-200" />
      <TailwindBackgroundColors />
      <hr className="my-8 border-slate-200" />
      <TailwindResponsiveBreakpoint />
      <hr className="my-8 border-slate-200" />
      <TailwindResponsiveShowHide />
      <hr className="my-8 border-slate-200" />
      <TailwindResponsiveFlex />
      <hr className="my-8 border-slate-200" />
      <TailwindResponsiveGrid />
      <hr className="my-8 border-slate-200" />
      <TailwindResponsiveSpacingText />
      <hr className="my-8 border-slate-200" />
      <TailwindResponsiveDesign />
      <hr className="my-8 border-slate-200" />
      <TailwindFilters />
      <hr className="my-8 border-slate-200" />
      <TailwindGrids />
      <hr className="my-8 border-slate-200" />
    </main>
  );
}
