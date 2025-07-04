import React from "react";

const LineUI = () => {
  return (
    <div className="w-[90%] max-w-5xl mx-auto mt-12 mb-4 flex items-center gap-2 sm:gap-4">
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-400"></div>
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-400"></div>
      <div className="flex-1 h-1.5 sm:h-2 rounded-full bg-purple-400"></div>
    </div>
  );
};

export default LineUI;
