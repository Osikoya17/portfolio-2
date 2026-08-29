import { useGsap, growLine } from '../lib/animations'
import { cn } from '../lib/utils'

interface SectionIntroProps {
  index: string
  label: string
  className?: string
}

export function SectionIntro({ index, label, className }: SectionIntroProps) {
  const ref = useGsap((api) => {
    const rule = api.query<HTMLElement>('[data-section-rule]')[0]
    if (rule) growLine(rule, rule)
  })

  return (
    <header
      ref={ref}
      className={cn(
        'mx-auto flex w-full max-w-[1500px] items-center gap-5 px-6 md:px-10',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="u-figs font-display text-[13px] italic text-faint"
      >
        {index}
      </span>
      <h2 className="u-label">{label}</h2>
      <span
        data-section-rule
        aria-hidden="true"
        className="hidden h-px flex-1 origin-left bg-line-deep md:block"
      />
    </header>
  )
}