/* HTML images are used here because this is the chapter's HTML img exercise. */
export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      <p>Loading an image from the internet:</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="wd-starship"
        width="400"
        alt="SpaceX Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <p>Loading a local image:</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="wd-teslabot"
        width="220"
        height="200"
        src="/images/teslabot.svg"
        alt="Illustration of a Tesla Bot inspired humanoid robot"
      />
      {/* On your own: add an image with id wd-your-image. */}
      <p>An extra image from a public URL:</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="wd-ai-image"
        width="240"
        alt="Earth from space"
        src="https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg"
      />
    </div>
  );
}
