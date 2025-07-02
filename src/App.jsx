import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatternBackground from './components/PatternBackground'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductCategories from './components/ProductCategories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PatternBackground />
      <Navbar />
      <HeroSection />
      <ProductCategories />
      {/* <ImageCarousel /> */}
    </>
  )
}

export default App
