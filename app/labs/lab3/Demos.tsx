import Link from "next/link";
import { TodoList } from "./todos/TodoList";
import { Add, Square, Highlight } from "./Props";
import { ClientComponentDemo } from "./ClientComponentDemo";
import ServerComponentDemo from "./ServerComponentDemo";
import DestructingImports from "./DestructingImports";

type DemoProps = { id: string; title: string; children: React.ReactNode };
function Demo({ id, title, children }: DemoProps) {
  return <section id={id} className="wd-js-exercise"><h4>{title}</h4><div className="wd-demo">{children}</div></section>;
}
const house = { rooms: 4, bedrooms: 3, bathrooms: 2, yearBuilt: 1998,
  owners: ["Alice", "Bob"], address: { street: "123 Main St", city: "Boston", state: "MA" },
  };
const sum = (a: number, b: number) => a + b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;
const numbers = [1, 2, 3, 4, 5, 6];
const todos = ["Buy milk", "Walk the dog", "Write code"];
const box = (name: string, cls: string) => <div key={name} className={`wd-box ${cls}`}>{name}</div>;
const line = (name: string, value: unknown) => <p key={name}>{name} = {String(value)}</p>;
export default function Demos() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let personalName = "Kishan";
  const greeting = `Hello, ${personalName}`;
  const sampleSum = functionScoped + blockScoped;
  const isMorning = true;
  const hour = 9;
  const false1 = false;
  const true1 = true;
  const nullValue: string | null = null;
  const undefValue: undefined = undefined;
  const optionalZip: string | undefined = (house.address as typeof house.address & { zip?: string }).zip;
  const updatedTodos = [...todos,"Buy stamps", "Call the dentist"];
  const course = { _id: "RS101", name: "Rocket Propulsion", published: true };
  const { rooms, bedrooms, bathrooms, owners } = house;
  const { city } = house.address;
  const [first, second, third, fourth] = [10,20,30,40];
  const obj4 = { ...house, yearBuilt: 2001 };
  const houseWithGarage = {...house, garage: {cars:2}};
  const colorBlack = {color: "black"};
  const padding10px = {padding: "10px"};
  const bgGreen = { ...colorBlack, ...padding10px, backgroundColor: "green" };
  const bgGray = { color: "black", padding: "10px", backgroundColor: "lightgray" };
  return <>
    <Demo id="wd-variables-and-constants" title="Variables and Constants">
      {line("functionScoped",functionScoped)}{line("blockScoped",blockScoped)}{line("constant1",constant1)}{line("personalName",personalName)}{line("greeting",greeting)}{line("sampleSum",sampleSum)}
    </Demo>
    <Demo id="wd-variable-types" title="Variable Types">
      {line("numberVariable",123)}{line("floatingPointNumber",234.345)}{line("stringVariable","Hello World!")}{line("booleanVariable",true)}
      {line("isNumber",typeof 123)}{line("isString",typeof "Hello World!")}{line("isBoolean",typeof true)}
      {line("secondString","Kishan")}{line("secondStringType",typeof "Kishan")}{line("secondNumber",2026)}{line("secondNumberType",typeof 2026)}
      {line("sampleCount",42)}{line("typeof sampleCount",typeof 42)}{line("sampleLabel","Lab 3")}{line("typeof sampleLabel",typeof "Lab 3")}
    </Demo>
    <Demo id="wd-boolean-variables" title="Boolean Variables">
      {line("true1",true1)}{line("false1",false1)}{line("false2",true1&&false1)}{line("true2",true1||false1)}{line("true3",!(true1&&false1))}
      {line("true4",123===123)}{line("true5",Number.parseFloat("234.345") !== 321.432)}{line("false3",123<100)}{line("stringEquality","hello"==="hello")}{line("true6",5>=3)}
    </Demo>
    <Demo id="wd-if-else" title="If Else">
      {true1 ? <p>true1</p> : <p>not true1</p>}
      {false1 ? <p>false1</p> : <p>not false1</p>}
      <p>not false1</p>
    </Demo>
    <Demo id="wd-ternary-operator" title="Ternary Operator">
      <p>{isMorning ? "Good morning" : "Good afternoon"}</p>
      <p>{hour < 12 ? "Good morning" : "Good afternoon"}</p>
      <p>{false1 ? "Premium" : "Free"}</p>
    </Demo>
    <Demo id="wd-conditional-output-if-else" title="Conditional Output If Else">
      {true1 ? <h5>Welcome</h5> : <h5>Please sign in</h5>}
      {false1 ? <p>Member</p> : <p>Guest</p>}
    </Demo>
    <Demo id="wd-conditional-output-inline" title="Inline Conditional Output">
      {true1 && <p>Welcome Inline</p>}
      {!false1 && <h5>Guest Inline</h5>}
      {true1 && <h5>Admin Inline</h5>}
    </Demo>
    <Demo id="wd-null-undefined" title="Null vs Undefined">
      {line("nullValue",nullValue)}{line("undefinedValue",undefValue)}
      <p>nullValue ?? "default" = {nullValue ?? "default"}</p>
      <p>null == undefined = {String(null == undefined)}</p>
      <p>null === undefined = {String((null as unknown) === undefined)}</p>
    </Demo>
    <Demo id="wd-legacy-functions" title="Legacy Functions">
      {line("add(2, 3)",sum(2,3))}{line("subtract(10, 4)",10-4)}
    </Demo>
    <Demo id="wd-arrow-functions" title="Arrow Functions">
      {line("add(2, 4)",sum(2,4))}{line("multiply(3, 7)",multiply(3,7))}{line("multiply(3, 4)",multiply(3,4))}
    </Demo>
    <Demo id="wd-implied-return" title="Implied Return">
      {line("square(4)",4*4)}{line("square(9)",9*9)}{line("divide(20, 4)",divide(20,4))}
    </Demo>
    <Demo id="wd-template-literals" title="Template Literals">
      <p>{`Hello, ${personalName}. ${hour < 12 ? "Good morning" : "Good afternoon"}!`}</p>
      <p>{`${course._id} published: ${course.published ? "Yes" : "No"}`}</p>
    </Demo>
    <Demo id="wd-simple-arrays" title="Simple Arrays">
      <p>{todos.join(", ")}</p><p>Third item: {todos[2]}</p><p>Call the dentist</p>
    </Demo>
    <Demo id="wd-array-index-and-length" title="Array Index and Length">
      {line("numbers.length", numbers.length)}{line("indexOf(9)",numbers.indexOf(9))}{line("indexOf1",numbers.indexOf(1))}
    </Demo>
    <Demo id="wd-adding-removing-arrays" title="Adding and Removing From Arrays">
      {line("updatedTodos",updatedTodos.join(", "))}<p>Buy stamps</p>
    </Demo>
    <Demo id="wd-for-loops" title="For Loops">
      <p>{["ONE","TWO","THREE"].map(v=>v.toLowerCase()).join(", ")}</p>
    </Demo>
    <Demo id="wd-map-function" title="Map Function">
      {todos.map((todo,i)=><p key={todo}>{i+1}. {todo}</p>)}
      <p>Email the TA</p><p>stringLengths: {[...todos,"Email the TA"].map(s=>s.length).join(", ")}</p>
      <p>doubles: {numbers.map(n=>n*2).join(", ")}</p>
    </Demo>
    <Demo id="wd-find-function" title="Find Function">
      {line("two",numbers.find(n=>n===2))}{line("missing find",numbers.find(n=>n===12))}
    </Demo>
    <Demo id="wd-find-index" title="Find Index">
      {line("index for 3",[1,2,4,5].findIndex(n=>n===3))}{line("sixIndex",numbers.findIndex(n=>n===5))}
    </Demo>
    <Demo id="wd-filter-function" title="Filter Function">
      {line("numbers >= 5",numbers.filter(n=>n>=5).join(", "))}{line("numbersLessThan2",numbers.filter(n=>n<2).join(", "))}
    </Demo>
    <Demo id="wd-includes-some-every" title="Includes, Some, and Every">
      {line("includes(5)",numbers.includes(5))}{line("every(n > 4)",numbers.every(n=>n>4))}{line("some(n === 1)",numbers.some(n=>n===1))}
    </Demo>
    <Demo id="wd-reduce-function" title="Reduce Function">
      {line("sum",numbers.reduce((a,b)=>a+b,0))}{line("product",numbers.reduce((a,b)=>a*b,1))}{line("joined",todos.reduce((a,b)=>a?`${a}, ${b}`:b,""))}
    </Demo>
    <Demo id="wd-json-stringify" title="JSON.stringify">
      <pre>{JSON.stringify(house,null,2)}</pre><pre>{JSON.stringify({project:"Web Development",students:["Kishan","Ada"],course:{number:"CS5610"}},null,2)}</pre><pre>{JSON.stringify({sampleCourse:course},null,2)}</pre>
    </Demo>
    <Demo id="wd-house" title="JavaScript Objects and House">
      {line("rooms",rooms)}{line("bedrooms",bedrooms)}{line("bathrooms",bathrooms)}
      <h5>owners</h5><p>{owners.join(", ")}</p><p>yearBuilt = {house.yearBuilt}</p>
      <p>houseWithGarage.garage.cars = {houseWithGarage.garage.cars}</p><p>city = {city}</p>
    </Demo>
    <Demo id="wd-spread-operator" title="Spread Operator">
      <pre>{JSON.stringify({...house,rooms:6},null,2)}</pre>
      <pre>{JSON.stringify(obj4,null,2)}</pre><p>arr3: {[...numbers,7].join(", ")}</p>
    </Demo>
    <Demo id="wd-destructing" title="Destructing">
      <p>first = {first}; second = {second}; third = {third}; fourth = {fourth}</p><p>city = Boston</p>
    </Demo>
    <Demo id="wd-function-destructing" title="Function Destructing">
      {line("multiply",multiply(2,5))}{line("greet()",((name="Guest")=>`Hello ${name}`)())}
      {line("quotient",divide(24,6))}
    </Demo>
    <Demo id="wd-destructing-imports" title="Destructing Imports">
      <DestructingImports />
    </Demo>
    <Demo id="wd-optional-chaining" title="Optional Chaining and Nullish Coalescing">
      <p>house.garage?.cars ?? 0 = {(house as typeof house & {garage?:{cars:number}}).garage?.cars ?? 0}</p>
      <p>houseWithoutGarage.garage?.cars ?? 0 = {({} as {garage?: {cars:number}}).garage?.cars ?? 0}</p>
      <p>zip ?? "unknown" = {optionalZip ?? "unknown"}</p>
    </Demo>
    <h3 id="wd-typescript">TypeScript Types</h3>
    <Demo id="wd-type-annotations" title="Type Annotations, Object Types, and Interfaces">
      <p>typed sum(3, 4) = {sum(3,4)}</p><p>Course id: {course._id}</p>
    </Demo>
    <h3 id="wd-dynamic-styling">Dynamic Styling</h3>
    <Demo id="wd-classes" title="Working with HTML Classes / CSS Classes">
      <div className="wd-pair">{box("Blue background","wd-class-blue")}{box("Red background","wd-class-red")}{box("Yellow background","wd-class-yellow")}{box("Purple background","wd-class-purple")}{box("Orange background","wd-class-orange")}
      {box("Teal background",isMorning?"wd-class-teal":"wd-class-blue")}{box("Dynamic Green background","wd-class-dynamic")}</div>
    </Demo>
    <Demo id="wd-styles" title="Working with the Style Attribute / Style Objects">
      <div className="wd-pair"><div className="wd-box" style={{backgroundColor:"lightblue"}}>Blue background</div>
      <div className="wd-box" style={{backgroundColor:"pink"}}>Red background</div>
      <div className="wd-box" style={{backgroundColor:"lightyellow"}}>Yellow background</div>
      <div className="wd-box" style={bgGreen}>Green background</div>
      <div className="wd-box" style={bgGray}>Gray background</div></div>
    </Demo>
    <h3 id="wd-components">Client and Server Components</h3>
    <Demo id="wd-client-components" title="Client Components"><ClientComponentDemo /></Demo>
    <Demo id="wd-server-components" title="Server Components"><ServerComponentDemo /></Demo>
    <h3 id="wd-parameterizing-components">Parameterizing Components</h3>
    <Demo id="wd-add" title="Add Components / Props">
      <Add a={3} b={4}/><Add a={10} b={20}/><Add a={7} b={8}/>
    </Demo>
    <Demo id="wd-square" title="Children / Square"><Square>{4}</Square><Square>{9}</Square><Square>{5}</Square></Demo>
    <Demo id="wd-highlight" title="Highlight and JSX Children"><Highlight>I enjoy building things with React.</Highlight><Highlight><strong>Children can be any JSX</strong></Highlight></Demo>
    <Demo id="wd-pathname" title="Working with the Pathname"><ClientComponentDemo /></Demo>
    <Demo id="wd-path-parameters" title="Path Parameters">
      <div className="wd-pair"><Link className="wd-pill" href="/labs/lab3/add/2/3">2 + 3</Link><Link className="wd-pill" href="/labs/lab3/add/12/30">12 + 30</Link><Link className="wd-pill" href="/labs/lab3/add/10/20">10 + 20</Link><Link className="wd-pill" href="/labs/lab3/add/5/6">5 + 6</Link></div>
    </Demo>
    <Demo id="wd-todo-list" title="Todo List / Rendering a Data Structure"><TodoList /></Demo>
  </>;
}
