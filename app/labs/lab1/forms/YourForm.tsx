export default function YourForm() {
  return (
    <form id="wd-your-form" action="#wd-your-form">
      <h5>Student Profile — Kishan Shaileshkumar Prajapati</h5>
      <label htmlFor="profile-name">Name</label>
      <br />
      <input
        id="profile-name"
        name="name"
        type="text"
        defaultValue="Kishan Shaileshkumar Prajapati"
      />
      <br />
      <label htmlFor="profile-password">Password</label>
      <br />
      <input
        id="profile-password"
        name="password"
        type="password"
        placeholder="Enter a sample password"
      />
      <br />
      <label htmlFor="profile-bio">Bio</label>
      <br />
      <textarea
        id="profile-bio"
        name="bio"
        rows={3}
        defaultValue="Computer science graduate student interested in full stack development and NLP."
      />
      <br />
      <fieldset>
        <legend>Class standing</legend>
        <label>
          <input type="radio" name="standing" value="undergraduate" />{" "}
          Undergraduate
        </label>{" "}
        <label>
          <input type="radio" name="standing" value="graduate" defaultChecked />{" "}
          Graduate
        </label>
      </fieldset>
      <fieldset>
        <legend>Study load</legend>
        <label>
          <input type="radio" name="load" value="full-time" defaultChecked />{" "}
          Full time
        </label>{" "}
        <label>
          <input type="radio" name="load" value="part-time" /> Part time
        </label>
      </fieldset>
      <fieldset>
        <legend>Interests</legend>
        <label>
          <input type="checkbox" name="interest" value="web" defaultChecked />{" "}
          Web development
        </label>{" "}
        <label>
          <input type="checkbox" name="interest" value="nlp" defaultChecked />{" "}
          NLP
        </label>{" "}
        <label>
          <input type="checkbox" name="interest" value="design" /> Design
        </label>
      </fieldset>
      <label htmlFor="profile-campus">Campus</label>
      <br />
      <select id="profile-campus" name="campus" defaultValue="boston">
        <option value="boston">Boston</option>
        <option value="seattle">Seattle</option>
        <option value="oakland">Oakland</option>
      </select>
      <br />
      <label htmlFor="profile-skills">Skills (choose several)</label>
      <br />
      <select
        id="profile-skills"
        name="skills"
        multiple
        size={4}
        defaultValue={["react", "node"]}
      >
        <option value="react">React</option>
        <option value="node">Node.js</option>
        <option value="typescript">TypeScript</option>
        <option value="python">Python</option>
      </select>
      <br />
      <label htmlFor="profile-email">Email</label>
      <br />
      <input
        id="profile-email"
        name="email"
        type="email"
        placeholder="your-northeastern-email@example.com"
      />
      <br />
      <label htmlFor="profile-year">Graduation year</label>
      <br />
      <input
        id="profile-year"
        name="graduation-year"
        type="number"
        min="2026"
        max="2035"
        defaultValue="2028"
      />
      <br />
      <label htmlFor="profile-date">Date started</label>
      <br />
      <input
        id="profile-date"
        name="start-date"
        type="date"
        defaultValue="2026-01-07"
      />
      <br />
      <label htmlFor="profile-range">Interest in web development (0–10)</label>
      <br />
      <input
        id="profile-range"
        name="interest-level"
        type="range"
        min="0"
        max="10"
        defaultValue="9"
      />
      <br />
      <button id="wd-your-save" type="submit">
        Save
      </button>{" "}
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
