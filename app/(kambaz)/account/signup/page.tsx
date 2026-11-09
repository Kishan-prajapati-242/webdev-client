"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAccount } from "../AccountContext";
import { emptyUser } from "../AccountContext";
export default function Signup() {
  const { users, signup } = useAccount();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username.trim() || !password) return setError("Enter a username and password.");
    if (password !== verify) return setError("Passwords do not match.");
    if (users.some((user) => user.username.toLowerCase() === username.trim().toLowerCase())) return setError("Username is taken.");
    signup({ ...emptyUser, _id: `U${Date.now()}`, username: username.trim(), firstName: username.trim(), password });
    router.push("/account/profile");
  }
  return <form id="wd-signup-screen" className="wd-a4-account-form" onSubmit={submit}>
    <h1>Sign up</h1>
    <label>Username<input className="wd-username" aria-label="Username" value={username} onChange={(e) => setUsername(e.target.value)} /></label>
    <label>Password<input className="wd-password" type="password" aria-label="Password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
    <label>Verify password<input className="wd-password-verify" type="password" aria-label="Verify password" value={verify} onChange={(e) => setVerify(e.target.value)} /></label>
    {error && <p role="alert" className="wd-a4-error">{error}</p>}
    <button className="wd-a3-btn" type="submit">Sign up</button>
    <p><Link href="/account/signin">Sign in</Link></p>
  </form>;
}
