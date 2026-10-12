"use client";

export default function Images() {
  return (
    <div id="wd-images">
      <h4>Images</h4>

      <img
        id="wd-starship"
        src="https://www.starship.xyz/wp-content/uploads/2024/10/cities_07-1024x671.jpg"
        alt="Starship robot"
        width={200}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = "/images/starship-robot.svg";
        }}
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
        src="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/image/mdn_logo_only_color.png"
        alt="MDN logo"
        width={200}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = "/images/mdn-web-docs.svg";
        }}
      />
    </div>
  );
}
