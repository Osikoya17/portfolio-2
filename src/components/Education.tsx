import { useGsap, clipReveal } from '../lib/animations'
import { education } from '../data/education'

export function Education() {
  const ref = useGsap((api) => {
    const root = api.query<HTMLElement>('.education-root')[0]
    if (root) {
      const rows = api.query<HTMLElement>('[data-row]')
      if (rows.length) clipReveal(rows, root, { stagger: 0.12, duration: 0.9 })
    }
  })

  return (
    <div ref={ref} className="education-root mt-24 pt-4 md:mt-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <p className="u-label border-t border-line pt-8">Education</p>

        <ol className="mt-10 border-t border-line">
          {education.map((item) => (
            <li
              key={item.index}
              data-row
              className="border-b border-line py-7"
            >
              <div className="grid grid-cols-12 items-baseline gap-x-4">
                <span className="u-figs font-display col-span-2 text-[12px] italic text-faint">
                  {item.index}
                </span>
                <div className="col-span-10">
                  <h3 className="font-display text-[clamp(1.2rem,2.2vw,1.7rem)] font-light tracking-[-0.01em]">
                    {item.degree}
                    {item.note && (
                      <span className="ml-3 align-middle text-[12px] italic text-faint">
                        {item.note}
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-[14px] tracking-tight text-muted">
                    {item.institution}
                  </p>
                </div>
                <p className="u-figs u-label col-span-10 col-start-3 mt-3 lg:col-span-2 lg:col-start-11 lg:mt-0 lg:text-right">
                  {item.period}
                </p>
              </div>
              {item.detail && (
                <div className="mt-4 grid grid-cols-12 gap-x-4">
                  <p className="col-span-10 col-start-3 max-w-[68ch] text-[14px] leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}