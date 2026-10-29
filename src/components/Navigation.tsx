import { useState, useEffect } from 'react'

const navLinks = [
  { number: '01', label: 'About', id: 'about' },
  { number: '02', label: 'Experience', id: 'experience' },
  { number: '03', label: 'Work', id: 'work' },
  { number: '04', label: 'Contact', id: 'contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || mobileOpen ? 'bg-[rgba(10,25,47,0.9)] backdrop-blur-[10px] shadow-[0_10px_30px_-10px_var(--navy-shadow)]' : 'bg-transparent'
        }`}
        style={{ padding: '18px var(--page-padding)' }}
      >
        <nav className="flex items-center justify-between max-w-[1200px] mx-auto">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-[var(--green)] text-xl font-semibold border border-[var(--green)] rounded w-11 h-11 flex items-center justify-center bg-transparent cursor-pointer hover:bg-[var(--green-tint)] transition-colors duration-300"
            aria-label="Scroll to top"
          >
            SK
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.id)}
                className="text-nav text-[var(--light-slate)] hover:text-[var(--green)] transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                <span className="text-[var(--green)]">{link.number}.</span> {link.label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1 z-[101]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-[var(--lightest-slate)] transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[var(--lightest-slate)] transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[var(--lightest-slate)] transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[99] bg-[var(--light-navy)] flex flex-col items-center justify-center gap-8"
          style={{ paddingTop: '80px' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.id)}
              className="text-h2 text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors bg-transparent border-none cursor-pointer font-mono text-[1.3rem]"
            >
              <span className="text-[var(--green)]">{link.number}.</span> {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
