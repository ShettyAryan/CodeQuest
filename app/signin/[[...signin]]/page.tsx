import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <section className="flex justify-center items-center lg:min-h-[40vh] py-44 bg-black ">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <SignIn />
      </div>
    </section>
  );
};

export default page;
