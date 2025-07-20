import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-black flex flex-col lg:flex-row gap-10 lg:gap-20 px-4 sm:px-8 md:px-12 lg:px-20 py-20 md:py-40 lg:py-60 xl:py-80">
      <div className="flex flex-col max-w-4xl gap-4 md:gap-6 w-full">
        <h1 className="text-white font-bold capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Sharpen coding knowledge one question at a time
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Get tailored MCQs to coding — beginner to pro.
        </p>

        <Button
          variant={"link"}
          asChild
          className="bg-blue-500 px-5 py-3 hover:no-underline hover:scale-105 transition duration-200 w-fit mt-4"
        >
          <Link
            href={"/generate"}
            className="text-white no-underline text-base sm:text-lg md:text-xl"
          >
            Start Solving
          </Link>
        </Button>
      </div>
      <div className="hidden lg:flex items-center justify-center w-full max-w-2xl xl:max-w-4xl">
        <Image
          src="/assets/landing-img.png"
          alt="landing_image"
          width={400}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
