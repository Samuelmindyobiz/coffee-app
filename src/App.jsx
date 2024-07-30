import { useEffect } from "react"
import React from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Services from "./components/Services/Services.jsx"
import Banner from "./components/Banner/Banner.jsx"
import AppStore from "./components/AppStore/AppStore.jsx"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"



const App = () => {
  useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      }
    )

  })
  return (
    <div className="bg-white duration-200 overflow-x-hidden">
      <Home />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
