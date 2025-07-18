"use client";

import MCQChallenge from "@/sections/MCQChallenge";
import React, { useState } from "react";

const page = () => {
  const [challenge, setChallenge] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState<string | null>("easy");
  const [quota, setQuota] = useState<number | null>(null);

  const fetchQuota = async () => {};
  const generateChallenge = async () => {};

  const getNextResetTime = () => {};
  return (
    <div className="pt-2 bg-black h-screen">
      <div className="flex flex-col gap-10 items-center justify-center lg:min-h-[80vh] pb-8">
        <div className="bg-[#1E293B] w-100 h-15 rounded-full flex gap-4 items-center justify-center">
          <p className="text-lg font-normal text-gray-300 px-2 text-center">
            You have {quota?.quota_remaining || 0} challenges remaining! 🔥
          </p>
          {quota?.quota_remaining === 0 && (
            <p className="text-lg font-normal text-gray-300 px-2 text-center">
              The Next reset is :{0}{" "}
            </p>
          )}
        </div>
        <div className="bg-[#1E293B] min-h-[20vw] min-w-[90vw] px-20 flex flex-col items-center py-10 gap-2 rounded-xl">
          <h1 className="text-white text-4xl">Generate Challenge</h1>
          <p className="text-gray-400 text-md font-normal py-3">
            Choose your difficulty level
          </p>
          <div className="w-full px-5 py-4 text-white flex flex-col items-center">
            <select
              name="difficulty"
              id="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
              disabled={isLoading}
              className="border border-white w-80 h-10 rounded-full text-center appearance-none bg-black"
            >
              <option value="" disabled>
                Select an Option
              </option>
              <option value="easy" className="text-white">
                Easy
              </option>
              <option value="medium" className="text-white">
                Medium
              </option>
              <option value="expert" className="text-white">
                Expert
              </option>
            </select>
          </div>
          <button
            onClick={generateChallenge}
            disabled={isLoading || quota?.quota_remaining === 0}
            className="text-md max-sm:text-xs text-white bg-blue-500 sm:w-50 md:w-50 py-2 px-2 rounded-lg"
          >
            {isLoading ? "Generating..." : "Generate Challenge"}
          </button>
          {error && (
            <p className="text-red-500 text-center font-medium text-md max-sm:text-xs">
              {error}
            </p>
          )}
        </div>
        {challenge && <MCQChallenge challenge={challenge} />}
      </div>
    </div>
  );
};

export default page;
