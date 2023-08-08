"use client"

import HeroSection from "./Components/layout/HeroSection"
import Navbar from "./Components/layout/Navbar"

// import Loader from './Components/loader';

export default function Home() {

  return (
   <>
      {/* <Loader/> */}
     <Navbar/>
     <HeroSection/>
   </>
  )
}
