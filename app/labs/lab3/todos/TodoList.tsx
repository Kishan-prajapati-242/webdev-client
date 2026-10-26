"use client";
import todos from "./todos.json";
import {useEffect} from "react";
export function TodoList(){useEffect(()=>{console.log("Lab 3 todos",todos)},[]);return <ul id="wd-todo-list-items">{todos.map(todo=><li key={todo._id} style={{listStyle:"none",marginBottom:6}}><label><input type="checkbox" defaultChecked={todo.completed} />{todo.title}{todo.completed?" (COMPLETED)":""}</label></li>)}</ul>}
