"use client";
import React from "react";
import { useState, useEffect } from "react";

const MCQChallenge = ({
  challenge,
  showExplaination = false,
}: {
  challenge: {
    id: number;
    title: string;
    options: string[] | string;
    correct_answer_id: number;
    explanation: string;
    difficulty: string;
    last_reset_date?: string;
  };
  showExplaination: boolean;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [shouldShowExplaination, setShouldShowExplaination] =
    useState<boolean>(showExplaination);

  useEffect(() => {
    setSelectedOption(null);
    setShouldShowExplaination(false);
  }, [challenge]);

  const options =
    typeof challenge.options === "string"
      ? JSON.parse(challenge.options)
      : challenge.options;

  const handleOptionSelect = (index: string | null) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    setShouldShowExplaination(true);
  };

  const getOptionClass = (index) => {
    if (selectedOption === null) return "option";
    if (index === challenge.correct_answer_id) {
      return "option correct";
    }
    if (selectedOption === index && index !== challenge.correct_answer_id) {
      return "option incorrect";
    }
    return "option";
  };
  return (
    <div className="bg-[#1E293B] flex flex-col items-center">
      <p className="text-lg font-medium text-white py-2 capitalize">
        Difficulty : {challenge.difficulty}
      </p>
      <div className="min-h-[40px] w-full px-10 text-white font-bold text-xl">
        {challenge.title}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 px-10 py-4">
        {options.map((option, index: string | null) => (
          <div
            className={`w-2xl px-2 py-5 text-white text-lg cursor-pointer rounded transition-colors duration-300 ${getOptionClass(
              index
            )}`}
            key={index}
            onClick={() => {
              handleOptionSelect(index);
            }}
          >
            {option}
          </div>
        ))}
      </div>
      {shouldShowExplaination && selectedOption !== null && (
        <div className="bg-[#0F172A] w-full px-10 py-10 flex flex-col gap-3">
          <h4 className="text-xl font-semibold text-white">Explaination:</h4>
          <p className="text-lg font-medium text-gray-400">
            {challenge.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default MCQChallenge;
