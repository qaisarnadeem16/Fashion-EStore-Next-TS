"use client"

import Products from "./Components/Products/Products"
import HeroSection from "./Components/layout/HeroSection"
import Navbar from "./Components/layout/Navbar"

// import Loader from './Components/loader';

export default function Home() {

  return (
   <>
      {/* <Loader/> */}
     <Navbar/>
     <HeroSection/>
     <Products/>
   </>
  )
}
