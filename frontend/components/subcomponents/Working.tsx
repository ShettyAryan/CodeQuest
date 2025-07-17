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
    <div className="flex flex-col gap-6 max-w-[400px] items-center justify-between flex-wrap">
      <div
        className={cn(
          "bg-gradient-to-r rounded-[100%] w-20 h-20 flex items-center justify-center",
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
          className="w-8 h-8"
        />
      </div>
      <h3 className="text-white text-2xl">{heading}</h3>
      <p className="text-center text-gray-300 text-md font-normal">{text}</p>
    </div>
  );
};

export default Working;
