import { useGsap, fadeUp } from '../lib/animations'
import { SectionIntro } from './SectionIntro'
import { skills } from '../data/skills'

const TOOLS = [
  { index: '01', name: 'JavaScript', meta: 'Language' },
  { index: '02', name: 'TypeScript', meta: 'Language' },
  { index: '03', name: 'React', meta: 'UI Library' },
  { index: '04', name: 'Next.js', meta: 'Framework' },
  { index: '05', name: 'Tailwind CSS', meta: 'Styling' },
  { index: '06', name: 'Node.js', meta: 'Runtime' },
  { index: '07', name: 'Express', meta: 'Backend' },
  { index: '08', name: 'MongoDB', meta: 'Database' },
  { index: '09', name: 'SQL', meta: 'Database' },
  { index: '10', name: 'Python', meta: 'Language' },
  { index: '11', name: 'Firebase', meta: 'Backend-as-a-Service' },
  { index: '12', name: 'Git', meta: 'Version Control' },
]

export function Toolkit() {
  const ref = useGsap((api) => {
    const root = api.query<HTMLElement>('.toolkit-root')[0]
    if (root) {
      const targets = api.query<HTMLElement>('[data-reveal]')
      if (targets.length) fadeUp(targets, root, { stagger: 0.04 })
    }
  })

  return (
    <section className="mt-28 pt-4 md:mt-40">
      <div ref={ref} className="toolkit-root">
        <SectionIntro index="3" label="My Toolkit" />

        <div className="mx-auto mt-12 grid grid-cols-1 gap-12 max-w-[1500px] px-6 md:mt-16 lg:grid-cols-12 lg:gap-x-10 md:px-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-display-xl text-[clamp(2.1rem,4.6vw,4.4rem)] font-light leading-[1.02] tracking-[-0.02em]">
                The tools I reach for to ship modern, performant products.
              </h2>
              <p className="mt-6 max-w-[40ch] font-sans text-[16px] leading-relaxed text-muted">
                An index of the technologies behind the work, kept honest and
                current.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul>
              {TOOLS.map((tool) => (
                <li
                  key={tool.index}
                  data-reveal
                  className="group flex items-baseline justify-between gap-6 border-b border-line py-4 transition-colors duration-300 hover:border-line-deep"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="u-figs u-label w-7 shrink-0 group-hover:text-ink">
                      {tool.index}
                    </span>
                    <span className="font-display text-[clamp(1.35rem,2.6vw,2.05rem)] font-light tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {tool.name}
                    </span>
                  </span>
                  <span className="u-label shrink-0">{tool.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          data-reveal
          className="mx-auto mt-16 flex max-w-375 flex-wrap gap-x-8 gap-y-3 px-6 md:px-10"
        >
          {skills.practices.map((practice, i) => (
            <span
              key={practice}
              className="flex items-center gap-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted"
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="size-1.5 border border-ink/40"
                />
              )}
              {practice}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}