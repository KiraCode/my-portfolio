import React, { useContext } from "react";
import { exp } from "../../assets/asset";

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
  return (
    // <div
    //   key={id}
    //   className="flex w-full items-start gap-4 rounded-2xl p-6 md:p-5  hover:bg-purple-300 hover:shadow-lg transition"
    // >
    //   {/* icon circle */}
    //   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
    //     <img src={exp.expImgWhite} alt="" className="w-8" />
    //   </div>

    //   {/* details */}
    //   <div>
    //     <h6 className="text-sm font-bold">
    //       {startYear}‑{endYear}
    //     </h6>
    //     <h4
    //       // style={{ color: theme.tertiary }}
    //       className="text-lg font-semibold"
    //     >
    //       {jobtitle}
    //     </h4>
    //     <h5
    //       // style={{ color: theme.tertiary80 }}
    //       className="text-base font-medium"
    //     >
    //       {company}
    //     </h5>
    //   </div>
    // </div>
    <div
      key={id}
      className="group flex w-full items-start gap-4 rounded-2xl p-6 md:p-5 bg-gray-100 hover:bg-purple-200 hover:shadow-lg transition"
    >
      {/* icon circle */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-transparent bg-primary group-hover:border-white group-hover:bg-purple-400 transition ">
        <img src={exp.expImgWhite} alt="" className="w-8" />
      </div>

      {/* details */}
      <div>
        <h6 className="text-sm font-bold text-gray-700 group-hover:text-purple-700 transition">
          {startYear}‑{endYear}
        </h6>
        <h4 className="text-2xl font-semibold text-gray-900 group-hover:text-purple-700 transition">
          {jobtitle}
        </h4>
        <h5 className="text-base font-medium text-gray-600 group-hover:text-purple-700 transition">
          {company}
        </h5>
      </div>
    </div>
  );
}
export default ExperienceCard;
