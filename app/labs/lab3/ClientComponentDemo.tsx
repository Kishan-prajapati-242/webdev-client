"use client";
import { usePathname } from "next/navigation";
export function ClientComponentDemo() {
 const pathname = usePathname();
 return <div id="wd-client-component"><p>Pathname: {pathname}</p><p>Pathname length: {pathname.length}</p><p>Last segment: {pathname.split("/").filter(Boolean).at(-1)}</p></div>;
}
