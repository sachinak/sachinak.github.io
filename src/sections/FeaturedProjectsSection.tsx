import { useState, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import SectionHeader from '../components/SectionHeader'
import StarIcon from '../components/StarIcon'
import ScrollReveal from '../components/ScrollReveal'

const filters = ['All', 'Tekrata', 'Previous Roles', 'Personal Project'] as const
type Filter = (typeof filters)[number]

interface Project {
  label: string
  labelType: string
  title: string
  tags: string[]
  description: string
  link?: string
  filter: Filter
}

const projects: Project[] = [
  {
    label: 'TEKRATA',
    labelType: 'TEKRATA',
    title: 'Healthcare Invoice AI Pipeline',
    tags: ['LLM Pipelines', 'AWS Bedrock', 'Python'],
    description:
      'Built an asynchronous Python/AWS (Lambda, S3, Bedrock) LLM pipeline using Claude to turn unstructured healthcare PDF invoices into validated JSON. Multistep consensus checks caught and corrected table-parsing errors, reaching 99.2% accuracy.',
    filter: 'Tekrata',
  },
  {
    label: 'TEKRATA',
    labelType: 'TEKRATA',
    title: 'Healthcare Claims Platform',
    tags: ['Next.js', 'Node.js', 'Claude Code'],
    description:
      'Shipped end-to-end features for a healthcare claims workflow: a Next.js frontend and Node.js REST APIs that automate patient claim submission and real-time status tracking, using Claude Code to seed data and testing.',
    filter: 'Tekrata',
  },
  {
    label: 'TEKRATA',
    labelType: 'TEKRATA',
    title: 'Monolith to Microservices Migration',
    tags: ['Go', 'Microservices', 'AI-Driven Testing'],
    description:
      'Led the decomposition of a legacy Go monolith into an interface-driven microservices framework so it could scale. AI-driven regression suites enforced 100% API contract parity and cut technical debt by 40%.',
    filter: 'Tekrata',
  },
  {
    label: 'FLEXGEN',
    labelType: 'PREVIOUS ROLE',
    title: 'IoT Data Pipeline & Observability',
    tags: ['Kafka', 'Kubernetes', 'Grafana'],
    description:
      'Built event-driven Python/Kafka pipelines on Kubernetes for 1,000+ IoT devices, with Grafana for real-time anomaly detection — sustaining 99.9% data availability via staged CI/CD rollouts.',
    filter: 'Previous Roles',
  },
  {
    label: 'FLEXGEN',
    labelType: 'PREVIOUS ROLE',
    title: 'Zero-Downtime InfluxDB Migration',
    tags: ['Terraform', 'Go', 'InfluxDB'],
    description:
      'Led a zero-downtime InfluxDB 1.8 to 2.6 migration with Terraform, refactoring Go services to Flux-based queries and improving query performance by 35%.',
    filter: 'Previous Roles',
  },
  {
    label: 'ELASTICRUN',
    labelType: 'PREVIOUS ROLE',
    title: 'In-House Ticketing Platform',
    tags: ['Python', 'Vue.js', 'Full-Stack'],
    description:
      'Independently built a full-stack Python/VueJS ticketing platform end to end, replacing third-party SaaS vendors and saving $100,000 annually.',
    filter: 'Previous Roles',
  },
  {
    label: 'ELASTICRUN',
    labelType: 'PREVIOUS ROLE',
    title: 'High-Availability E-Commerce Backend',
    tags: ['Go', 'Kubernetes', 'Kafka'],
    description:
      'Designed a high-availability Go/Kubernetes/Kafka backend for an e-commerce platform, adding gRPC and Redis caching to cut tail latency by 40% with 99.9% message delivery reliability.',
    filter: 'Previous Roles',
  },
  {
    label: 'EARLY CAREER',
    labelType: 'PREVIOUS ROLE',
    title: 'Multi-Tenant Backends & Enterprise Pipelines',
    tags: ['Flask', 'MongoDB', 'MSSQL'],
    description:
      'Built a greenfield multi-tenant Flask/MongoDB backend with JWT/OTP auth and S3 storage at Wow Labz, and automated enterprise reporting pipelines with MSSQL/Python at MAQ Software (client Microsoft).',
    filter: 'Previous Roles',
  },
  {
    label: 'PROJECT',
    labelType: 'PERSONAL PROJECT',
    title: 'Containerized Vulnerability Intelligence Backend',
    tags: ['Go', 'Docker', 'REST APIs'],
    description:
      'Built a containerized pipeline that automates ingestion and schema-validation of structured CVE data, serving it through high-performance REST APIs for downstream risk modeling.',
    link: 'https://github.com/sachinak',
    filter: 'Personal Project',
  },
]

export default function FeaturedProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.filter === activeFilter)

  const animateFilterChange = useCallback((filter: Filter) => {
    if (!gridRef.current) return
    const cards = gridRef.current.children

    gsap.to(cards, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      stagger: 0.03,
      onComplete: () => {
        setActiveFilter(filter)
        requestAnimationFrame(() => {
          if (!gridRef.current) return
          const newCards = gridRef.current.children
          gsap.fromTo(
            newCards,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out' }
          )
        })
      },
    })
  }, [])

  return (
    <section
      id="featured-projects"
      style={{
        padding: 'var(--section-padding) var(--page-padding)',
        background: 'var(--warm-paper)',
      }}
    >
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <SectionHeader
          title="Featured Projects"
          description="Selected work from Tekrata, previous engineering roles, and personal projects."
        />

        {/* Filter Tabs */}
        <ScrollReveal delay={0.15} className="flex gap-2 mb-10 no-scrollbar overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => animateFilterChange(filter)}
              className={`text-cta rounded-full px-5 py-2 border whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[var(--deep-espresso)] text-[var(--soft-cream)] border-[var(--deep-espresso)]'
                  : 'bg-transparent text-[var(--charcoal)] border-[var(--border-warm)] hover:bg-[var(--soft-cream)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </ScrollReveal>

        {/* Project Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-[var(--deep-espresso)] rounded p-8 border border-[rgba(245,240,232,0.1)] transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(43,27,23,0.2)]"
            >
              <span className="text-caption uppercase text-[rgba(245,240,232,0.5)] tracking-wider">
                {project.labelType}
              </span>
              <h3 className="font-playfair font-extrabold text-[clamp(1.4rem,2.5vw,1.8rem)] text-[var(--soft-cream)] tracking-[0.02em] mt-3 mb-4">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-caption text-[rgba(245,240,232,0.6)] border border-[rgba(245,240,232,0.2)] rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[rgba(245,240,232,0.7)] text-base leading-relaxed mb-5">
                {project.description}
              </p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nav text-[var(--gold)] hover:text-[var(--soft-cream)] transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Learn More <span>&rarr;</span>
                </a>
              ) : (
                <span className="text-nav text-[var(--gold)] opacity-60 inline-flex items-center gap-2">
                  Learn More <span>&rarr;</span>
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Decorative Star */}
        <div className="flex justify-center mt-12 md:mt-16">
          <StarIcon size={80} rotation={30} />
        </div>
      </div>
    </section>
  )
}
