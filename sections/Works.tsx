import Working from "@/components/subcomponents/Working";
import { working } from "@/util/data";
import React from "react";

const Works = () => {
  return (
    <section className="bg-[#111827] w-full px-10 py-30 flex flex-col items-center justify-center font-semibold gap-10">
      <h2 className="text-white text-5xl text-center max-md:text-4xl">
        How it Works?
      </h2>
      <p className="text-gray-300 text-xl max-md:text-lg font-normal">
        Three simple steps to level up your coding skills
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-30 md:gap-20 sm:gap-10">
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
    </section>
  );
};

export default Works;
