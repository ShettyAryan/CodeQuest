"use client";
import React from "react";

const MCQChallenge = ({
  challenge,
  showExplaination = false,
}: {
  challenge: string;
  showExplaination: boolean;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [shouldShowExplaination, setShouldShowExplaination] =
    useState<boolean>(showExplaination);

  const options =
    typeof challenge.options === "string"
      ? JSON.parse(challenge.options)
      : challenge.options;

  const handleOptionSelect = (index) => {
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
      <p className="text-lg font-semibold text-white">{challenge.difficulty}</p>
      <div className="min-h-[40px]">{challenge.title}</div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 px-10 py-4">
        {options.map((option, index) => (
          <div
            className="w-2xl px-2 py-5 bg-[#334155]"
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
        <div className="bg-[#0F172A] w-full px-10 py-2 flex flex-col gap-3">
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
