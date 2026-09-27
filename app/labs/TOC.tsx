import Link from "next/link";
export default function TOC() {
  return (
    <nav id="wd-labs-toc" aria-label="Labs table of contents">
      <Link href="/labs">Home</Link>
      <br />
      <Link href="/labs/lab1">Lab 1</Link>
      <br />
      <Link href="/labs/lab2">Lab 2</Link>
      <br />
      <Link href="/labs/lab3">Lab 3</Link>
      <br />
      {/* Add a Lab 4 link after you create its page. */}
      <Link href="/labs/lab5">Lab 5</Link>
      <br />
      <Link id="wd-kambaz-link" href="/">
        Kambaz
      </Link>
      <br />
      <Link id="wd-toc-book-link" href="/book/ch1">
        Chapter 1
      </Link>
      {/* On your own: add a personal note or link here. */}
    </nav>
  );
}
