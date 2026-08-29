import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { site } from '../data/site'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export function MobileMenu() {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex size-10 items-center justify-center md:hidden"
        >
          <Menu aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-paper/50" />
        <DialogPrimitive.Content className="mm-content fixed inset-0 z-[60] flex flex-col bg-paper px-6 pb-8 pt-5 outline-none">
          <DialogPrimitive.Title className="sr-only">Menu</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Primary site navigation
          </DialogPrimitive.Description>

          <div className="flex items-center justify-between">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em]">
              {site.wordmark}
            </span>
            <DialogPrimitive.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center"
              >
                <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
              </button>
            </DialogPrimitive.Close>
          </div>

          <nav
            aria-label="Mobile"
            className="mt-12 flex flex-1 flex-col justify-center"
          >
            {NAV.map((item, i) => (
              <DialogPrimitive.Close asChild key={item.href}>
                <a
                  href={item.href}
                  className="group flex items-baseline gap-5 border-b border-line py-5"
                >
                  <span className="u-figs font-display text-[13px] text-faint">
                    0{i + 1}
                  </span>
                  <span className="font-display text-[clamp(1.9rem,8vw,3rem)] font-light leading-[1.05] tracking-tight transition-[font-style] duration-300 group-hover:italic">
                    {item.label}
                  </span>
                </a>
              </DialogPrimitive.Close>
            ))}
          </nav>

          <div className="flex items-end justify-between">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-[#2f6b43] animate-pulse-dot"
              />
              <span className="u-label">{site.availability}</span>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="u-label flex items-center gap-1.5 text-ink"
            >
              Email
              <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={1.5} />
            </a>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}