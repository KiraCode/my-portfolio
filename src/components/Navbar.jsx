import React from "react";
import { profile } from "../assets/asset.js";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b-2 border-b-purple-400">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-5 cursor-pointer"
      >
        <img
          className="w-20 h-20 spin-slow drop-shadow-lg brightness-200 rounded-full"
          src={profile.portfolioLogo}
          alt=""
        />
        <h1 className="text-4xl sm:text-5xl font-bold uppercase font-mono text-gray-200">Tejas</h1>
      </div>
      <ul className="hidden md:flex items-start gap-10 font-medium">
        <NavLink to="/">
          <li className="py-1 text-lg text-white">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-purple-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/projects">
          <li className="py-1 text-lg text-white">PROJECTS</li>
          <hr className="border-none outline-none h-0.5 bg-purple-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 text-lg text-white">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-purple-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 text-lg text-white">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-purple-500 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/KiraCode"
          target="_blank"
          className=" text-white px-5 py-3 font-semibold rounded-full border-2 border-purple-400 hidden md:flex items-center gap-4 "
        >
          {" "}
          GITHUB <FaGithub className="w-5 h-5" />
        </a>
      </div>
      
    </div>
  );
};

export default Navbar;
