import Link from "next/link";
const field = "mb-3 w-full rounded border border-neutral-300 px-3 py-2";
export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-4 text-2xl font-semibold">Sign in</h1>
      <input
        placeholder="username"
        aria-label="Username"
        className={`wd-username ${field}`}
        defaultValue="ada"
      />
      <input
        placeholder="password"
        aria-label="Password"
        type="password"
        className={`wd-password ${field}`}
        defaultValue="123"
      />
      <label htmlFor="wd-ai-signin-note" className="mb-1 block text-sm">
        Sample note
      </label>
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className={field}
      />
      <Link
        href="/dashboard"
        id="wd-signin-btn"
        className="mb-3 block rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign in
      </Link>
      <Link
        href="/account/signup"
        id="wd-signup-link"
        className="text-blue-700"
      >
        Sign up
      </Link>
    </div>
  );
}
