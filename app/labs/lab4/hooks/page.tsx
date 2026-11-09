"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "../lab4.css";
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  return [value, () => setValue((old) => !old)] as const;
}
function Lamp({ label }: { label: string }) {
  const [on, toggle] = useToggle();
  return <button onClick={toggle}>{label}: {on ? "on" : "off"}</button>;
}
export default function HooksPage() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [note, setNote] = useState("");
  useEffect(() => {
    const resize = () => setSize({ width: innerWidth, height: innerHeight });
    resize(); window.addEventListener("resize", resize);
    const saved = localStorage.getItem("wd-a4-note");
    if (saved) setNote(saved);
    return () => window.removeEventListener("resize", resize);
  }, []);
  function changeNote(value: string) { setNote(value); localStorage.setItem("wd-a4-note", value); }
  return <main id="wd-lab4"><header className="wd-a4-title"><h1>Writing your own hooks</h1></header>
    <section className="wd-a4-demo"><h3>Window size</h3><p>{size.width} × {size.height}</p></section>
    <section className="wd-a4-demo"><h3>Independent toggles</h3><div className="wd-a4-inline"><Lamp label="Kitchen" /><Lamp label="Porch" /></div></section>
    <section className="wd-a4-demo"><h3>Local storage</h3><label>Saved note<input aria-label="Saved note" value={note} onChange={(e) => changeNote(e.target.value)} /></label><p>Note: {note}</p></section>
    <Link href="/labs/lab4">Back to Lab 4</Link>
  </main>;
}
