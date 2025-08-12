import { skillsData } from "../assets/asset.js";
import LineUI from "./ui/LineUI.jsx";

function Skills() {
  return (
    <>
      <section className="flex flex-col items-center justify-start min-h-[60vh] px-4 sm:px-8 py-10">
        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-purple-500 to-gray-300 bg-clip-text text-transparent leading-tight">
          Skills
        </h2>

        {/* Auto-Scrolling Carousel */}
        <div className="mt-12 w-full overflow-hidden">
          <div className="scrolling-track flex gap-6 sm:gap-8 w-max px-2">
            {[...skillsData, ...skillsData].map((skill, id) => (
              <div
                key={id}
                className="min-w-[140px] sm:min-w-[150px] flex flex-col items-center justify-center bg-gray-200 hover:bg-purple-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-12 h-12 pointer-events-none"
                />
                <h3 className="mt-3 text-base sm:text-lg font-medium text-gray-800 text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LineUI />
    </>
  );
}

export default Skills;
