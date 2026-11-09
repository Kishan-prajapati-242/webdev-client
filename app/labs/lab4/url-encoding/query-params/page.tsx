import Link from "next/link";
export default async function QueryParameters({ searchParams }: {
  searchParams: Promise<{ a?: string; b?: string; c?: string }>;
}) {
  const params = await searchParams;
  const a = Number(params.a ?? 0);
  const b = Number(params.b ?? 0);
  const c = Number(params.c ?? 0);
  return <main style={{ padding: 24 }} id="wd-query-params"><h1>Query parameters</h1>
    <p>{a} + {b} = {a + b}</p><p>With c = {c}, total is {a + b + c}.</p>
    <Link href="/labs/lab4">Back to Lab 4</Link>
  </main>;
}
