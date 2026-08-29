import { useGsap, fadeUp } from '../lib/animations'
import { SectionIntro } from './SectionIntro'
import { principles } from '../data/skills'

export function HowIWork() {
  const ref = useGsap((api) => {
    const root = api.query<HTMLElement>('.how-root')[0]
    if (root) {
      const targets = api.query<HTMLElement>('[data-reveal]')
      if (targets.length) fadeUp(targets, root, { stagger: 0.1 })
    }
  })

  return (
    <section className="mt-28 pt-4 md:mt-40">
      <div ref={ref} className="how-root">
        <SectionIntro index="4" label="How I Work" />

        <div className="mx-auto mt-12 max-w-[1500px] px-6 md:mt-16 md:px-10">
          <ul className="flex flex-col lg:flex-row">
            {principles.map((principle) => (
              <li
                key={principle.index}
                data-reveal
                className="flex flex-1 flex-col gap-5 border-b border-line py-10 last:border-b-0 lg:border-b-0 lg:border-r lg:border-t lg:py-0 lg:pb-12 lg:pr-12 lg:pt-14 lg:last:border-r-0 p-7"
              >
                <span className="flex items-center gap-4">
                  <span className="u-figs font-display text-[13px] italic text-faint">
                    {principle.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="size-1.5 border border-ink/50"
                  />
                </span>
                <h3 className="font-display  text-[clamp(1.5rem,3vw,2.4rem)] font-light leading-tight tracking-[-0.01em]">
                  {principle.title}
                </h3>
                <p className="max-w-[36ch] font-sans text-[15px] leading-relaxed text-muted">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}