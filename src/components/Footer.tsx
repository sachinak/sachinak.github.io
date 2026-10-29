export default function Footer() {
  return (
    <footer style={{ padding: '24px var(--page-padding) 40px' }}>
      <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-4">
        <div className="flex lg:hidden items-center gap-6 text-[var(--light-slate)]">
          <a
            href="https://github.com/sachinak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--green)] transition-colors duration-300 text-nav"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sachinkanth/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--green)] transition-colors duration-300 text-nav"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sachinkanth17@gmail.com"
            className="hover:text-[var(--green)] transition-colors duration-300 text-nav"
          >
            Email
          </a>
        </div>
        <p className="font-mono text-[0.75rem] text-[var(--slate)] text-center">
          Built by Sachin Kanth with React, TypeScript, and Claude Code
        </p>
      </div>
    </footer>
  )
}
