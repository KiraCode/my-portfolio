import React, { useState } from "react";
import Card from "../components/ui/Card";
import { topProjects } from "../assets/asset";
import LineUI from "../components/ui/LineUI";

const Projects = () => {
  const [filterProjects, setFilterProjects] = useState([]);
  const [projectCategory, setProjectCategory] = useState("");
  const [selected, setSelected] = useState(false);
  const [sortAssignment, setSortAssignment] = useState("Javascript");

  // const applyFilter = () => {
  //   setSelected(technology === "Assignments" ? true : false);
  //   if (technology) {
  //     setFilterProjects(
  //       projects.filter(
  //         (project) =>
  //           project.technology.toLowerCase() === technology.toLowerCase()
  //       )
  //     );
  //   } else {
  //     setFilterProjects(
  //       projects.filter(
  //         (project) => project.technology.toLowerCase() === "popular projects"
  //       )
  //     );
  //   }
  // };
  return (
    <div>
      <div className="flex justify-end w-full sm:pr-6 mb-4">
        <div className="w-full flex justify-between flex-wrap gap-4 mb-6 px-2 sm:px-4">
          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-gray-200">
            Browse Through Projects
          </h2>
          <h1 className="text-center text-4xl md:text-4xl md:text-end lg:text-5xl font-semibold bg-gradient-to-r from-purple-500 to-gray-300 bg-clip-text text-transparent leading-tight md:leading-tight lg:leading-tight">{`${
            projectCategory === "Assignments"
              ? sortAssignment === ""
                ? "Assignments"
                : sortAssignment + " Assignments"
              : projectCategory + " Projects"
          }`}</h1>

          {/* Right: Sort Dropdown */}
          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-sm text-gray-300">
              Sort By:
            </label>
            <select
              id="sort"
              // value={selected}
              // onChange={handleChange}
              className="bg-gray-900 border border-gray-400 text-gray-200 text-sm rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              <option
                onChange={() => setSortAssignment("html-css")}
                value="html-css"
              >
                HTML & CSS
              </option>
              <option
                onChange={() => setSortAssignment("javascript")}
                value="javascript"
              >
                JavaScript
              </option>
              <option onChange={() => setSortAssignment("react")} value="react">
                React
              </option>
              <option
                onChange={() => setSortAssignment("nodejs")}
                value="nodejs"
              >
                Node.js
              </option>
              <option onChange={() => setSortAssignment("java")} value="java">
                Java
              </option>
              <option
                onChange={() => setSortAssignment("mini-projects")}
                value="miniprojects"
              >
                Mini Projects
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-6 text-sm text-gray-200 mt-2">
          <p
            onClick={() => setTechnology("")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === ""
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            Latest Projects
          </p>
          <p
            onClick={() => setTechnology("MERN Stack")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "MERN Stack"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            MERN Stack Projects
          </p>
          <p
            onClick={() => setTechnology("React")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "React"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            React Projects
          </p>
          <p
            onClick={() => setTechnology("Java-Springboot")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "Java-Springboot"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            Java Springboot Projects
          </p>
          <p
            onClick={() => setTechnology("React-Springboot")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "React-Springboot"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            React Springboot Projects
          </p>
          <p
            onClick={() => setTechnology("NodeJs")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "NodeJs"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            NodeJs Projects
          </p>
          <p
            onClick={() => setTechnology("JavaScript")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "JavaScript"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            JavaScript Projects
          </p>
          <p
            onClick={() => setTechnology("HTML-CSS")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "HTML-CSS"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            HTML & CSS Projects
          </p>
          <p
            onClick={() => setTechnology("Assignments")}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-50 rounded transition-all cursor-pointer whitespace-nowrap ${
              projectCategory === "Assignments"
                ? "bg-purple-600 text-white border-purple-600 ring-2 ring-purple-400"
                : "bg-gray-900 text-gray-200 border-gray-400 hover:bg-gray-800 active:bg-gray-700"
            }`}
          >
            WSA Assignments
          </p>
        </div>
        <div className="w-full grid gap-2 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 sm:px-0">
          {/* <div className="w-full grid grid-cols-auto gap-4 gap-y-6 "> */}
          {topProjects.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <LineUI />
    </div>
  );
};

export default Projects;
