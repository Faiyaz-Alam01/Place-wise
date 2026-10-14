import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Whychoose from '../components/Whychoose'
import Footer from './Footer'
import Placement from '../components/Placement'
import LatestOpportunities from '../components/LatestOpportunities'
import CareerRd from '../components/CareerRd'

const Home = () => {
  return (
	<div>
	  <Navbar />
	  <HeroSection />
	  <Whychoose />
	  <Placement />
	  <LatestOpportunities />
	  <CareerRd />
	  <Footer />
	</div>
  )
}

export default Home
