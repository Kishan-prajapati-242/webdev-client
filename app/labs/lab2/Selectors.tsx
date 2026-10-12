export default function Selectors() {
  return (
    <section id="wd-css-selectors">
      <h2>Selectors</h2>
      <p style={{ color: "#c026d3" }}>
        A style attribute affects this line directly.
      </p>
      <p id="wd-id-selector">This line is selected by its id.</p>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">This paragraph is selected by its class.</p>
        <h4 className="wd-class-selector">The same class styles this heading.</h4>
      </div>
      <div className="wd-structure-selector">
        <p>This paragraph is selected through its parent.</p>
        <div>
          <p>Nested paragraphs have a different selector.</p>
        </div>
      </div>
      <p className="wd-class-selector">
        I use a class when the same rule belongs on several elements.
      </p>
    </section>
  );
}
