import Link from "next/link";
export default async function AddPath({params}:{params:Promise<{a:string;b:string}>}) {
 const {a,b}=await params;const first=Number(a),second=Number(b);
 if(!Number.isFinite(first)||!Number.isFinite(second)) return <main style={{padding:24}}><h2>Invalid numbers</h2><Link href="/labs/lab3">Back to Lab 3</Link></main>;
 return <main style={{padding:24}} id="wd-add-path-parameters"><h2>Path Parameters</h2><p>{first} + {second} = {first+second}</p><Link href="/labs/lab3">Back to Lab 3</Link></main>;
}
