import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatternBackground from './components/PatternBackground'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductCategories from './components/ProductCategories'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import logo from './assets/logo3.png'


const App = () => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
        <img src={logo} alt="Shrishti Gold Masale Logo" className=" mb-6  bg-white p-2 " />
        <span className="loading loading-spinner loading-xl text-[#a10000] mb-6"></span>
        <h1 className="text-2xl md:text-3xl font-bold text-[#a10000] font-serif text-center">Welcome to <span className="text-[#e0d53c]">Shrishti Gold Masale</span></h1>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductCategories />
      <ContactSection/>
      <Footer/>
      {/* <ImageCarousel /> */}
    </>
  )
}

export default App
