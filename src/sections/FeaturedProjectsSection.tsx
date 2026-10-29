import NumberedHeading from '../components/NumberedHeading'
import ScrollReveal from '../components/ScrollReveal'

interface FeaturedProject {
  overline: string
  title: string
  description: string
  tags: string[]
  link?: string
}

interface OtherProject {
  title: string
  description: string
  tags: string[]
  link?: string
}

const featuredProjects: FeaturedProject[] = [
  {
    overline: 'Tekrata',
    title: 'Healthcare Invoice AI Pipeline',
    description:
      'An asynchronous Python/AWS (Lambda, S3, Bedrock) LLM pipeline using Claude to turn unstructured healthcare PDF invoices into validated JSON. Multistep consensus checks catch and correct table-parsing errors, reaching 99.2% accuracy.',
    tags: ['Python', 'AWS Bedrock', 'Claude', 'Lambda'],
  },
  {
    overline: 'Tekrata',
    title: 'Healthcare Claims Platform',
    description:
      'End-to-end features for a healthcare claims workflow: a Next.js frontend and Node.js REST APIs that automate patient claim submission and real-time status tracking, built with Claude Code seeding data and tests along the way.',
    tags: ['Next.js', 'Node.js', 'REST APIs', 'Claude Code'],
  },
  {
    overline: 'Personal Project',
    title: 'Containerized Vulnerability Intelligence Backend',
    description:
      'A containerized pipeline that automates ingestion and schema-validation of structured CVE data, serving it through high-performance REST APIs for downstream risk modeling.',
    tags: ['Go', 'Docker', 'REST APIs'],
    link: 'https://github.com/sachinak',
  },
]

const otherProjects: OtherProject[] = [
  {
    title: 'Monolith to Microservices Migration',
    description:
      'Decomposed a legacy Go monolith into an interface-driven microservices framework; AI-driven regression suites enforced 100% API contract parity and cut technical debt by 40%.',
    tags: ['Go', 'Microservices'],
  },
  {
    title: 'IoT Data Pipeline & Observability',
    description:
      'Event-driven Python/Kafka pipelines on Kubernetes for 1,000+ IoT devices, with Grafana for real-time anomaly detection and 99.9% data availability.',
    tags: ['Kafka', 'Kubernetes', 'Grafana'],
  },
  {
    title: 'Zero-Downtime InfluxDB Migration',
    description:
      'Led a zero-downtime InfluxDB 1.8 to 2.6 migration with Terraform, refactoring Go services to Flux-based queries and improving query performance by 35%.',
    tags: ['Terraform', 'Go', 'InfluxDB'],
  },
  {
    title: 'In-House Ticketing Platform',
    description:
      'Full-stack Python/VueJS ticketing platform built end to end, replacing third-party SaaS vendors and saving $100,000 annually.',
    tags: ['Python', 'Vue.js'],
  },
  {
    title: 'High-Availability E-Commerce Backend',
    description:
      'High-availability Go/Kubernetes/Kafka backend with gRPC and Redis caching, cutting tail latency by 40% with 99.9% message delivery reliability.',
    tags: ['Go', 'Kubernetes', 'Kafka'],
  },
  {
    title: 'Multi-Tenant Backends & Enterprise Pipelines',
    description:
      'Greenfield multi-tenant Flask/MongoDB backend with JWT/OTP auth and S3 storage, plus automated MSSQL/Python reporting pipelines for an enterprise client.',
    tags: ['Flask', 'MongoDB', 'MSSQL'],
  },
]

function LinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export default function FeaturedProjectsSection() {
  return (
    <section
      id="work"
      style={{
        padding: 'var(--section-padding) 0',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <div style={{ padding: '0 var(--page-padding)' }}>
        <NumberedHeading number="03" title="Things I've Built" />

        {/* Featured projects */}
        <div className="flex flex-col gap-16 md:gap-20">
          {featuredProjects.map((project) => (
            <ScrollReveal key={project.title}>
              <p className="font-mono text-[var(--green)] text-[0.85rem] mb-2">{project.overline}</p>
              <h3 className="text-[1.3rem] sm:text-[1.5rem] font-semibold text-[var(--lightest-slate)] mb-4">
                {project.title}
              </h3>
              <div className="bg-[var(--light-navy)] border-l-2 border-[var(--green)] rounded p-6 text-body max-w-[640px]">
                {project.description}
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 font-mono text-[0.8rem] text-[var(--slate)]">
                {project.tags.map((tag, i) => (
                  <span key={tag}>
                    {tag}
                    {i < project.tags.length - 1 ? <span className="mx-3 text-[var(--lightest-navy)]">·</span> : null}
                  </span>
                ))}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors duration-300"
                    aria-label="View source"
                  >
                    <LinkIcon />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other noteworthy projects */}
        <ScrollReveal className="mt-24 md:mt-28 mb-10 text-center">
          <p className="font-mono text-[var(--green)] text-[0.85rem] mb-2">More</p>
          <h3 className="text-h2">Other Noteworthy Projects</h3>
        </ScrollReveal>

        <ScrollReveal stagger={0.08} y={25} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-[var(--light-navy)] rounded p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="flex items-center justify-between mb-5">
                <FolderIcon />
              </div>
              <h4 className="text-[1.05rem] font-semibold text-[var(--lightest-slate)] mb-2">
                {project.title}
              </h4>
              <p className="text-body text-[0.9rem] flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-4 font-mono text-[0.75rem] text-[var(--slate)]">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
