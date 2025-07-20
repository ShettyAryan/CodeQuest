import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111827] mt-10 px-4 sm:px-8 md:px-12 lg:px-20 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 lg:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
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
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
              Sharpen your coding skills with AI-powered challenges
            </p>
          </div>

          {/* Links Sections - Wrapped in a container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:flex md:gap-4 lg:gap-12">
            {/* Platform Links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-base md:text-lg font-medium text-white">
                Platform
              </h4>
              <Link
                href={"#"}
                className="text-sm md:text-base font-normal text-gray-400 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                href={"#"}
                className="text-sm md:text-base font-normal text-gray-400 hover:text-white transition"
              >
                Generate
              </Link>
              <Link
                href={"#"}
                className="text-sm md:text-base font-normal text-gray-400 hover:text-white transition"
              >
                History
              </Link>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-base md:text-lg font-medium text-white">
                Company
              </h4>
              <Link
                href={"#"}
                className="text-sm md:text-base font-normal text-gray-400 hover:text-white transition"
              >
                About
              </Link>
              <Link
                href={"#"}
                className="text-sm md:text-base font-normal text-gray-400 hover:text-white transition"
              >
                Contact
              </Link>
              <Link
                href={"#"}
                className="text-sm md:text-base font-normal text-gray-400 hover:text-white transition"
              >
                Privacy
              </Link>
            </div>

            {/* Connect Section */}
            <div className="flex flex-col gap-3">
              <h4 className="text-base md:text-lg font-medium text-white">
                Connect
              </h4>
              <div className="flex gap-3">
                <GithubIcon className="w-5 h-5 text-white hover:text-gray-300 transition cursor-pointer" />
                <TwitterIcon className="w-5 h-5 text-white hover:text-gray-300 transition cursor-pointer" />
                <LinkedinIcon className="w-5 h-5 text-white hover:text-gray-300 transition cursor-pointer" />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                aryanshetty.dev@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Aryan Shetty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
