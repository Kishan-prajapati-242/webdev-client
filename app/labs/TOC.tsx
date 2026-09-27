import Link from "next/link";

export default function TOC() {
  return (
    <nav id="wd-labs-toc" aria-label="Labs table of contents">
      <Link id="wd-home-link" href="/">
        Home
      </Link>
      <br />
      <Link id="wd-lab1-link" href="/labs/lab1">
        Lab 1
      </Link>
      <br />
      <Link id="wd-lab2-link" href="/labs/lab2">
        Lab 2
      </Link>
      <br />
      <Link id="wd-lab3-link" href="/labs/lab3">
        Lab 3
      </Link>
      <br />
      <Link id="wd-lab4-link" href="/labs/lab4">
        Lab 4
      </Link>
      <br />
      <Link id="wd-lab5-link" href="/labs/lab5">
        Lab 5
      </Link>
      <br />
      <Link id="wd-kambaz-link" href="/">
        Kambaz
      </Link>
      <br />
      <Link id="wd-toc-book-link" href="/book/ch1">
        Chapter 1
      </Link>

      <p>Kishan Shaileshkumar Prajapati — Web Development work.</p>
    </nav>
  );
}
