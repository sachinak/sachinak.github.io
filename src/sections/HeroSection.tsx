import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import CTAButton from '../components/CTAButton'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const greetingRef = useRef<HTMLParagraphElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const roleRef = useRef<HTMLHeadingElement>(null)
  const paraRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.2 })

    tl.from(photoRef.current, { opacity: 0, scale: 0.9, duration: 0.8 }, 0)
      .from(greetingRef.current, { opacity: 0, y: 15, duration: 0.6 }, 0.3)
      .from(nameRef.current, { opacity: 0, y: 20, duration: 0.6 }, 0.4)
      .from(roleRef.current, { opacity: 0, y: 20, duration: 0.6 }, 0.5)
      .from(paraRef.current, { opacity: 0, y: 15, duration: 0.6 }, 0.6)
      .from(ctaRef.current, { opacity: 0, y: 15, duration: 0.6 }, 0.7)
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center"
      style={{ padding: '0 var(--page-padding)', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        <div ref={photoRef} className="flex-shrink-0 order-1 md:order-2">
          <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden border-2 border-[var(--green)] shadow-[0_0_0_6px_var(--green-tint)]">
            <img
              src="./assets/portrait-about.jpg"
              alt="Sachin Kanth"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="order-2 md:order-1 text-center md:text-left">
          <p ref={greetingRef} className="font-mono text-[var(--green)] text-base sm:text-lg mb-4">
            Hi, my name is
          </p>
          <h1 ref={nameRef} className="text-h1">
            Sachin Kanth.
          </h1>
          <h2 ref={roleRef} className="text-h1 opacity-50 mt-1">
            I build reliable, AI-powered systems.
          </h2>
          <p ref={paraRef} className="text-body max-w-[540px] mt-6 mx-auto md:mx-0">
            I&apos;m an AI Engineer currently building LLM pipelines and full-stack features at{' '}
            <span className="text-[var(--lightest-slate)]">Tekrata</span>. I specialize in turning
            unstructured data into validated, production-grade systems — and the backend,
            cloud, and distributed-systems work that holds them up.
          </p>
          <div ref={ctaRef} className="mt-10 flex justify-center md:justify-start">
            <CTAButton
              onClick={() => {
                const el = document.getElementById('work')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Check out my work!
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
