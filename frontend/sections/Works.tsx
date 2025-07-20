import Working from "@/components/subcomponents/Working";
import { working } from "@/util/data";
import React from "react";

const Works = () => {
  return (
    <section className="bg-[#111827] w-full px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-20 lg:py-32 flex flex-col items-center justify-center font-semibold gap-6 md:gap-8 lg:gap-10">
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl text-center">
        How it Works?
      </h2>
      <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal text-center max-w-2xl px-4">
        Three simple steps to level up your coding skills
      </p>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6">
          {working.map((data, index) => (
            <Working
              key={index}
              src={data.src}
              heading={data.heading}
              text={data.text}
              classname={data.classname}
              type={data.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
