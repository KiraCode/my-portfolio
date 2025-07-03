import React, { useContext } from "react";
import ExperienceCard from "./ui/Experiencecard";
import { exp, experienceData } from "../assets/asset.js";

const Experience = () => {
  return (
    <section
      id="experience"
      className=" flex flex-col md:flex-row items-center justify-center px-6 md:px-10 lg:px-20"
    >
      {/* ——— left (illustration) ——— */}
      <div className="hidden md:flex w-1/3 lg:w-2/5 justify-center">
        <img
          src={exp.expImgBlack}
          alt="experience"
          className="w-full max-w-md"
        />
      </div>

      {/* ——— right (description) ——— */}
      <div className="w-full md:w-2/3 lg:w-3/5 flex flex-col gap-6 py-6 md:py-10">
        <h1 className="pb-10 pr-5 text-end text-5xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-purple-500 to-gray-300 bg-clip-text text-transparent leading-tight md:leading-tight lg:leading-tight">
          Experience
        </h1>

        {experienceData.map((exp) => (
          <ExperienceCard
            key={exp.id}
            id={exp.id}
            jobtitle={exp.jobtitle}
            company={exp.company}
            startYear={exp.startYear}
            endYear={exp.endYear}
          />
        ))}
      </div>
    </section>
  );
};
export default Experience;
