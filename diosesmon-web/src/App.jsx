import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Steps from './components/Steps'
import Generations from './components/Generations'
import Gyms from './components/Gyms'
import Ranks from './components/Ranks'
import KitsExclusivos from './components/KitsExclusivos'
import Coins from './components/Coins'
import Footer from './components/Footer'
import Pokemon from './pages/Pokemon'
import LoadingScreen from './components/LoadingScreen'

function Landing() {
  return (
    <>
      <a
        href="#empezar"
        className="absolute left-3 top-3 z-[100] -translate-x-[999px] rounded-lg bg-gold px-4 py-2.5 font-semibold text-[#1A1204] focus:translate-x-0"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Ticker />
        <Steps />
        <Generations />
        <Gyms />
        <Ranks />
        <KitsExclusivos />
        <Coins />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  // fallback: ensure loading ends even if JS is slow
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 4400)
    return () => clearTimeout(t)
  }, [])
  return (
    <MotionConfig reducedMotion="user">
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
