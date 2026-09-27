export default function RadioButtons() {
  return (
    <section id="wd-radio-buttons">
      <h5>Radio Buttons</h5>
      <p>Favorite genre:</p>
      <label>
        <input
          type="radio"
          name="genre"
          value="science-fiction"
          defaultChecked
        />{" "}
        Science fiction
      </label>
      <br />
      <label>
        <input type="radio" name="genre" value="fantasy" /> Fantasy
      </label>
      <br />
      <label>
        <input type="radio" name="genre" value="mystery" /> Mystery
      </label>
    </section>
  );
}
