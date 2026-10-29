export default function EmailSidebar() {
  return (
    <div
      className="hidden lg:flex fixed bottom-0 right-6 xl:right-10 flex-col items-center gap-6 z-30"
      style={{ width: '40px' }}
    >
      <a
        href="mailto:sachinkanth17@gmail.com"
        className="font-mono text-[0.8rem] tracking-[0.1em] text-[var(--light-slate)] hover:text-[var(--green)] hover:-translate-y-1 transition-all duration-300"
        style={{ writingMode: 'vertical-rl' }}
      >
        sachinkanth17@gmail.com
      </a>
      <div className="w-px h-24 bg-[var(--light-slate)]" />
    </div>
  )
}
