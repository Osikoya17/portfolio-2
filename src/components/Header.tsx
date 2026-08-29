import { headerState } from '../lib/animations'
import { useGsap } from '../lib/animations'
import { site } from '../data/site'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const headerRef = useGsap((api) => {
    const header = api.query<HTMLElement>('.site-header')[0]
    if (header) headerState(header)
  })

  return (
    <>
      <header
        ref={headerRef}
        className="site-header fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between gap-6 px-6 md:px-10 lg:h-20">
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label={`${site.displayName}, back to top`}
          >
            <span
              aria-hidden="true"
              className="grid size-7 place-items-center rounded-full border border-line-deep font-display text-[13px] leading-none"
            >
              O.
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em]">
              {site.wordmark}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted transition-colors duration-300 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <div className="hidden items-center gap-2.5 lg:flex">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-[#2f6b43] animate-pulse-dot"
              />
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                Available for opportunities
              </span>
            </div>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  )
}