export default function TextFields() {
  return (
    <section>
      <h5>Text Fields</h5>
      <label htmlFor="wd-username">Username</label>
      <br />
      <input id="wd-username" type="text" defaultValue="alice" />
      <br />
      <label htmlFor="wd-password">Password</label>
      <br />
      <input id="wd-password" type="password" defaultValue="wonderland" />
    </section>
  );
}
