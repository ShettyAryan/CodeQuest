"use client";

import MCQChallenge from "@/sections/MCQChallenge";
import React, { useCallback, useEffect, useState } from "react";
import { useApi } from "@/util/api";

type QuotaType = {
  quota_remaining: number;
  last_reset_date: string;
};

const Generate = () => {
  const [challenge, setChallenge] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>("easy");
  const [quota, setQuota] = useState<QuotaType | null>(null);

  const { makeRequest } = useApi();
  const fetchQuota = useCallback(async () => {
    try {
      const data = await makeRequest("quota");
      setQuota(data);
    } catch (err) {
      console.log(err);
    }
  }, [makeRequest]);

  useEffect(() => {
    fetchQuota();
  }, [fetchQuota]);

  const generateChallenge = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await makeRequest("generate-challenge", {
        method: "POST",
        body: JSON.stringify({ difficulty }),
      });
      setChallenge(data);
      fetchQuota();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || "Failed to generate challenge");
      } else {
        setError("Unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getNextResetTime = () => {
    if (!quota?.last_reset_date) return null;
    const resetDate = new Date(quota.last_reset_date);
    resetDate.setDate(resetDate.getDate() + 1);
    return resetDate;
  };
  return (
    <div className="pt-2 bg-black min-h-screen">
      <div className="flex flex-col gap-6 md:gap-10 items-center justify-center lg:min-h-[80vh] pb-6 md:pb-8 px-4 sm:px-6">
        {/* Quota Remaining */}
        <div className="bg-[#1E293B] w-full max-w-md h-12 md:h-15 rounded-full flex items-center justify-center">
          <p className="text-sm md:text-lg font-normal text-gray-300 px-4 text-center">
            You have {quota?.quota_remaining || 0} challenges remaining! 🔥
          </p>
        </div>

        {/* Reset Time */}
        {quota?.quota_remaining === 0 && (
          <p className="text-sm md:text-lg font-normal text-gray-300 px-2 text-center">
            Next reset: {getNextResetTime()?.toLocaleString()}
          </p>
        )}

        {/* Main Card */}
        <div className="bg-[#1E293B] w-full max-w-4xl min-h-[40vh] md:min-h-[20vw] px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center py-6 md:py-10 gap-2 rounded-xl">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center">
            Generate Challenge
          </h1>
          <p className="text-gray-400 text-sm md:text-md font-normal py-2 md:py-3 text-center">
            Choose your difficulty level
          </p>

          {/* Select Input */}
          <div className="w-full px-2 sm:px-5 py-2 md:py-4 text-white flex flex-col items-center">
            <select
              name="difficulty"
              id="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
              disabled={isLoading}
              className="border border-white w-full max-w-xs h-10 rounded-full text-center appearance-none bg-black px-4"
            >
              <option value="" disabled>
                Select an Option
              </option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateChallenge}
            disabled={isLoading || quota?.quota_remaining === 0}
            className="w-full max-w-xs text-sm sm:text-md text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Generating..." : "Generate Challenge"}
          </button>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-center font-medium text-sm sm:text-md mt-2">
              {error}
            </p>
          )}
        </div>

        {/* Challenge Display */}
        {challenge && <MCQChallenge challenge={challenge} showExplaination />}
      </div>
    </div>
  );
};

export default Generate;
