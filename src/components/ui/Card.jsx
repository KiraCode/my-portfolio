import React, { useState } from "react";

const Card = ({ title, description, image, view, icons, category }) => {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 50;
  const isLong = description.length > maxChars;
  const preview = description.slice(0, maxChars);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {category.includes("-Assignments") ? (
        <div className="w-full col-span-full" style={{ height: "600px" }}>
          {/* Loader */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white z-10">
              <span className="text-lg animate-pulse">Loading...</span>
            </div>
          )}
          <iframe
            src={view.liveLink}
            title={title}
            className="w-full h-full"
            style={{ border: "none" }}
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      ) : (
        <div className="w-full sm:max-w-md lg:max-w-lg bg-primary rounded-t-lg rounded-b-2xl shadow-md flex flex-col overflow-hidden transition-all duration-300">
          <img
            src={image}
            alt={title}
            className="w-full h-40 sm:h-38 lg:h-46 object-cover object-center rounded"
          />

          <div className="pt-0 px-2 pb-2 sm:px-2 sm:pb-2 sm:pt-0 flex-1 flex flex-col justify-between bg-gray-200">
            {/* Title */}
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
              {title}
            </h2>

            {/* Description & read‑more */}
            <p
              className={`text-sm sm:text-base text-gray-700 leading-snug ${
                !expanded && isLong ? "line-clamp-2" : ""
              }`}
            >
              {!expanded && isLong ? (
                <>
                  {preview}…{" "}
                  <button
                    className="text-blue-500 underline text-xs sm:text-sm"
                    onClick={() => setExpanded(true)}
                  >
                    read more
                  </button>
                </>
              ) : (
                description
              )}
            </p>

            {/* Tech stack & GitHub */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex space-x-2 text-lg sm:text-xl text-gray-600">
                {icons.map((icon, index) => {
                  const { name, src } = icon;
                  return (
                    <div className="relative group" key={index}>
                      <img
                        src={src}
                        alt="tech-icon"
                        className="w-4 h-4 sm:w-7 sm:h-7 object-contain mx-1"
                      />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                        {name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex">
                <div className="relative group">
                  <a
                    href={view.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on GitHub"
                    className="text-gray-600 hover:text-black transition"
                  >
                    <img
                      src={view.liveIcon}
                      alt="tech-icon"
                      className="w-4 h-4 sm:w-7 sm:h-7 object-contain mx-1  rounded-full outline-none"
                    />
                  </a>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                    Live
                  </span>
                </div>
                <div className="relative group">
                  <a
                    href={view.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on GitHub"
                    className="text-gray-600 hover:text-black transition"
                  >
                    <img
                      src={view.gitIcon}
                      alt="tech-icon"
                      className="w-4 h-4 sm:w-7 sm:h-7 object-contain mx-1  rounded-full outline-none"
                    />
                  </a>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
                    Github
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
