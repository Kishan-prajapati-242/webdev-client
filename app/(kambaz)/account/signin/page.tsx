"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccount } from "../AccountContext";
export default function Signin() {
  const [username, setUsername] = useState("ada");
  const [password, setPassword] = useState("123");
  const [error, setError] = useState("");
  const { signin } = useAccount();
  const router = useRouter();
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!signin(username, password)) { setError("Username or password is incorrect."); return; }
    setError(""); router.push("/dashboard");
  }
  return <form id="wd-signin-screen" className="wd-a4-account-form" onSubmit={submit}>
    <h1>Sign in</h1>
    <label>Username<input className="wd-username" aria-label="Username" placeholder="username" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} /></label>
    <label>Password<input className="wd-password" type="password" aria-label="Password" placeholder="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
    {error && <p role="alert" className="wd-a4-error">{error}</p>}
    <button id="wd-signin-btn" className="wd-a3-btn" type="submit">Sign in</button>
    <p><Link id="wd-signup-link" href="/account/signup">Sign up</Link></p>
  </form>;
}
