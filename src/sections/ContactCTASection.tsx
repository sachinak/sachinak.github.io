import ScrollReveal from '../components/ScrollReveal'
import CTAButton from '../components/CTAButton'

export default function ContactCTASection() {
  return (
    <section
      id="contact"
      style={{
        padding: 'var(--section-padding) 0 160px',
        maxWidth: '700px',
        margin: '0 auto',
      }}
    >
      <ScrollReveal className="text-center" style={{ padding: '0 var(--page-padding)' }}>
        <p className="font-mono text-[var(--green)] text-[0.85rem] mb-4">04. What&apos;s Next?</p>
        <h2 className="text-h1" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
          Get In Touch
        </h2>
        <p className="text-body max-w-[500px] mx-auto mt-6">
          Have a project, a role, or a hard problem in mind? My inbox is open — I read every
          message and usually reply within a couple of days.
        </p>
        <div className="mt-10">
          <CTAButton href="mailto:sachinkanth17@gmail.com">Say Hello</CTAButton>
        </div>
      </ScrollReveal>
    </section>
  )
}
