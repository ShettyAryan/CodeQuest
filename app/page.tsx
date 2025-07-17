import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";

import Ready from "@/sections/Ready";
import Works from "@/sections/Works";

export default function Home() {
  return (
    <div className="w-full relative bg-black">
      <Hero />
      <Works />
      <Ready />
      <Footer />
    </div>
  );
}
