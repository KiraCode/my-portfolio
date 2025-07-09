import React, { useState } from "react";
import { profile } from "../assets/asset.js";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
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
        <h1 className="text-4xl sm:text-5xl font-bold uppercase font-mono text-gray-200">
          Tejas
        </h1>
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
          className=" text-white px-3 py-1 font-semibold rounded-full border-2 border-purple-400 md:flex items-center gap-4 "
        >
          {" "}
          <FaGithub className="w-5 h-5" />{" "}
          <span className="hidden md:inline">GITHUB</span>
        </a>
        <img
          onClick={() => setShowMenu(true)}
          src={profile.MenuIcon}
          className="w-10 md:hidden"
          alt=""
        />
        {/* mobile menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-gray-300 transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <div className="flex items-center space-x-6">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src={profile.portfolioLogo}
                alt="Logo"
              />
              <span className="text-black font-semibold text-4  xl tracking-wide">
                TEJAS
              </span>
            </div>
            <img className="w-7"
              onClick={() => setShowMenu(false)}
              src={profile.CloseIcon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={()=>setShowMenu(false)} to='/'><p>HOME</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/projects'><p>PROJECTS</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/about'><p>ABOUT</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
