import React from 'react'

const CareerRd = () => {
  return (
	<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-900">
        Career Roadmap
      </h2>

      <p className="mt-3 text-slate-500">
        Know what to focus on for your career goal.
      </p>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">

      <div className="bg-blue-50 text-center p-5 rounded-xl">
        <span className="text-blue-600 font-bold">01</span>
        <h3 className="font-semibold text-slate-900 mt-2">
          Choose Career
        </h3>
      </div>

      <span className="text-slate-400">→</span>

      <div className="bg-blue-50 text-center p-5 rounded-xl">
        <span className="text-blue-600 font-bold">02</span>
        <h3 className="font-semibold text-slate-900 mt-2">
          Build Skills
        </h3>
      </div>

      <span className="text-slate-400">→</span>

      <div className="bg-blue-50 text-center p-5 rounded-xl">
        <span className="text-blue-600 font-bold">03</span>
        <h3 className="font-semibold text-slate-900 mt-2">
          Prepare
        </h3>
      </div>

      <span className="text-slate-400">→</span>

      <div className="bg-blue-50 text-center p-5 rounded-xl">
        <span className="text-blue-600 font-bold">04</span>
        <h3 className="font-semibold text-slate-900 mt-2">
          Get Placement Ready
        </h3>
      </div>

    </div>
  </div>
</section>
  )
}

export default CareerRd
