import React from "react";
import Card from "./ui/Card";


const Whychoose = () => {
  return (
<section className="bg-slate-50 py-20">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Why Choose PlaceWise?
      </h2>

      <p className="mt-4 text-slate-500">
        Everything you need to stay organized, prepared, and confident
        throughout your placement journey.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

      <Card  title="All in One Place" icon="🎯" desc="Manage your placement journey from one platform." />

      <Card  title="Right Opportunities" icon="💼" desc="Discover jobs and internships in one place." />
      
      <Card  title="Track Progress" icon="📊" desc="Keep track of your preparation and applications." />

      <Card  title="Clear Direction" icon="🧭" desc="Know what to focus on throughout your career journey." />

    </div>
  </div>
</section>

  );
};

export default Whychoose;