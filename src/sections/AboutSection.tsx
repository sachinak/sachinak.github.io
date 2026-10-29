import Marquee from 'react-fast-marquee'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'

const educationCards = [
  {
    category: 'EDUCATION',
    title: 'M.S. Computer Science',
    description: 'North Carolina State University, Raleigh — Aug 2023 to May 2025.',
    handwritten: 'Go Pack',
  },
  {
    category: 'EDUCATION',
    title: 'B.Tech, Computer Science & Engineering',
    description: 'Indian Institute of Information Technology, Pune — Aug 2016 to Jun 2020.',
    handwritten: 'Where it started',
  },
  {
    category: 'AI & LLM',
    title: 'Agentic Systems',
    description: 'LLM pipelines, agentic workflows, and consensus/validation checks with Claude, AWS Bedrock, and the OpenAI API.',
    handwritten: 'Trust, but verify',
  },
  {
    category: 'CLOUD',
    title: 'Infrastructure at Scale',
    description: 'AWS, Azure, Kubernetes, Docker, and Terraform — shipping with CI/CD, not around it.',
    handwritten: 'Ship it, then scale it',
  },
]

const philosophyQuotes = [
  'I believe AI should augment judgment, not replace rigor — every pipeline needs a way to check its own work.',
  'Good engineering is invisible: systems that stay up, migrations nobody notices, and code the next person can trust.',
]

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: 'var(--section-padding) var(--page-padding)',
        background: 'var(--warm-paper)',
      }}
    >
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <SectionHeader
          title="About Me"
          description="The person behind the professional summary."
        />

        {/* Portrait + Bio Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12 md:mb-16">
          {/* Portrait */}
          <ScrollReveal y={0} className="w-full md:w-[40%] flex flex-col items-center">
            <div className="w-full max-w-[380px] mx-auto md:mx-0">
              <div className="rounded-full overflow-hidden border-[3px] border-[var(--deep-espresso)] shadow-[0_8px_32px_rgba(43,27,23,0.15)] aspect-square">
                <img
                  src="./assets/portrait-about.jpg"
                  alt="Sachin Kanth"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-caveat text-[1.4rem] text-[var(--crimson)] text-center mt-4">
                Hello!
              </p>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal delay={0.2} className="w-full md:w-[55%]">
            <p className="font-playfair font-bold italic text-[clamp(1.1rem,1.8vw,1.25rem)] text-[var(--deep-espresso)] mb-6">
              I build systems that turn messy, real-world data into something reliable — and AI into something you can trust.
            </p>
            <div className="text-[var(--charcoal)] leading-[1.7] space-y-4">
              <p>
                I'm an AI Engineer at Tekrata, where I build LLM pipelines and agentic workflows that turn unstructured data — healthcare invoices, claims documents — into validated, production-grade output, and ship the full-stack features that put that work in front of real users.
              </p>
              <p>
                Before Tekrata, I worked across the stack: building IoT data pipelines and leading a zero-downtime database migration at FlexGen, designing a high-availability Go backend and an in-house ticketing platform at ElasticRun, and shipping backend systems at Wow Labz and MAQ Software (client Microsoft). I hold an M.S. in Computer Science from NC State and a B.Tech from IIIT Pune.
              </p>
              <p>
                I like problems that sit at the edge of what AI can be trusted to do on its own — where the interesting work is building the validation and consensus checks around it, not just the model call itself.
              </p>
            </div>
            <p className="font-caveat text-[clamp(1.2rem,2vw,1.4rem)] text-[var(--crimson)] italic mt-6">
              Let&apos;s build something reliable together.
            </p>
          </ScrollReveal>
        </div>

        {/* Marquee */}
        <Marquee speed={40} gradient={false} className="mb-10 md:mb-12">
          <span className="text-[0.85rem] uppercase tracking-[0.08em] text-[var(--charcoal)] opacity-40 mx-4">
            AI Engineering &middot; LLM Pipelines &middot; Full-Stack Development &middot; Cloud Infrastructure &middot; Microservices &middot; Distributed Systems &middot; Python &middot; Go &middot;
          </span>
        </Marquee>

        {/* Philosophy Quotes */}
        <ScrollReveal stagger={0.15} y={20} className="flex flex-col items-center gap-6 md:gap-8 mb-12 md:mb-16">
          {philosophyQuotes.map((quote, i) => (
            <p
              key={i}
              className="font-playfair font-bold italic text-[clamp(1rem,1.5vw,1.15rem)] text-[var(--deep-espresso)] text-center max-w-[600px]"
            >
              {quote}
            </p>
          ))}
        </ScrollReveal>

        {/* Education & Interests Cards */}
        <ScrollReveal stagger={0.1} y={30}>
          <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2" style={{ scrollSnapType: 'x mandatory' }}>
            {educationCards.map((card) => (
              <div
                key={card.title}
                className="min-w-[220px] max-w-[220px] bg-[var(--soft-cream)] border border-[var(--border-warm)] rounded-lg p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(43,27,23,0.08)] hover:border-[var(--gold)]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <span className="text-caption uppercase text-[var(--charcoal)] opacity-50 tracking-wider mb-3">
                  {card.category}
                </span>
                <h4 className="font-playfair font-extrabold text-[1.1rem] text-[var(--deep-espresso)] tracking-[0.02em] mb-3">
                  {card.title}
                </h4>
                <p className="text-caption text-[var(--charcoal)] opacity-70 leading-relaxed mb-3 flex-grow">
                  {card.description}
                </p>
                <p className="font-caveat text-[0.95rem] text-[var(--crimson)] italic">
                  {card.handwritten}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
