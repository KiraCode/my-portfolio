import React from "react";
import { assets } from "../assets/asset.js";
import { NavLink, useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-5 cursor-pointer"
      >
        <img
          className="w-20 h-20 spin-slow drop-shadow-lg brightness-200 rounded-full"
          src={assets.portfolioLogo}
          alt=""
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-black bg-clip-text uppercase tracking-wider font-orbitron">
          Tejas
        </h1>
      </div>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1 text-base">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/projects">
          <li className="py-1 text-base">PROJECTS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 text-base">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 text-base">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate("/contact")}
          className="bg-primary text-white px-5 py-3 font-semibold rounded-full hidden md:flex items-center gap-2"
        >
          CONNECT WITH ME <CiMail className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
