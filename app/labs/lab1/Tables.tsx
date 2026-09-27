export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Tables</h4>

      <table>
        <thead>
          <tr>
            <th>Quiz</th>
            <th>Topic</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Q1</td><td>HTML</td><td>90</td></tr>
          <tr><td>Q2</td><td>CSS</td><td>85</td></tr>
          <tr><td>Q3</td><td>JavaScript</td><td>92</td></tr>
          <tr><td>Q4</td><td>React</td><td>88</td></tr>
          <tr><td>Q5</td><td>Next.js</td><td>91</td></tr>
          <tr><td>Q6</td><td>Routing</td><td>89</td></tr>
          <tr><td>Q7</td><td>Forms</td><td>94</td></tr>
          <tr><td>Q8</td><td>Tables</td><td>87</td></tr>
          <tr><td>Q9</td><td>Images</td><td>93</td></tr>
          <tr><td>Q10</td><td>Links</td><td>98</td></tr>
          <tr><td colSpan={2}>Average</td><td>90.7</td></tr>
        </tbody>
      </table>

      <h5>My table</h5>
      <table id="wd-your-table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foundation</td>
            <td>Isaac Asimov</td>
          </tr>
          <tr>
            <td>I, Robot</td>
            <td>Isaac Asimov</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
