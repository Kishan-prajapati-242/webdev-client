export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      {/* On your own: add an ordered list of a recipe with id wd-your-favorite-recipe. */}
      <h5>Unordered List Tag</h5>My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      {/* On your own: add your favorites list with id wd-your-books. You mentioned Isaac Asimov. */}
      <h5>HTML tags from this chapter</h5>
      <ul id="wd-ai-html-tags">
        <li>h1: main heading</li>
        <li>p: paragraph</li>
        <li>ol: ordered list</li>
        <li>ul: unordered list</li>
        <li>table: tabular data</li>
        <li>form: input controls</li>
      </ul>
    </div>
  );
}
