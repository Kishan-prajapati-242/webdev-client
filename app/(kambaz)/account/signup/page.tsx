import Link from "next/link";
const field = "mb-3 w-full rounded border border-neutral-300 px-3 py-2";
export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-4 text-2xl font-semibold">Sign up</h1>
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
      <input
        placeholder="verify password"
        aria-label="Verify password"
        type="password"
        className={`wd-password-verify ${field}`}
      />
      <Link
        href="/account/profile"
        className="mb-3 block rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </Link>
      <Link href="/account/signin" className="text-blue-700">
        Sign in
      </Link>
    </div>
  );
}
