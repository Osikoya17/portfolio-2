import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'

const LINKS = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'Email', href: `mailto:${site.email}` },
]

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line md:mt-36">
      <div className="mx-auto max-w-[1500px] px-6 pb-10 pt-10 md:px-10 md:pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-display text-[clamp(1.6rem,4vw,2.6rem)] font-light leading-none tracking-tight">
              {site.displayName}
            </p>
            <p className="u-label mt-5">Software Engineer</p>
            {/* <p className="mt-1 text-[13px] text-muted">
              {site.location} · {site.timezone}
            </p> */}
          </div>
          <div className="flex flex-col items-start gap-3 md:col-span-3 md:col-start-10 md:items-end">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors duration-300 hover:text-ink"
              >
                {link.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-[12px] text-faint md:flex-row md:items-center md:justify-between">
          <p>© 2026 Olaoluwa David Osikoya. All rights reserved.</p>
          {/* <p className="uppercase tracking-[0.14em]">
            {site.location} · WAT
          </p> */}
        </div>
      </div>
    </footer>
  )
}