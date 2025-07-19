"use client";
import MCQChallenge from "@/sections/MCQChallenge";
import { useApi } from "@/util/api";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

import React, { useEffect, useState } from "react";

const page = () => {
  const { makeRequest } = useApi();
  const [history, setHistory] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
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
  };

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
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default page;
