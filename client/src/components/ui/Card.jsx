import React from "react";

const Card = ({ title, icon, desc }) => {
  return (
     <div className="bg-white p-6 rounded-xl border border-slate-200">
        <div className="text-blue-600 text-3xl">{icon}</div>

        <h3 className="mt-4 text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {desc}
        </p>
      </div>
  );
};

export default Card;