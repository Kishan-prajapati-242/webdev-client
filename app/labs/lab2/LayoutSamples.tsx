export default function LayoutSamples() {
  return (
    <section id="wd-css-layout">
      <h2>Position, float, flex, grid, and media queries</h2>
      <div className="wd-position-relative">
        Relative container{" "}
        <span className="wd-position-absolute">absolute badge</span>
        <span className="wd-position-shift">relative shift</span>
      </div>
      <div id="wd-css-position-absolute">
        <h3>Absolute position</h3>
        <div className="wd-pos-relative">
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">Landscape</div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">Square</div>
        </div>
      </div>
      <div className="wd-layer-box">
        <span className="wd-layer-one">z-index 1</span>
        <span className="wd-layer-two">z-index 2</span>
      </div>
      <div id="wd-float-divs" className="wd-float-box">
        <h3>Float</h3>
        <img className="wd-float-right" src="/images/starship-robot.svg" alt="Delivery robot floated right" />
        <p>
          The robot floats to the right while this paragraph uses the space to its
          left. A float lets several lines of text wrap around an image instead of
          reserving an entire row for it. Narrow the window to see the text wrap.
        </p>
        <img className="wd-float-left" src="/images/starship-robot.svg" alt="Delivery robot floated left" />
        <p>
          This second robot floats left. The text flows beside it and continues
          below it when there is enough content. Clearing both floats keeps the
          colored boxes below this example rather than beside either image.
        </p>
        <div className="wd-float-done" />
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">Yellow</div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">Blue</div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">Red</div>
        <div className="wd-float-done" />
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
