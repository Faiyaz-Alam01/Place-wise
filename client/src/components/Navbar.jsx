import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
	<div>
	  <div className='flex justify-around items-center
                font-medium text-xl
                bg-white/90
                border-b border-blue-100
                shadow-sm'>
		<img 
			src="/logo.png"  
			alt="Place wise logo" 
			className='h-20'
		/>

		<ul className=' flex gap-6 items-center'>
			<li><NavLink to="/home">Home</NavLink></li>
			<li><NavLink to="/features">Feature</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
		</ul>
		<Link to="/signup"
			className="py-1
				h-10 px-5 rounded-lg
				text-white font-semibold
				bg-linear-to-r from-blue-600 to-purple-600
				hover:from-blue-700 hover:to-purple-700
				shadow-md hover:shadow-lg
				transition-all duration-300
			">
			Login
		</Link>
	  </div>
	</div>
  )
}

export default Navbar
