import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="page-container">
      <h1>about</h1>
      <div class className="navbar">
        <nav>
          [<Link href="/">Home</Link> | <Link href="/about">About</Link>]
        </nav>
      </div>
    </div>
  );
}
