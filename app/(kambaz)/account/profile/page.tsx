"use client";
import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAccount, type User } from "../AccountContext";
export default function Profile() {
  const { currentUser, updateProfile, signout } = useAccount();
  const router = useRouter();
  const [draft, setDraft] = useState<User | null>(currentUser);
  const [saved, setSaved] = useState(false);
  useEffect(() => { setDraft(currentUser); }, [currentUser]);
  if (!currentUser || !draft) return <div id="wd-profile-screen"><h1>Profile</h1><p>Sign in to view your profile.</p></div>;
  const setField = (key: keyof User, value: string) => setDraft((old) => old ? { ...old, [key]: value } : old);
  function save(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (draft) { updateProfile(draft); setSaved(true); } }
  return <form id="wd-profile-screen" className="wd-a4-account-form wide" onSubmit={save}>
    <h1>Profile</h1><div className="wd-a4-form-grid">
      <label>Username<input className="wd-username" value={draft.username} onChange={(e) => setField("username", e.target.value)} /></label>
      <label>Password<input className="wd-password" type="password" value={draft.password ?? ""} onChange={(e) => setField("password", e.target.value)} /></label>
      <label>First name<input id="wd-firstname" value={draft.firstName} onChange={(e) => setField("firstName", e.target.value)} /></label>
      <label>Last name<input id="wd-lastname" value={draft.lastName} onChange={(e) => setField("lastName", e.target.value)} /></label>
      <label>Date of birth<input type="date" id="wd-dob" value={draft.dob ?? ""} onChange={(e) => setField("dob", e.target.value)} /></label>
      <label>Email<input type="email" id="wd-email" value={draft.email} onChange={(e) => setField("email", e.target.value)} /></label>
      <label>Role<select id="wd-role" value={draft.role} onChange={(e) => setField("role", e.target.value)}>{["USER", "ADMIN", "FACULTY", "STUDENT"].map((r) => <option key={r}>{r}</option>)}</select></label>
    </div>
    {saved && <p role="status">Profile saved.</p>}
    <div className="wd-a4-actions"><button className="wd-a3-btn" type="submit">Save</button>
      <button className="wd-a3-btn secondary" type="button" onClick={() => { signout(); router.push("/account/signin"); }}>Sign out</button></div>
  </form>;
}
