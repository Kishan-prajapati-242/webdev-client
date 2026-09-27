export default function Dropdowns() {
  return (
    <section id="wd-dropdowns">
      <h5>Dropdowns</h5>
      <label htmlFor="wd-course-select">Select one course</label>
      <br />
      <select id="wd-course-select" defaultValue="webdev">
        <option value="webdev">Web Development</option>
        <option value="nlp">NLP</option>
        <option value="ai">AI</option>
      </select>
      <br />
      <label htmlFor="wd-multiple-select">Select several topics</label>
      <br />
      <select
        id="wd-multiple-select"
        multiple
        size={4}
        defaultValue={["html", "react"]}
      >
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="react">React</option>
        <option value="next">Next.js</option>
      </select>
    </section>
  );
}
