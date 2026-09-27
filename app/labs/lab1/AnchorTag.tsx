export default function AnchorTag() {
  return (
    <section id="wd-anchors">
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text.
      <br />
      <a href="https://github.com/jannunzi">GitHub book example</a>
      <br />
      {/* On your own: add links with wd-your-link and wd-your-github. */}
      <a
        id="wd-ai-link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
      >
        MDN: table element
      </a>
    </section>
  );
}
