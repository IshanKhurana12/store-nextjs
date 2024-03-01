import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
      <h1 className="text-xl font-bold ">hello this is my first next app</h1>


      <br/>
      <br/>
      <nav>
<Link href="/">Home</Link>
<br/>

<Link href="/products">Products</Link>
</nav>
    </main>
  );
}
