export default function LayoutSamples() {
  return (
    <section id="wd-css-layout">
      <h2>Position, float, flex, grid, and media queries</h2>
      <div className="wd-position-relative">
        Relative container{" "}
        <span className="wd-position-absolute">absolute badge</span>
        <span className="wd-position-shift">relative shift</span>
      </div>
      <div className="wd-layer-box">
        <span className="wd-layer-one">z-index 1</span>
        <span className="wd-layer-two">z-index 2</span>
      </div>
      <div className="wd-float-box">
        <div className="wd-float-left">Float left</div>
        <p>
          Text wraps beside a float. This is useful for showing how older page
          layouts behaved before flex and grid.
        </p>
      </div>
      <div className="wd-float-grid">
        <div>1/3</div>
        <div>1/3</div>
        <div>1/3</div>
      </div>
      <div className="wd-flex-box">
        <span>Flex one</span>
        <span>Flex two</span>
        <span>Flex three</span>
      </div>
      <div className="wd-grid-box">
        <span>Grid one</span>
        <span>Grid two</span>
        <span>Grid three</span>
        <span>Grid four</span>
      </div>
      <div className="wd-media-box">
        Resize the window: this box changes color and layout below 700px.
      </div>
      <div className="wd-fixed-note">Fixed position</div>
    </section>
  );
}
