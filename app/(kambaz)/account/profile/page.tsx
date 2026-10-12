import Link from "next/link";
const field = "mb-3 w-full rounded border border-neutral-300 px-3 py-2";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-lg">
      <h1 className="mb-4 text-2xl font-semibold">Profile</h1>
      <div className="grid gap-x-3 sm:grid-cols-2">
        <input
          defaultValue="alice"
          placeholder="username"
          aria-label="Username"
          className={`wd-username ${field}`}
        />
        <input
          defaultValue="123"
          placeholder="password"
          aria-label="Password"
          type="password"
          className={`wd-password ${field}`}
        />
        <input
          defaultValue="Alice"
          placeholder="First Name"
          aria-label="First Name"
          id="wd-firstname"
          className={field}
        />
        <input
          defaultValue="Wonderland"
          placeholder="Last Name"
          aria-label="Last Name"
          id="wd-lastname"
          className={field}
        />
        <input
          defaultValue="2000-01-01"
          type="date"
          aria-label="Date of birth"
          id="wd-dob"
          className={field}
        />
        <input
          defaultValue="alice@example.com"
          type="email"
          aria-label="Email"
          id="wd-email"
          className={field}
        />
        <select
          defaultValue="FACULTY"
          id="wd-role"
          aria-label="Role"
          className={field}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <Link
        href="/account/signin"
        className="inline-block rounded bg-blue-600 px-4 py-2 text-white"
      >
        Sign out
      </Link>
    </div>
  );
}
