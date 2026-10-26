import type { ReactNode } from "react";
export function Add({a,b}:{a:number;b:number}) {return <p>a + b = {a+b}</p>}
export function Square({children}:{children:number}) {return <p>Square of {children} = {children*children}</p>}
export function Highlight({children}:{children:ReactNode}) {return <p><span className="wd-inline-highlight">{children}</span></p>}
