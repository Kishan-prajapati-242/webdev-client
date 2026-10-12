"use client";

import { useEffect, useRef } from "react";

function RemoteImage({ id, src, alt, fallback }: {
  id: string;
  src: string;
  alt: string;
  fallback: string;
}) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // An image may fail before hydration attaches the error handler.
    const image = ref.current;
    if (image?.complete && image.naturalWidth === 0) image.src = fallback;
  }, [fallback]);

  return (
    <img
      ref={ref}
      id={id}
      src={src}
      alt={alt}
      width={200}
      onError={(event) => {
        const image = event.currentTarget;
        if (image.getAttribute("src") !== fallback) image.src = fallback;
      }}
    />
  );
}

export default function Images() {
  return (
    <div id="wd-images">
      <h4>Images</h4>

      <RemoteImage
        id="wd-starship"
        src="https://www.starship.xyz/wp-content/uploads/2024/10/cities_07-1024x671.jpg"
        alt="Starship robot"
        fallback="/images/starship-robot.svg"
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

      <RemoteImage
        id="wd-ai-image"
        src="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/image/mdn_logo_only_color.png"
        alt="MDN logo"
        fallback="/images/mdn-web-docs.svg"
      />
    </div>
  );
}
