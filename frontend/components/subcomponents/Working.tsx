import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Working = ({
  src,
  heading,
  text,
  classname,
  type,
}: {
  src: string;
  heading: string;
  text: string;
  classname: string;
  type: string;
}) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] items-center">
      <div
        className={cn(
          "bg-gradient-to-r rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center",
          classname,
          {
            "from-blue-500 to-blue-700": type === "blue",
            "from-green-500 to-green-700": type === "green",
            "from-purple-500 to-purple-700": type === "purple",
          }
        )}
      >
        <Image
          src={src}
          alt="difficulty_level"
          width={400}
          height={300}
          className="w-6 h-6 sm:w-8 sm:h-8"
          loading="lazy"
        />
      </div>

      <h3 className="text-white text-xl sm:text-2xl text-center font-medium">
        {heading}
      </h3>

      <p className="text-gray-300 text-sm sm:text-base text-center font-normal px-2 sm:px-0">
        {text}
      </p>
    </div>
  );
};

export default Working;
