import { useState } from 'react'
import NumberedHeading from '../components/NumberedHeading'
import ScrollReveal from '../components/ScrollReveal'

interface Job {
  company: string
  role: string
  dates: string
  location: string
  bullets: string[]
}

const jobs: Job[] = [
  {
    company: 'Tekrata',
    role: 'AI Engineer',
    dates: 'Aug 2025 – Present',
    location: 'Santa Clara, CA (Client: RisRX)',
    bullets: [
      'Built an asynchronous Python/AWS (Lambda, S3, Bedrock) LLM pipeline using Claude to turn unstructured healthcare PDF invoices into validated JSON; multistep consensus checks caught and corrected table-parsing errors, reaching 99.2% accuracy.',
      'Shipped end-to-end features for a healthcare claims workflow: a Next.js frontend and Node.js REST APIs that automate patient claim submission and real-time status tracking, using Claude Code to seed data and testing.',
      'Led the decomposition of a legacy Go monolith into an interface-driven microservices framework so it could scale; AI-driven regression suites enforced 100% API contract parity and cut technical debt by 40%.',
    ],
  },
  {
    company: 'FlexGen',
    role: 'Software Engineering Intern',
    dates: 'May 2024 – May 2025',
    location: 'Durham, NC',
    bullets: [
      'Built event-driven Python/Kafka pipelines on Kubernetes for 1,000+ IoT devices, with Grafana for real-time anomaly detection — sustaining 99.9% data availability via staged CI/CD rollouts.',
      'Led a zero-downtime InfluxDB 1.8 to 2.6 migration with Terraform, refactoring Go services to Flux-based queries and improving query performance by 35%.',
    ],
  },
  {
    company: 'ElasticRun',
    role: 'Software Engineer II',
    dates: 'Nov 2021 – Aug 2023',
    location: 'Pune, India',
    bullets: [
      'Independently built a full-stack Python/VueJS ticketing platform end to end, replacing third-party SaaS vendors and saving $100,000 annually.',
      'Designed a high-availability Go/Kubernetes/Kafka backend for an e-commerce platform, adding gRPC and Redis caching to cut tail latency by 40% with 99.9% message delivery reliability.',
    ],
  },
  {
    company: 'Wow Labz',
    role: 'Junior Python Developer',
    dates: 'Jun 2021 – Nov 2021',
    location: 'Bengaluru, India',
    bullets: [
      'Built a greenfield multi-tenant Flask/MongoDB backend with JWT/OTP auth (AWS SNS/SES) and S3 storage for high-volume PDF/image data, improving request reliability by 85%.',
    ],
  },
  {
    company: 'MAQ Software',
    role: 'Software Engineer I',
    dates: 'Sep 2020 – Dec 2020',
    location: 'Mumbai, India (Client: Microsoft)',
    bullets: [
      'Automated enterprise data pipelines and analytics workflows using MSSQL and Python, designing relational data models that reduced manual reporting errors by 50%.',
    ],
  },
]

export default function ExperienceSection() {
  const [active, setActive] = useState(0)
  const job = jobs[active]

  return (
    <section
      id="experience"
      style={{
        padding: 'var(--section-padding) 0',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <div style={{ padding: '0 var(--page-padding)' }}>
        <NumberedHeading number="02" title="Where I've Worked" />

        <ScrollReveal className="flex flex-col sm:flex-row gap-0 sm:gap-6">
          {/* Tabs */}
          <div
            role="tablist"
            aria-orientation="vertical"
            className="flex sm:flex-col overflow-x-auto sm:overflow-visible no-scrollbar border-b sm:border-b-0 sm:border-l border-[var(--lightest-navy)] flex-shrink-0"
          >
            {jobs.map((j, i) => (
              <button
                key={j.company}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`relative text-left whitespace-nowrap px-5 py-3 text-nav transition-colors duration-200 bg-transparent cursor-pointer border-none ${
                  active === i ? 'text-[var(--green)]' : 'text-[var(--light-slate)] hover:text-[var(--green)] hover:bg-[var(--light-navy)]'
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-[2px] transition-opacity duration-200 ${
                    active === i ? 'bg-[var(--green)] opacity-100' : 'opacity-0'
                  } hidden sm:block`}
                />
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] transition-opacity duration-200 ${
                    active === i ? 'bg-[var(--green)] opacity-100' : 'opacity-0'
                  } sm:hidden`}
                />
                {j.company}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div key={active} className="pt-6 sm:pt-1 sm:pl-2 flex-1 min-w-0">
            <h3 className="text-[1.15rem] font-semibold text-[var(--lightest-slate)]">
              {job.role} <span className="text-[var(--green)]">@ {job.company}</span>
            </h3>
            <p className="font-mono text-[0.8rem] text-[var(--slate)] mt-1 mb-5">
              {job.dates} · {job.location}
            </p>
            <ul className="space-y-4">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-body">
                  <span className="text-[var(--green)] font-mono mt-1 flex-shrink-0">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
