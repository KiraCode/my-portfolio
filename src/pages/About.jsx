import React from "react";
import LineUI from "../components/ui/LineUI"

const About = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 text-gray-100">
      {/* Title */}
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 to-gray-300 bg-clip-text text-transparent pb-5 mb-12">
        My Career Profile
      </h1>

      {/* Career Objective */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-400 mb-3">
          🎯 Career Objective
        </h2>
        <div className="h-1 w-full bg-gradient-to-r from-white to-purple-400 my-6 rounded" />

        <p className="text-gray-200 text-lg leading-relaxed">
          Passionate and goal-oriented software developer with a strong
          foundation in full-stack development. Seeking to contribute my
          technical and problem-solving skills in a challenging environment to
          create impactful software solutions and grow professionally.
        </p>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-400 mb-3">
          🎓 Education
        </h2>
        <div className="h-1 w-full bg-gradient-to-r from-white to-purple-400 my-6 rounded" />

        <ul className="list-none list-inside text-lg text-gray-200 space-y-1">
          <li>
            B.Tech in Mechanical Engineering - Presidency University (2017 -
            2021)
          </li>
          <li>PUC - KLE's Independent PU College (2015 - 2017)</li>
        </ul>
      </section>

      {/* Work Experience */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-400 mb-3">
          💼 Work Experience
        </h2>{" "}
        <div className="h-1 w-full bg-gradient-to-r from-white to-purple-400 my-6 rounded" />
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg">
              Software Developer @ Wissen Infotech
            </h3>
            <p className=" text-sm text-gray-200">June 2022 – March 2024</p>
            <p className="text-gray-200 mt-2 text-lg">
              Worked as a Java developer on two enterprise projects with
              end-to-end feature delivery, debugging, and code maintenance.
            </p>

            <ul className="list-none text-lg list-inside text-gray-200 mt-3 space-y-2">
              <li>
                <strong className="text-purple-300"><u>Clinact Project:</u></strong> Utilized Vaadin Framework
                (v11–22), Java 11, MySQL, and MongoDB. Managed debugging, CSV
                data handling, and Bitbucket-based Git versioning.
              </li>
              <li>
                <strong className="text-purple-300"><u>KWA Smart Meter Project:</u></strong> Developed backend
                using Java, Spring, and Spring Boot. Designed APIs to interact
                with MySQL databases and handled GitHub version control.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-400 mb-3">
          🚀 Projects
        </h2>{" "}
        <div className="h-1 w-full bg-gradient-to-r from-white to-purple-400 my-6 rounded" />
        <ul className="list-none text-lg list-inside text-gray-200 space-y-2">
          {/* <li>
            <strong className="text-purple-300">Note App (MERN):</strong> Built a full-stack notes
            application with user authentication, CRUD features, JWT security,
            and MongoDB storage.
          </li> */}
          <li>
            <strong className="text-purple-300">Smart Water Meter Dashboard:</strong> Developed a
            Vaadin-based dashboard for monitoring smart meter data from the
            Kerala Water Authority.
          </li>
          <li>
            <strong className="text-purple-300">Responsive Portfolio:</strong> Designed and deployed a
            personal portfolio using React, Tailwind CSS, and Netlify.
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-400 mb-3">
          🛠️ Skills
        </h2>{" "}
        <div className="h-1 w-full bg-gradient-to-r from-white to-purple-400 my-6 rounded" />
        <div className="grid grid-cols-2 text-lg sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-200">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>MySQL / PostgreSQL</span>
          <span>Hibernate</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js / Express</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-400 mb-3">📄 Certifications</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          <li>Java Developer Certificate - XYZ Platform</li>
          <li>AWS Cloud Practitioner - Amazon</li>
        </ul>
      </section> */}
      <LineUI/>
    </div>
  );
};

export default About;
