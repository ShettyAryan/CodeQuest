"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex bg-black justify-between items-center px-10 py-5 ${
        scrolled ? "bg-black/60" : "bg-black/90"
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <Image
          src={"/assets/codelogo.png"}
          alt="logo"
          width={300}
          height={400}
          className="w-10 h-10"
        />
        <span className="text-xl text-white font-semibold">CodeQuest</span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link
          href={"#"}
          className="md:text-lg text-sm text-gray-300 hover:text-gray-50 transition duration-200"
        >
          Home
        </Link>
        <Link
          href={"#"}
          className="md:text-lg text-sm text-gray-300 hover:text-gray-50 transition duration-200"
        >
          Generate
        </Link>
        <Link
          href={"#"}
          className="md:text-lg text-sm text-gray-300 hover:text-gray-50 transition duration-200"
        >
          History
        </Link>
        <Button
          variant={"link"}
          asChild
          className="bg-blue-500 px-5 py-3 hover:no-underline hover:scale-105 transition duration-200"
        >
          <Link
            href={"#"}
            className="text-white no-underline text-sm md:text-lg"
          >
            LogIn
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
