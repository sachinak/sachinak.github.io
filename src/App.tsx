import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './components/Navigation'
import SocialSidebar from './components/SocialSidebar'
import EmailSidebar from './components/EmailSidebar'
import Footer from './components/Footer'
import IndexPage from './pages/IndexPage'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)
    const update = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <div className="relative">
      <Navigation />
      <SocialSidebar />
      <EmailSidebar />
      <main>
        <IndexPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
