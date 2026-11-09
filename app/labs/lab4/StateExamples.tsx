"use client";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";

export function DemoSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="wd-a4-demo"><h3>{title}</h3>{children}</section>;
}
export function ClickEvent() {
  return <DemoSection title="Click events"><div className="wd-a4-inline">
    <button id="wd-onclick" onClick={() => alert("Clicked!")}>Click me</button>
    <button id="wd-onclick-greeting" onClick={() => alert("Hello from Kishan!")}>Say hello</button>
    <button id="wd-onclick-goodbye" onClick={() => alert("Goodbye!")}>Say goodbye</button>
  </div></DemoSection>;
}
export function PassingData() {
  const lifeIs = (message: string) => alert(`Life is ${message}`);
  return <DemoSection title="Passing data on events"><div className="wd-a4-inline">
    <button onClick={() => lifeIs("good")}>Good</button>
    <button onClick={() => lifeIs("great")}>Great</button>
    <button onClick={() => lifeIs("about learning")}>Learning</button>
    <button onClick={() => lifeIs("an adventure")}>Adventure</button>
  </div></DemoSection>;
}
function FunctionButton({ title, action }: { title: string; action: () => void }) {
  return <button type="button" onClick={action}>{title}</button>;
}
export function PassingFunctions() {
  return <DemoSection title="Passing functions"><div className="wd-a4-inline">
    <FunctionButton title="Run parent function" action={() => alert("Called from parent")} />
    <FunctionButton title="My name" action={() => alert("Kishan Prajapati")} />
    <FunctionButton title="Extra function" action={() => alert("Extra function called")} />
  </div></DemoSection>;
}
export function LocalCounter() {
  let brokenCounter = 0;
  const [count, setCount] = useState(7);
  return <DemoSection title="let versus useState">
    <p>The let counter does not cause a rerender. Try both.</p>
    <div className="wd-a4-inline"><button type="button" onClick={() => { brokenCounter++; console.log("let count", brokenCounter); }}>let +1</button>
      <button type="button" onClick={() => setCount(7)} id="wd-counter-reset">Reset to 7</button>
      <button type="button" id="wd-counter-reset-click" onClick={() => setCount(0)}>Reset to 0</button></div>
    <h4>useState counter: {count}</h4><div className="wd-a4-inline">
      <button type="button" onClick={() => setCount((n) => n + 1)}>Up</button>
      <button type="button" onClick={() => setCount((n) => n - 1)}>Down</button>
    </div>
  </DemoSection>;
}
export function BooleanState() {
  const [checked, setChecked] = useState(true);
  const [featured, setFeatured] = useState(false);
  const [notifications, setNotifications] = useState(false);
  return <DemoSection title="Boolean state"><label><input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} /> Show completed</label>
    <label><input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} /> Featured</label>
    <label><input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} /> Notifications</label>
    <p>{checked ? "Completed items visible" : "Completed items hidden"} · {featured ? "Featured" : "Standard"}</p>
  </DemoSection>;
}
export function StringState() {
  const [name, setName] = useState("Kishan");
  const [lastName, setLastName] = useState("Prajapati");
  return <DemoSection title="String state"><div className="wd-a4-inline">
    <label>First name<input aria-label="String first name" value={name} onChange={(e) => setName(e.target.value)} /></label>
    <label>Last name<input aria-label="String last name" value={lastName} onChange={(e) => setLastName(e.target.value)} /></label>
  </div><p>Typed name: {name} {lastName}</p></DemoSection>;
}
export function DateState() {
  const [startDate, setStartDate] = useState("2026-11-08");
  const [endDate, setEndDate] = useState("2026-12-18");
  return <DemoSection title="Date state"><div className="wd-a4-inline">
    <label>Start date<input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} /></label>
    <label>End date<input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} /></label>
  </div><p>Start: {startDate} · End: {endDate}</p></DemoSection>;
}
export function ObjectState() {
  const [person, setPerson] = useState({ firstName: "Kishan", lastName: "Prajapati", age: 24, city: "Boston" });
  return <DemoSection title="Object state"><pre id="wd-object-state">{JSON.stringify(person, null, 2)}</pre>
    <div className="wd-a4-inline">{(["firstName", "lastName", "city"] as const).map((key) =>
      <label key={key}>{key}<input aria-label={`Object ${key}`} value={person[key]} onChange={(e) => setPerson((old) => ({ ...old, [key]: e.target.value }))} /></label>
    )}<label>Age<input type="number" aria-label="Object age" value={person.age} onChange={(e) => setPerson((old) => ({ ...old, age: Number(e.target.value) }))} /></label></div>
  </DemoSection>;
}
export function ArrayState() {
  const [items, setItems] = useState(["Learn React", "Study Zustand", "Finish A4"]);
  const [draft, setDraft] = useState("");
  const add = () => { if (draft.trim()) setItems((old) => [...old, draft.trim()]); setDraft(""); };
  return <DemoSection title="Array state"><div className="wd-a4-inline">
    <input aria-label="New array item" placeholder="New item" value={draft} onChange={(e) => setDraft(e.target.value)} />
    <button type="button" onClick={add}>Add</button><button type="button" onClick={() => setItems([])}>Clear</button>
  </div><ul className="wd-a4-list">{items.map((item, index) => <li key={`${item}-${index}`}><span>{item}</span><button type="button" onClick={() => setItems((old) => old.filter((_, i) => i !== index))}>Delete</button></li>)}</ul></DemoSection>;
}
export function ProfileForm() {
  const [profile, setProfile] = useState({ firstName: "", lastName: "", email: "", birthDate: "", newsletter: false });
  const [errors, setErrors] = useState<string[]>([]);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = [!profile.firstName.trim() && "First name is required", !profile.lastName.trim() && "Last name is required", !profile.email.includes("@") && "Enter a valid email"].filter(Boolean) as string[];
    setErrors(next);
  };
  return <DemoSection title="Profile form and validation"><form className="wd-a4-mini-form" onSubmit={submit} noValidate>
    <label>First name<input value={profile.firstName} onChange={(e) => setProfile((old) => ({ ...old, firstName: e.target.value }))} /></label>
    <label>Last name<input value={profile.lastName} onChange={(e) => setProfile((old) => ({ ...old, lastName: e.target.value }))} /></label>
    <label>Email<input type="email" value={profile.email} onChange={(e) => setProfile((old) => ({ ...old, email: e.target.value }))} /></label>
    <label>Date of birth<input type="date" value={profile.birthDate} onChange={(e) => setProfile((old) => ({ ...old, birthDate: e.target.value }))} /></label>
    <label><input type="checkbox" checked={profile.newsletter} onChange={(e) => setProfile((old) => ({ ...old, newsletter: e.target.checked }))} /> Newsletter</label>
    <button type="submit">Save profile</button>
    {errors.length ? <p role="alert">{errors.join(" · ")}</p> : <p>Save to validate.</p>}
  </form></DemoSection>;
}
export function SharedParentCounter() {
  const [count, setCount] = useState(12);
  return <DemoSection title="Parent and child shared state"><h4>Parent / child counter: {count}</h4>
    <div className="wd-a4-inline"><FunctionButton title="Up" action={() => setCount((n) => n + 1)} /><FunctionButton title="Down" action={() => setCount((n) => n - 1)} /></div>
    <p>Both child buttons update the state owned by their parent.</p>
  </DemoSection>;
}
export function PropDrilling() {
  const [message, setMessage] = useState("Message from grandparent");
  function Middle({ text, setText }: { text: string; setText: (v: string) => void }) {
    return <p><strong>Child:</strong> {text} <button type="button" onClick={() => setText("Child changed the message")}>Change from child</button></p>;
  }
  return <DemoSection title="Prop drilling"><Middle text={message} setText={setMessage} /></DemoSection>;
}
export function UrlEncoding() {
  const [a, setA] = useState("3"); const [b, setB] = useState("4"); const [c, setC] = useState("5");
  return <DemoSection title="Query and path parameters"><div className="wd-a4-inline">
    <label>A<input type="number" aria-label="Number a" value={a} onChange={(e) => setA(e.target.value)} /></label>
    <label>B<input type="number" aria-label="Number b" value={b} onChange={(e) => setB(e.target.value)} /></label>
    <label>C<input type="number" aria-label="Number c" value={c} onChange={(e) => setC(e.target.value)} /></label>
  </div><p className="wd-a4-inline">
    <Link href={`/labs/lab4/url-encoding/query-params?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&c=${encodeURIComponent(c)}`}>Query parameters</Link>
    <Link href={`/labs/lab4/url-encoding/path-params/${encodeURIComponent(a)}/${encodeURIComponent(b)}?c=${encodeURIComponent(c)}`}>Path parameters</Link>
    <Link href="/labs/lab4/url-encoding/path-params/12/30">12 + 30</Link>
  </p></DemoSection>;
}
export function EffectDemo() {
  const [name, setName] = useState("Kishan"); const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${name} clicked ${count} times`;
    console.log("Effect: name and count", name, count);
  }, [name, count]);
  return <DemoSection title="useEffect and document title"><label>Name<input aria-label="Effect name" value={name} onChange={(e) => setName(e.target.value)} /></label>
    <p>Effect count: {count}</p><button type="button" onClick={() => setCount((n) => n + 1)}>Update document title</button></DemoSection>;
}
