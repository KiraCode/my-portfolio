import React from "react";
import { profile } from "../assets/asset.js";
import { IoMdDownload } from "react-icons/io";
import LineUI from "./ui/LineUI.jsx";

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap rounded-lg px-8 md:px-10 lg:px-20 ">
        {/* -------left side------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[5vw] md:mb-[-30px]">
          <p className="text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-none md:leading-none lg:leading-none">
            <span className=" text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">
              I'm{" "}
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-gray-300 bg-clip-text text-transparent">
              TEJAS,
            </span>{" "}
            <br />
            <span className=" text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">
              a Software Developer.
            </span>
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 text-white text-base font-normal">
            <p>
              Passionate and versatile Full Stack Developer with a strong focus
              on
              <br className="hidden sm:block" />
              building scalable, efficient, and user-friendly applications.
            </p>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-purple-400 text-white text-sm font-semibold m-auto md:m-0 hover:scale-105 transition-all duration-300 hover:border-4 "
          >
            DOWNLOAD CV <IoMdDownload className="w-6 mt-1" />
          </a>
        </div>

        {/* -------right side------- */}
        <div className="md:w-1/2 flex justify-center items-center py-6 md:py-5">
          <img
            className="w-[80%] max-w-sm md:max-w-md h-auto rounded-lg object-cover"
            src={profile.profilePic}
            alt=""
          />
        </div>
      </div>
      <LineUI />
    </>
  );
};

export default Header;
