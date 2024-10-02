import Link from "next/link";

export default function Home() {
  return (
<main className="text-center">
  <h1 className="text-5xl">CPRG 306: Web Development 2 - Assignments</h1>
 <div className="text-3xl pt-10 hover:text-red-700"><Link href="week-2">Week-2 Assignments</Link></div>
 <div className="text-3xl pt-10 hover:text-red-700"><Link href="week-3">Week-3 Assignments</Link></div>
</main>
  );
}
