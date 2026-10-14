import React from 'react'

const Placement = () => {
  return (
	<section className="bg-slate-50 py-16">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-900">
        Placement Preparation
      </h2>

      <p className="mt-3 text-slate-500">
        Prepare yourself for every step of the placement process.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        🧠
        <h3 className="mt-3 font-semibold text-slate-900">Aptitude</h3>
        <p className="text-sm text-slate-500 mt-2">
          Practice aptitude questions.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        💻
        <h3 className="mt-3 font-semibold text-slate-900">Coding</h3>
        <p className="text-sm text-slate-500 mt-2">
          Improve your coding skills.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        🎤
        <h3 className="mt-3 font-semibold text-slate-900">Interview</h3>
        <p className="text-sm text-slate-500 mt-2">
          Practice interview questions.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        📚
        <h3 className="mt-3 font-semibold text-slate-900">Technical</h3>
        <p className="text-sm text-slate-500 mt-2">
          Prepare technical concepts.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        🎯
        <h3 className="mt-3 font-semibold text-slate-900">Mock Interview</h3>
        <p className="text-sm text-slate-500 mt-2">
          Practice real interview situations.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        📄
        <h3 className="mt-3 font-semibold text-slate-900">Resume</h3>
        <p className="text-sm text-slate-500 mt-2">
          Build and improve your resume.
        </p>
      </div>

    </div>
  </div>
</section>
  )
}

export default Placement
