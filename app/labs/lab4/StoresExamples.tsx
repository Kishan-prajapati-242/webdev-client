"use client";
import { create } from "zustand";
import { createContext, useContext, useState } from "react";
import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { DemoSection } from "./StateExamples";

type Todo = { id: number; title: string; done: boolean };
const starterTodos: Todo[] = [
  { id: 1, title: "Finish Lab 4", done: false },
  { id: 2, title: "Review Kambaz", done: true },
  { id: 3, title: "Submit A4", done: false },
];

// Context demonstrates sharing a small, low-frequency value without passing props.
const CounterContext = createContext<{ count: number; change: (amount: number) => void } | null>(null);
function ContextButtons() {
  const context = useContext(CounterContext);
  if (!context) return null;
  return <div className="wd-a4-inline"><button onClick={() => context.change(1)}>Up</button><button onClick={() => context.change(-1)}>Down</button></div>;
}
export function ContextCounter() {
  const [count, setCount] = useState(2);
  return <CounterContext.Provider value={{ count, change: (amount) => setCount((value) => value + amount) }}>
    <DemoSection title="React Context"><h4>Context counter: {count}</h4><ContextButtons />
      <p>Context shares the same count between the heading and its nested buttons.</p>
    </DemoSection>
  </CounterContext.Provider>;
}
export function ContextTodos() {
  const [todos, setTodos] = useState<Todo[]>(starterTodos);
  const [title, setTitle] = useState("");
  return <DemoSection title="Context todo list">
    <div className="wd-a4-inline"><input aria-label="Context todo title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New task" />
      <button onClick={() => { if (!title.trim()) return; setTodos((old) => [...old, { id: Date.now(), title: title.trim(), done: false }]); setTitle(""); }}>Add</button>
    </div><ul className="wd-a4-list">{todos.map((todo) => <li key={todo.id}><input type="checkbox" checked={todo.done} aria-label={`Complete ${todo.title}`} onChange={() => setTodos((old) => old.map((t) => t.id === todo.id ? { ...t, done: !t.done } : t))} /><span>{todo.title}</span>
      <button onClick={() => { const newTitle = prompt("Edit task", todo.title); if (newTitle?.trim()) setTodos((old) => old.map((t) => t.id === todo.id ? { ...t, title: newTitle.trim() } : t)); }}>Edit</button>
      <button onClick={() => setTodos((old) => old.filter((t) => t.id !== todo.id))}>Delete</button></li>)}</ul>
  </DemoSection>;
}

type ZustandState = {
  count: number; todos: Todo[];
  up: () => void; down: () => void;
  addTodo: (title: string) => void;
  editTodo: (id: number, title: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};
const useZustandLab = create<ZustandState>((set) => ({
  count: 5, todos: starterTodos.map((todo) => ({ ...todo })),
  up: () => set((state) => ({ count: state.count + 1 })),
  down: () => set((state) => ({ count: state.count - 1 })),
  addTodo: (title) => set((state) => ({ todos: [...state.todos, { id: Date.now(), title, done: false }] })),
  editTodo: (id, title) => set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? { ...todo, title } : todo) })),
  deleteTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  toggleTodo: (id) => set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo) })),
}));
export function ZustandCounter() {
  const { count, up, down } = useZustandLab();
  return <DemoSection title="Zustand counter"><h4>Zustand counter: {count}</h4>
    <div className="wd-a4-inline"><button onClick={up}>Up</button><button onClick={down}>Down</button></div>
  </DemoSection>;
}
export function ZustandTodos() {
  const { todos, addTodo, editTodo, deleteTodo, toggleTodo } = useZustandLab();
  const [title, setTitle] = useState("");
  return <DemoSection title="Zustand todo list"><div className="wd-a4-inline">
    <input id="wd-zustand-todo-title" placeholder="New todo" aria-label="Zustand todo title" value={title} onChange={(e) => setTitle(e.target.value)} />
    <button onClick={() => { if (!title.trim()) return; addTodo(title.trim()); setTitle(""); }}>Add</button></div>
    <ul className="wd-a4-list">{todos.map((todo) => <li key={todo.id}>
      <input type="checkbox" aria-label={`Complete ${todo.title}`} checked={todo.done} onChange={() => toggleTodo(todo.id)} /><span>{todo.title}</span>
      <button onClick={() => { const value = prompt("Edit todo", todo.title); if (value?.trim()) editTodo(todo.id, value.trim()); }}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button></li>)}</ul>
  </DemoSection>;
}

const counterSlice = createSlice({ name: "counter", initialState: 9, reducers: {
  up: (state) => state + 1,
  down: (state) => state - 1,
  add: (state, action: PayloadAction<number>) => state + action.payload,
} });
const todoSlice = createSlice({ name: "todos", initialState: starterTodos.map((todo) => ({ ...todo })), reducers: {
  addTodo: (state, action: PayloadAction<string>) => { state.push({ id: Date.now(), title: action.payload, done: false }); },
  editTodo: (state, action: PayloadAction<{ id: number; title: string }>) => { const todo = state.find((t) => t.id === action.payload.id); if (todo) todo.title = action.payload.title; },
  deleteTodo: (state, action: PayloadAction<number>) => state.filter((t) => t.id !== action.payload),
  toggleTodo: (state, action: PayloadAction<number>) => { const todo = state.find((t) => t.id === action.payload); if (todo) todo.done = !todo.done; },
} });
const reduxStore = configureStore({ reducer: { counter: counterSlice.reducer, todos: todoSlice.reducer } });
type RootState = ReturnType<typeof reduxStore.getState>;

function ReduxCounter() {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return <DemoSection title="Redux counter and actions"><h4>Redux counter: {count}</h4><div className="wd-a4-inline">
    <button onClick={() => dispatch(counterSlice.actions.up())}>Up</button>
    <button onClick={() => dispatch(counterSlice.actions.down())}>Down</button>
    <button onClick={() => dispatch(counterSlice.actions.add(5))}>Add 5</button></div>
  </DemoSection>;
}
function ReduxHello() {
  const [hello, setHello] = useState("Hello World");
  return <DemoSection title="Redux Toolkit introduction"><p>{hello}</p><button onClick={() => setHello("Hello from Redux Toolkit")}>Update greeting</button></DemoSection>;
}
function ReduxTodos() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  return <DemoSection title="Redux todo list"><div className="wd-a4-inline"><input id="wd-redux-todo-title" placeholder="New todo" aria-label="Redux todo title" value={title} onChange={(e) => setTitle(e.target.value)} />
    <button onClick={() => { if (title.trim()) { dispatch(todoSlice.actions.addTodo(title.trim())); setTitle(""); } }}>Add</button></div>
    <ul className="wd-a4-list">{todos.map((todo) => <li key={todo.id}>
      <input type="checkbox" checked={todo.done} aria-label={`Complete ${todo.title}`} onChange={() => dispatch(todoSlice.actions.toggleTodo(todo.id))} /><span>{todo.title}</span>
      <button onClick={() => { const value = prompt("Edit todo", todo.title); if (value?.trim()) dispatch(todoSlice.actions.editTodo({ id: todo.id, title: value.trim() })); }}>Edit</button>
      <button onClick={() => dispatch(todoSlice.actions.deleteTodo(todo.id))}>Delete</button></li>)}</ul>
  </DemoSection>;
}
export function ReduxExamples() {
  return <Provider store={reduxStore}><ReduxHello /><ReduxCounter /><ReduxTodos /></Provider>;
}
