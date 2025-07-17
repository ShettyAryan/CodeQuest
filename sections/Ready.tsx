import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Ready = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center justify-center mt-10 px-20 py-30 gap-10">
      <h2 className="text-white text-5xl text-center max-md:text-4xl font-semibold">
        Ready to Level Up Your Coding Knowledge
      </h2>
      <p className="text-gray-300 text-xl max-md:text-lg font-normal">
        Join to improve your coding knowledge abilities.
      </p>
      <Button
        variant={"link"}
        asChild
        className="bg-blue-500 px-10 py-3 hover:no-underline hover:scale-105 transition duration-200 w-60 h-15"
      >
        <Link href={"#"} className="text-white no-underline text-xl">
          Start your Journey
        </Link>
      </Button>
    </section>
  );
};

export default Ready;
