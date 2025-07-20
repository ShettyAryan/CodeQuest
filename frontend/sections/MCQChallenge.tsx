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
    <div className="bg-[#1E293B] flex flex-col items-center w-full rounded-lg overflow-hidden shadow-lg">
      {/* Difficulty Header */}
      <div className="w-full bg-[#0F172A] px-4 py-3 text-center">
        <p className="text-base sm:text-lg font-medium text-white capitalize">
          Difficulty: {challenge.difficulty}
        </p>
      </div>

      {/* Question Title */}
      <div className="min-h-[50px] w-full px-4 sm:px-6 md:px-10 py-4 text-white font-bold text-lg sm:text-xl text-center">
        {challenge.title}
      </div>

      {/* Options Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 px-4 sm:px-6 py-4">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={`
          px-4 py-4 sm:py-5
          text-white text-sm sm:text-base md:text-lg
          cursor-pointer rounded-lg
          transition-all duration-200
          text-center break-words
          shadow-md hover:scale-[1.02]
          ${getOptionClass(index)}
          min-h-[80px] flex items-center justify-center
        `}
          >
            <p className="px-2">{option}</p>
          </div>
        ))}
      </div>

      {/* Explanation Section */}
      {shouldShowExplaination && selectedOption !== null && (
        <div className="bg-[#0F172A] w-full px-4 sm:px-6 md:px-10 py-6 flex flex-col gap-3">
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Explanation:
          </h4>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            {challenge.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default MCQChallenge;
