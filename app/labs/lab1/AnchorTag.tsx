export default function AnchorTag() {
  return (
    <section id="wd-anchors">
      <h4>Anchor tag</h4>

      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text.

      <p>
        <a id="wd-github" href="https://github.com/jannunzi">
          GitHub book example
        </a>
      </p>

      <p>
        <a id="wd-your-link" href="https://www.northeastern.edu">
          Northeastern University
        </a>
      </p>

      <p>
        <a id="wd-your-github" href="https://github.com/Kishan-prajapati-242">
          My GitHub profile
        </a>
      </p>

      <p>
        <a
          id="wd-ai-link"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        >
          MDN table element
        </a>
      </p>
    </section>
  );
}
