import NumberedHeading from '../components/NumberedHeading'
import ScrollReveal from '../components/ScrollReveal'

const skills = [
  'Python & Go',
  'TypeScript / JavaScript',
  'LLM Pipelines & Agentic Workflows',
  'AWS (Lambda, S3, Bedrock)',
  'Kubernetes & Docker',
  'Next.js, React & Node.js',
  'Terraform & CI/CD',
  'Microservices & gRPC',
]

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: 'var(--section-padding) 0',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <div style={{ padding: '0 var(--page-padding)' }}>
        <NumberedHeading number="01" title="About Me" />

        <ScrollReveal className="max-w-[640px] space-y-4">
          <p className="text-body">
            I&apos;m an AI Engineer who likes problems that sit at the edge of what AI can be
            trusted to do on its own — where the interesting work is building the validation and
            consensus checks around a model call, not just the call itself.
          </p>
          <p className="text-body">
            Currently I&apos;m at <span className="text-[var(--lightest-slate)]">Tekrata</span>,
            building LLM pipelines that turn unstructured healthcare documents into validated
            data, alongside the Next.js and Node.js features that put that work in front of real
            users. Before that, I worked across the stack — IoT data pipelines and a zero-downtime
            database migration at FlexGen, a high-availability Go backend at ElasticRun, and
            production systems at Wow Labz and MAQ Software.
          </p>
          <p className="text-body">
            I hold an M.S. in Computer Science from North Carolina State University and a B.Tech
            from the Indian Institute of Information Technology, Pune.
          </p>
          <p className="text-body">Here are a few technologies I&apos;ve been working with recently:</p>
        </ScrollReveal>

        <ScrollReveal stagger={0.05} y={15} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-[520px] mt-4">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center gap-2 text-body text-[0.95rem]">
              <span className="text-[var(--green)] font-mono">▹</span>
              {skill}
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
