import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Ready = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center justify-center mt-8 sm:mt-10 px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-24 lg:py-30 gap-6 sm:gap-8 md:gap-10">
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl text-center font-semibold max-w-4xl px-4">
        Ready to Level Up Your Coding Knowledge
      </h2>

      <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal text-center max-w-2xl px-4">
        Join to improve your coding knowledge abilities.
      </p>

      <Button
        variant={"link"}
        asChild
        className="bg-blue-500 px-6 sm:px-8 md:px-10 py-2 sm:py-3 hover:no-underline hover:scale-105 transition duration-200 w-full sm:w-60"
      >
        <Link
          href={"/generate"}
          className="text-white no-underline text-base sm:text-lg md:text-xl"
        >
          Start your Journey
        </Link>
      </Button>
    </section>
  );
};

export default Ready;
