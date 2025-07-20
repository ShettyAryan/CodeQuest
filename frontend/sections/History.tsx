"use client";
import MCQChallenge from "@/sections/MCQChallenge";
import { useApi } from "@/util/api";

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
  }, []);

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
    <div className="bg-black min-h-screen flex items-center flex-col gap-6 pt-16 sm:pt-24 md:pt-30 px-4 sm:px-6">
      <div className="bg-[#1E293B] w-full max-w-6xl py-8 sm:py-10 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center mb-6 sm:mb-8">
          History
        </h2>

        {history.length === 0 ? (
          <div className="flex justify-center py-8 sm:py-12">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center">
              No Challenge History
            </p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6 py-4 sm:py-6 md:py-8">
            {history.map((challenge) => (
              <MCQChallenge
                challenge={challenge}
                key={challenge.id}
                showExplaination
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
