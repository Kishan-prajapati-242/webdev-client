import BackgroundColors from "./BackgroundColors";
import Corners from "./Corners";
import Dimensions from "./Dimensions";

export default function ColorsAndBoxes() {
  return (
    <section id="wd-css-boxes">
      <h2>Color, borders, and the box model</h2>
      <div className="wd-demo-row">
        <div id="wd-foreground-colors">
          Foreground color
          <br />
          <span className="wd-contrast">Readable contrast matters.</span>
        </div>
        <div id="wd-borders">
          Solid border
          <br />
          <span>Dashed border</span>
        </div>
      </div>
      <BackgroundColors />
      <div className="wd-demo-row">
        <div id="wd-padding">Padding adds space inside this border.</div>
        <div id="wd-margin">Margin adds space outside this border.</div>
        <div id="wd-box-model">Content + padding + border = box size.</div>
      </div>
      <div className="wd-demo-row">
        <div id="wd-display">
          <span>Inline</span>
          <span>Inline</span>
          <strong>Block</strong>
        </div>
      </div>
      <Corners />
      <Dimensions />
    </section>
  );
}

