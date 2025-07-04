import React from "react";
import { topProjects } from "../assets/asset";
import Card from "./ui/Card";

const TopProjects = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium text-gray-200">Top Projects</h1>
      <p className="sm:w-1/3 text-center text-sm"></p>
      <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 sm:px-0">
        {topProjects.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TopProjects;
