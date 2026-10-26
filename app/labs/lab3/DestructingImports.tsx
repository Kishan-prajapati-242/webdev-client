import MathDefault from "./Math";
import * as MathNamespace from "./Math";
import { add, subtract, multiply, divide, remainder } from "./Math";
export default function DestructingImports(){
 const rows = [
  ["add(2,3)", MathDefault.add(2,3),MathNamespace.add(2,3),add(2,3)],
  ["subtract(5,2)", MathDefault.subtract(5,2),MathNamespace.subtract(5,2),subtract(5,2)],
  ["multiply(2,3)", MathDefault.multiply(2,3),MathNamespace.multiply(2,3),multiply(2,3)],
  ["divide(8,2)", MathDefault.divide(8,2),MathNamespace.divide(8,2),divide(8,2)],
  ["add(10,20)", MathDefault.add(10,20),MathNamespace.add(10,20),add(10,20)],
  ["remainder(10,3)", MathDefault.remainder(10,3),MathNamespace.remainder(10,3),remainder(10,3)]
 ] as const;
 return <table><thead><tr><th>Default object</th><th>Namespace import</th><th>Named functions</th></tr></thead>
 <tbody>{rows.map(([label,a,b,c])=><tr key={label}><td>{label} = {a}</td><td>{label} = {b}</td><td>{label} = {c}</td></tr>)}</tbody></table>;
}
