import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111827] mt-10 px-20 py-5 flex justify-between max-sm:flex-col">
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
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-medium text-white">Platform</h4>
        <Link href={"#"} className="text-lg font-normal text-gray-400">
          Home
        </Link>
        <Link href={"#"} className="text-lg font-normal text-gray-400">
          Generate
        </Link>
        <Link href={"#"} className="text-lg font-normal text-gray-400">
          History
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-medium text-white">Company</h4>
        <Link href={"#"} className="text-lg font-normal text-gray-400">
          About
        </Link>
        <Link href={"#"} className="text-lg font-normal text-gray-400">
          Contact
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-lg font-medium text-white">Connect</h4>
        <div className="flex gap-2">
          <GithubIcon className="w-5 h-5 text-white" />
          <TwitterIcon className="w-5 h-5 text-white" />
          <LinkedinIcon className="w-5 h-5 text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
