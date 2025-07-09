import React from "react";
import { projects } from "../assets/asset";
import Card from "./ui/Card";
import { useNavigate } from "react-router-dom";
import LineUI from "./ui/LineUI";

const TopProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="pb-10 pr-5 text-center text-5xl md:text-6xl md:text-end lg:text-7xl font-semibold bg-gradient-to-r from-purple-500 to-gray-300 bg-clip-text text-transparent leading-tight md:leading-tight lg:leading-tight">
        Projects
      </h1>
      <p className="sm:w-1/3 text-center text-sm"></p>
      <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 sm:px-0">
        {projects.slice(0,6).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/projects");
          scrollTo(0, 0);
        }}
        className="bg-gray-200 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        more
      </button>
      <LineUI />
    </div>
  );
};

export default TopProjects;
