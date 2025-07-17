import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Works from "@/sections/Works";

export default function Home() {
  return (
    <div className="w-full relative">
      <Navbar />
      <Hero />
      <Works />
    </div>
  );
}
