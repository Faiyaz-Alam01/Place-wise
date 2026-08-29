import React from "react";

const Card = ({ title, bgColour, img }) => {
  return (
    <section
      className={`p-5 ${bgColour} rounded-xl flex flex-col items-center justify-center text-center`}
    >
      {img}

      <p className="text-slate-900 mt-3 font-medium">
        {title}
      </p>
    </section>
  );
};

export default Card;