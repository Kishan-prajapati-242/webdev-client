export default function Images() {
  return (
    <div id="wd-images">
      <h4>Images</h4>

      <img
        id="wd-starship"
        src="https://www.starship.xyz/static/robots/robot-front.png"
        alt="Starship robot"
        width={200}
      />

      <img
        id="wd-teslabot"
        src="/images/teslabot.svg"
        alt="Tesla bot"
        width={200}
      />

      <img
        id="wd-your-image"
        src="/images/reactjs.svg"
        alt="React logo"
        width={160}
      />

      <img
        id="wd-ai-image"
        src="https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png"
        alt="MDN logo"
        width={200}
      />
    </div>
  );
}
