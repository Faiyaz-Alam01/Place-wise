import React from 'react'
import Card from './ui/Card'
import { 
  MdSchool,
  MdWork,
  MdMic,
  MdNotes,
  MdExplore,
  MdQuiz
} from "react-icons/md";

const Whychoose = () => {
  return (
	<div>
	  <div className="w-full h-auto bg-slate-100 flex flex-col items-center justify-center py-4">
		<h2 className="text-3xl font-bold text-slate-900">Why Choose Us?</h2>
		
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8">

			<Card
				title="Placement Preparation"
				bgColour="bg-blue-50"
				img={<MdSchool className="text-blue-600 text-4xl" />}
			/>

			<Card
				title="Jobs & Internships"
				bgColour="bg-indigo-50"
				img={<MdWork className="text-indigo-600 text-4xl" />}
			/>

			<Card
				title="Mock Interviews"
				bgColour="bg-violet-50"
				img={<MdMic className="text-violet-600 text-4xl" />}
			/>

			<Card
				title="Study Notes"
				bgColour="bg-emerald-50"
				img={<MdNotes className="text-emerald-600 text-4xl" />}
			/>

			<Card
				title="Career Guidance"
				bgColour="bg-amber-50"
				img={<MdExplore className="text-amber-600 text-4xl" />}
			/>

			<Card
				title="Aptitude Practice"
				bgColour="bg-cyan-50"
				img={<MdQuiz className="text-cyan-600 text-4xl" />}
			/>

			</div>
	  </div>
	</div>
  )
}

export default Whychoose
