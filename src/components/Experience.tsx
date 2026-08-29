import { useGsap, clipReveal } from '../lib/animations'
import { SectionIntro } from './SectionIntro'
import { experience } from '../data/experience'

export function Experience() {
  const ref = useGsap((api) => {
    const root = api.query<HTMLElement>('.experience-root')[0]
    if (root) {
      const rows = api.query<HTMLElement>('[data-row]')
      if (rows.length) clipReveal(rows, root, { stagger: 0.14 })
    }
  })

  return (
    <section id="experience" className="mt-28 pt-4 md:mt-40">
      <div ref={ref} className="experience-root">
        <SectionIntro index="5" label="Experience" />

        <div className="mx-auto mt-12 max-w-[1500px] px-6 md:mt-16 md:px-10">
          {/* column header */}
          <div className="u-label hidden grid-cols-12 gap-x-4 border-b border-line-deep pb-3 lg:grid">
            <span className="col-span-1">No.</span>
            <span className="col-span-4">Role</span>
            <span className="col-span-3">Company</span>
            <span className="col-span-2">Period</span>
            <span className="col-span-2 text-right">Tools</span>
          </div>

          <ol className="border-t border-line lg:border-t-0">
            {experience.map((item) => (
              <li
                key={item.index}
                data-row
                className="group border-b border-line py-8 transition-colors duration-300 lg:py-9"
              >
                <div className="grid grid-cols-12 items-baseline gap-x-4">
                  <span className="u-figs font-display col-span-2 text-[13px] italic text-faint lg:col-span-1">
                    {item.index}
                  </span>
                  <h3 className="font-display col-span-10 text-[clamp(1.35rem,2.6vw,2rem)] font-light tracking-[-0.01em] transition-[font-style] duration-300 group-hover:italic lg:col-span-4">
                    {item.role}
                  </h3>
                  <p className="col-span-10 col-start-3 mt-3 text-[15px] font-medium tracking-tight lg:col-span-3 lg:col-start-6 lg:mt-0">
                    {item.organization}
                  </p>
                  <p className="u-figs u-label col-span-5 col-start-3 mt-2 lg:col-span-2 lg:col-start-9 lg:mt-0">
                    {item.period}
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-12 gap-x-4 lg:mt-8">
                  <p className="col-span-10 col-start-3 max-w-[72ch] font-sans text-[15px] leading-relaxed text-muted lg:col-span-9 lg:col-start-2 lg:max-w-none">
                    {item.detail}
                  </p>

                  <ul className="col-span-10 col-start-3 mt-4 flex flex-wrap gap-x-4 gap-y-1.5 lg:col-span-2 lg:col-start-11 lg:mt-0 lg:flex-col lg:items-end lg:gap-y-2">
                    {item.stack.map((tech, i) => (
                      <li
                        key={tech}
                        className="u-label flex items-center gap-4 text-faint"
                      >
                        {i > 0 && (
                          <span aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-ink/30 lg:hidden" />
                        )}
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}