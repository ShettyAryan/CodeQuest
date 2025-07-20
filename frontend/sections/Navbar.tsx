"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex bg-black justify-between items-center px-4 sm:px-6 md:px-10 py-3 md:py-5 ${
        scrolled ? "bg-black/60" : "bg-black/90"
      }`}
    >
      <Link href={"/"} className="flex items-center justify-center gap-2">
        <Image
          src={"/assets/codelogo.png"}
          alt="logo"
          width={300}
          height={400}
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <span className="text-lg md:text-xl text-white font-semibold">
          CodeQuest
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center gap-4">
        <Link
          href={"/"}
          className="text-lg text-gray-300 hover:text-gray-50 transition duration-200"
        >
          Home
        </Link>
        <Link
          href={"/generate"}
          className="text-lg text-gray-300 hover:text-gray-50 transition duration-200"
        >
          Generate
        </Link>
        <Link
          href={"/history"}
          className="text-lg text-gray-300 hover:text-gray-50 transition duration-200"
        >
          History
        </Link>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button
              variant={"link"}
              asChild
              className="bg-blue-500 px-4 py-2 md:px-5 md:py-3 hover:no-underline hover:scale-105 transition duration-200"
            >
              <Link
                href={"/signin"}
                className="text-white no-underline text-sm md:text-lg"
              >
                LogIn
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button
            variant={"link"}
            asChild
            className="bg-blue-500 px-3 py-1.5 hover:no-underline hover:scale-105 transition duration-200"
          >
            <Link href={"/signin"} className="text-white no-underline text-sm">
              LogIn
            </Link>
          </Button>
        </SignedOut>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="ml-4 text-gray-300 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 py-4 px-6 flex flex-col gap-4">
          <Link
            href={"/"}
            className="text-gray-300 hover:text-white transition duration-200 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/generate"}
            className="text-gray-300 hover:text-white transition duration-200 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Generate
          </Link>
          <Link
            href={"/history"}
            className="text-gray-300 hover:text-white transition duration-200 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            History
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
