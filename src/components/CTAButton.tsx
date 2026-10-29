import { Link } from 'react-router-dom'

interface CTAButtonProps {
  children: React.ReactNode
  href?: string
  to?: string
  onClick?: () => void
  className?: string
}

export default function CTAButton({
  children,
  href,
  to,
  onClick,
  className = '',
}: CTAButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center text-cta rounded
    border border-[var(--green)] text-[var(--green)] bg-transparent
    px-7 py-4 transition-all duration-300 cursor-pointer
    hover:bg-[var(--green-tint)] hover:-translate-y-1
    ${className}
  `

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {children}
    </button>
  )
}
