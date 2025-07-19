"use client";
import MCQChallenge from "@/sections/MCQChallenge";
import { useApi } from "@/util/api";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import React, { useCallback, useEffect, useState } from "react";

interface Challenge {
  id: number;
  title: string;
  options: string[] | string;
  correct_answer_id: number;
  explanation: string;
  difficulty: string;
  last_reset_date?: string;
}

const History = () => {
  const { makeRequest } = useApi();
  const [history, setHistory] = useState<Challenge[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await makeRequest("my-history");
      setHistory(data.challenges);
    } catch (err) {
      setError("Failed to load history");
    } finally {
      setIsLoading(false);
    }
  }, [makeRequest]);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  if (isLoading) {
    return <div className="text-3xl text-white">Loading History</div>;
  }
  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={fetchHistory}>Retry</button>
      </div>
    );
  }
  return (
    <>
      <SignedIn>
        <div className="bg-black min-h-screen flex items-center flex-col gap-4 pt-30">
          <div className="bg-[#1E293B] max-w-[90vw] py-10 px-10 rounded-xl">
            <h2 className="text-5xl text-white text-center">History</h2>
            {history.length === 0 ? (
              <p className="text-lg font-medium text-gray-300">
                No Challenge History
              </p>
            ) : (
              <div className="px-20 py-10 flex flex-col gap-4 max-sm:px-2 max-sm:py-5">
                {history.map((challenge) => {
                  return (
                    <MCQChallenge
                      challenge={challenge}
                      key={challenge.id}
                      showExplaination
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="h-screen w-full bg-black flex items-center justify-center">
          <h1 className="text-5xl text-white text-center ">
            Please Login or Signup to Continue :){" "}
          </h1>
        </div>
      </SignedOut>
    </>
  );
};

export default History;
