import Link from "next/link";
export default async function PathParameters({ params, searchParams }: {
  params: Promise<{ a: string; b: string }>;
  searchParams: Promise<{ c?: string }>;
}) {
  const [{ a, b }, query] = await Promise.all([params, searchParams]);
  const first = Number(a); const second = Number(b);
  const extra = Number(query.c ?? 0);
  if (![first, second, extra].every(Number.isFinite)) return <p>Numbers are required.</p>;
  return <main style={{ padding: 24 }} id="wd-path-params"><h1>Path parameters</h1>
    <p>{first} + {second} = {first + second}</p><p>With c = {extra}, total is {first + second + extra}.</p>
    <Link href="/labs/lab4">Back to Lab 4</Link>
  </main>;
}
