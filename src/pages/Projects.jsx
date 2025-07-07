import React, { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import { projects, latestStack } from "../assets/asset.js";
import LineUI from "../components/ui/LineUI";

const Projects = () => {
  const [filterProjects, setFilterProjects] = useState([]);
  const [projectCategory, setProjectCategory] = useState("");

  const applyFilter = (category="") => {
    setProjectCategory(category);
    if (category) {
      setFilterProjects(
        projects.filter((project) => project.category === category)
      );
    } else {
      setFilterProjects(projects.slice(0, 6));
    }
  };

  useEffect(() => {
    applyFilter();
  }, [projects]);
  return (
    <div>
      <div className="flex justify-end w-full sm:pr-6 mb-4">
        <div className="w-full flex justify-between flex-wrap gap-4 mb-6 px-2 sm:px-4">
          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-gray-200">
            Browse Through Projects
          </h2>
          <h1 className="text-center text-4xl md:text-4xl md:text-end lg:text-5xl font-semibold bg-gradient-to-r from-purple-500 to-gray-300 bg-clip-text text-transparent leading-tight md:leading-tight lg:leading-tight">
            Projects
          </h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-2 text-sm text-gray-200 mt-2">
          <p
            onClick={() => applyFilter("")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === ""
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            Latest Projects
          </p>
          <p
            onClick={() => applyFilter("MERN Stack")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "MERN Stack"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            MERN Stack Projects
          </p>
          <p
            onClick={() => applyFilter("React")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "React"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            React Projects
          </p>
          <p
            onClick={() => applyFilter("Java-Springboot")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "Java-Springboot"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            Java Springboot Projects
          </p>
          <p
            onClick={() => applyFilter("React-Springboot")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "React-Springboot"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            React Springboot Projects
          </p>
          <p
            onClick={() => applyFilter("NodeJs")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "NodeJs"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            NodeJs Projects
          </p>
          <p
            onClick={() => applyFilter("Javascript")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "Javascript"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            JavaScript Projects
          </p>
          <p
            onClick={() => applyFilter("HTML-CSS-Assignments")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "HTML-CSS-Assignments"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            HTML-CSS Assignments
          </p>

          <p
            onClick={() => applyFilter("Javascript-Assignments")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "Javascript-Assignments"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            Javascript Assignments
          </p>

          <p
            onClick={() => applyFilter("React Assignments")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "React Assignments"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            React Assignments
          </p>
        </div>
        <div className="w-full grid gap-2 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 sm:px-0">
          {filterProjects.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <LineUI />
    </div>
  );
};

export default Projects;
