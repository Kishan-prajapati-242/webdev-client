export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background colors</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This paragraph has a red background.{' '}
        <span className="wd-bg-color-green wd-fg-color-white">
          This text has a green background and white foreground.
        </span>
      </p>
      <p className="wd-bg-color-yellow">A yellow background keeps dark text readable.</p>
    </div>
  );
}
