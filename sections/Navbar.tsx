import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex bg-black justify-between items-center px-10 py-5">
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
          className="text-lg text-gray-300 hover:text-gray-50 transition duration-200"
        >
          Home
        </Link>
        <Link
          href={"#"}
          className="text-lg text-gray-300 hover:text-gray-50 transition duration-200"
        >
          Generate
        </Link>
        <Link
          href={"#"}
          className="text-lg text-gray-300 hover:text-gray-50 transition duration-200"
        >
          History
        </Link>
        <Button
          variant={"link"}
          asChild
          className="bg-blue-500 px-5 py-3 hover:no-underline hover:scale-105 transition duration-200"
        >
          <Link href={"#"} className="text-white no-underline text-lg">
            LogIn
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
