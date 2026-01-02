import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <h1>about</h1>
      <nav>
        [<Link href="/">Home</Link> | <Link href="/about">About</Link>]
      </nav>

    </div>
  );
}
