export default function OtherFieldTypes() {
  return (
    <section id="wd-other-field-types">
      <h5>Other Field Types</h5>
      <label htmlFor="wd-email">Email</label>{" "}
      <input id="wd-email" type="email" placeholder="name@example.com" />
      <br />
      <label htmlFor="wd-number">Number</label>{" "}
      <input id="wd-number" type="number" min="0" max="100" defaultValue="10" />
      <br />
      <label htmlFor="wd-date">Date</label> <input id="wd-date" type="date" />
      <br />
      <label htmlFor="wd-range">Range</label>{" "}
      <input id="wd-range" type="range" min="0" max="10" defaultValue="5" />
    </section>
  );
}
