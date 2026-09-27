export default function Textarea() {
  return (
    <section id="wd-textarea">
      <h5>Textarea</h5>
      <label htmlFor="wd-biography">Biography</label>
      <br />
      <textarea
        id="wd-biography"
        rows={4}
        cols={40}
        defaultValue="A multiline biography goes here."
      />
    </section>
  );
}
