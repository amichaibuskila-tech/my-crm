import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="page-container">
      <div class className="navbar">
        <nav>
          [<Link href="/">Home</Link> | <Link href="/about">About</Link>]
        </nav>
      </div>
      <div className="content">
        <h1>About This Application</h1>
        <p>
          hi there! This application is built using Next.js, a powerful React framework for building web applications. It demonstrates the use of routing, components, and server-side rendering.
        </p>
      </div>
    </div>
  );
}
