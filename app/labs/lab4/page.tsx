"use client";
import "./lab4.css";
import {
  ClickEvent, PassingData, PassingFunctions, LocalCounter,
  BooleanState, StringState, DateState, ObjectState, ArrayState,
  ProfileForm, SharedParentCounter, PropDrilling, UrlEncoding, EffectDemo,
} from "./StateExamples";
import { ContextCounter, ContextTodos, ZustandCounter, ZustandTodos, ReduxExamples } from "./StoresExamples";
import Link from "next/link";
export default function Lab4() {
  return <main id="wd-lab4">
    <header className="wd-a4-title"><span>CS5610 · Chapter 4</span><h1>Lab 4 — Client state</h1>
      <p>Events, controlled inputs, shared state, Context, Zustand, Redux Toolkit, and effects.</p>
    </header>
    <div className="wd-a4-sections">
      <h2>Events and forms</h2>
      <ClickEvent /><PassingData /><PassingFunctions /><LocalCounter />
      <BooleanState /><StringState /><DateState /><ObjectState /><ArrayState /><ProfileForm />
      <h2>Sharing state</h2>
      <SharedParentCounter /><PropDrilling /><UrlEncoding />
      <h2>Context, Zustand and Redux</h2>
      <ContextCounter /><ContextTodos /><ZustandCounter /><ZustandTodos /><ReduxExamples />
      <h2>Side effects and hooks</h2>
      <EffectDemo /><section className="wd-a4-demo"><h3>Custom hooks</h3>
        <p>Try the independent toggles, window size, and saved preferences examples.</p>
        <Link href="/labs/lab4/hooks">Open hooks exercises</Link>
      </section>
    </div>
  </main>;
}
