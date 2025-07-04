import React from "react";
import { profile } from "../assets/asset.js";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:mx-10 text-gray-200">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        {/* ------left section------ */}
        <div>
          <div className="flex items-center gap-5 cursor-pointer">
            <img
              className="w-20 h-20 mb-5 spin-slow drop-shadow-lg brightness-200 rounded-full"
              src={profile.portfolioLogo}
              alt="portfolio-logo"
            />
            <h1 className="text-4xl sm:text-5xl font-bold uppercase font-mono text-gray-200">
              Tejas
            </h1>
          </div>
          <p className="w-full md:w-2/3 leading-6">
            Certified <span className="text-xl font-serif text-white">Full Stack Developer(MERN + JAVA)</span>  <br /> Hands-on
            Experience in Building Scalable <br /> Web Application, Java
            Application, MERN Stack Application
          </p>
        </div>
        {/* ------center section------ */}
        <div>
          {/* <p className="text-2xl font-medium mb-5">FOLLOW MY WORK</p> */}

          <ul className="flex flex-col gap-3 text-base">
            <li>
              <a
                href="https://github.com/KiraCode"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center gap-3 border border-white rounded-lg px-5 py-2 transition-all group-hover:border-black group-hover:bg-gray-100">
                  <FaGithub className="text-xl text-gray-800" />
                  <p className="text-gray-200 text-sm group-hover:text-black group-hover:font-semibold transition-all">
                    GitHub
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/tejas-p-2349101a7"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center gap-3 border border-white rounded-lg px-5 py-2 transition-all group-hover:border-[#005983] group-hover:bg-gray-100">
                  <FaLinkedin className="text-xl text-[#0077b5]" />
                  <p className="text-gray-200 text-sm group-hover:text-[#005983] group-hover:font-semibold transition-all">
                    LinkedIn
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://youtube.com/@animemojjoo"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center gap-3 border border-white rounded-lg px-5 py-2 transition-all group-hover:border-[#cc0000] group-hover:bg-gray-100">
                  <FaYoutube className="text-xl text-[#FF0000]" />
                  <p className="text-gray-200 text-sm group-hover:text-[#cc0000] group-hover:font-semibold transition-all">
                    YouTube
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/animemojoo"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center gap-3 border border-white rounded-lg px-5 py-2 transition-all group-hover:border-[#e1306c] group-hover:bg-gray-100">
                  <FaInstagram className="text-xl text-[#C13584]" />
                  <p className="text-gray-200 text-sm group-hover:text-[#e1306c] group-hover:font-semibold transition-all">
                    Instagram
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        {/* ------right section------ */}
        <div>
          <p className="text-xl font-medium mb-5">
            <u>GET IN TOUCH</u>
          </p>
          <ul className="flex flex-col gap-2 text-gray-200 text-base">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-white" />
              (+91) 9071905122
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white" />
              tejaswork.contactme@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white" />
              Bengaluru, Karnataka, India
            </li>
          </ul>
        </div>
      </div>
      <div>
        {/* ------------copyright text-------- */}
        <hr />
        <p className="py-5 text-sm text-center">
          © 2025 Tejas - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
