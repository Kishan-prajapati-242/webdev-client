export default function HeadingTags() {
  return (
    <div id="wd-h-tag">
      <h4>Heading Tags</h4>
      <p>
        Text documents are often broken up into several sections and
        subsections. Each section is usually prefaced with a short title or
        heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags.
        HTML heading tags can be used to format plain text so that it renders in
        a browser as large headings.
      </p>

      <h1>h1 heading</h1>
      <h2>h2 heading</h2>
      <h3>h3 heading</h3>
      <h4>h4 heading</h4>
      <h5>h5 heading</h5>
      <h6>h6 heading</h6>

      <h3 id="wd-your-heading">
        My <span id="wd-your-span">web development</span> work
      </h3>

      <div id="wd-ai-headings">
        <h4>Lab notes</h4>
        <h5>What I built</h5>
        <p>A page of semantic HTML examples.</p>
        <h6>Next step</h6>
        <p>Inspect the elements in browser DevTools.</p>
      </div>
    </div>
  );
}
