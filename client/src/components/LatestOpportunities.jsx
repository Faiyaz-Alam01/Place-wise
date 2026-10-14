import React from 'react'

const LatestOpportunities = () => {
  return (
	<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Latest Opportunities
        </h2>

        <p className="mt-3 text-slate-500">
          Discover jobs and internships that match your skills.
        </p>
      </div>

      <button className="text-blue-600 font-medium">
        View All →
      </button>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      <div className="border border-slate-200 rounded-xl p-6">
        <span className="text-sm text-blue-600">Internship</span>

        <h3 className="text-lg font-semibold text-slate-900 mt-3">
          Frontend Developer
        </h3>

        <p className="text-sm text-slate-500 mt-2">
          React • JavaScript
        </p>

        <button className="mt-5 text-blue-600 font-medium">
          View Details →
        </button>
      </div>

      <div className="border border-slate-200 rounded-xl p-6">
        <span className="text-sm text-blue-600">Internship</span>

        <h3 className="text-lg font-semibold text-slate-900 mt-3">
          Data Analyst
        </h3>

        <p className="text-sm text-slate-500 mt-2">
          SQL • Power BI
        </p>

        <button className="mt-5 text-blue-600 font-medium">
          View Details →
        </button>
      </div>

      <div className="border border-slate-200 rounded-xl p-6">
        <span className="text-sm text-blue-600">Job</span>

        <h3 className="text-lg font-semibold text-slate-900 mt-3">
          Software Developer
        </h3>

        <p className="text-sm text-slate-500 mt-2">
          JavaScript • Node.js
        </p>

        <button className="mt-5 text-blue-600 font-medium">
          View Details →
        </button>
      </div>

    </div>
  </div>
</section>
  )
}

export default LatestOpportunities
