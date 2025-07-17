import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-black flex gap-20 mt-20 px-10 py-10">
      <div className="flex flex-col max-w-4xl gap-6">
        <h1 className="text-white font-bold capitalize sm:text-4xl lg:text-6xl leading-18">
          Sharpen coding knowledge one question at a time
        </h1>
        <p className="text-xl text-gray-300 max-md:text-lg">
          Get tailored MCQs to coding — beginner to pro.
        </p>

        <Button
          variant={"link"}
          asChild
          className="bg-blue-500 px-5 py-3 hover:no-underline hover:scale-105 transition duration-200 w-50 h-15"
        >
          <Link href={"#"} className="text-white no-underline text-xl">
            Start Solving
          </Link>
        </Button>
      </div>
      <div className="">
        <Image
          src={"/assets/landing-img.png"}
          alt="landing_image"
          width={700}
          height={900}
          className="hidden lg:block w-400 h-100"
        />
      </div>
    </section>
  );
};

export default Hero;
