import React from "react";
import { assets } from "../assets/asset.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <div className="flex items-center gap-5 cursor-pointer">
        <img
          className="w-20 h-20 spin-slow drop-shadow-lg brightness-200"
          src={assets.logo}
          alt=""
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B3B3B3] via-[#B3B3B3] to-[#1A1A1A] uppercase tracking-wider font-orbitron">
          Tejas
        </h1>
      </div>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/projects">
          <li className="py-1">PROJECTS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div>
        <button className="bg-primary text-white px-8 py-3 font-semibold rounded-full hidden md:block">
          CONNECT WITH ME
        </button>
      </div>
    </div>
  );
};

export default Navbar;
