import Link from "next/link";
export default function Labs() {
  return (
    <main id="wd-labs">
      <h1>Labs</h1>
      <p>
        <strong>Kishan Shaileshkumar Prajapati</strong>
      </p>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        {/* On your own: add Lab 4 and its link with id wd-lab4-link. */}
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link id="wd-kambaz-link" href="/">
            Kambaz
          </Link>
        </li>
      </ul>
      <p>
        <a
          id="wd-github"
          href="https://github.com/Kishan-prajapati-242/webdev-client"
        >
          My public GitHub repository
        </a>
      </p>
    </main>
  );
}
