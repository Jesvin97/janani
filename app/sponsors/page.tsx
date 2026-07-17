import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-sm tracking-[0.2em] text-gray-400 mb-6 uppercase">JANANI 2026</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight mb-8">
          PARTNERS &<br />
          <span className="text-gray-400">SPONSORS</span>
        </h1>
        
        <div className="inline-block py-2 px-6 border-2 border-white/20 rounded-full text-xl font-medium tracking-widest text-gray-300">
          COMING SOON
        </div>
        
        <p className="text-gray-400 mt-8 max-w-lg mx-auto text-lg">
          We are currently collaborating with amazing partners and sponsors to make this event extraordinary. Check back soon for updates!
        </p>

        <Link href="/" className="mt-16 text-sm tracking-widest uppercase text-gray-500 hover:text-white transition-colors flex items-center gap-2">
          <span>Back to home</span>
          <span aria-hidden="true">↙</span>
        </Link>
      </section>
    </main>
  );
}
