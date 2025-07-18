"use client";
import MCQChallenge from "@/sections/MCQChallenge";
import { Divide } from "lucide-react";
import React, { useEffect, useState } from "react";

const page = () => {
  const [history, setHistory] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setIsLoading(false);
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
    <div className="bg-black h-screen w-full flex items-center flex-col gap-4 pt-30">
      <div className="bg-[#1E293B] min-w-[90vw] py-10 px-10  rounded-xl">
        <h2 className="text-5xl text-white text-center">History</h2>
        {history.length === 0 ? (
          <p className="text-lg font-medium text-gray-300">
            No Challenge History
          </p>
        ) : (
          <div>
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
  );
};

export default page;
