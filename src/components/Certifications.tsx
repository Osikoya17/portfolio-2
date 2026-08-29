import { ArrowUpRight } from 'lucide-react'
import { useGsap, fadeUp } from '../lib/animations'
import { SectionIntro } from './SectionIntro'
import { certifications } from '../data/certifications'

export function Certifications() {
  const ref = useGsap((api) => {
    const root = api.query<HTMLElement>('.credentials-root')[0]
    if (root) {
      const targets = api.query<HTMLElement>('[data-reveal]')
      if (targets.length) fadeUp(targets, root, { stagger: 0.1 })
    }
  })

  return (
    <section id="credentials" className="mt-28 pt-4 md:mt-40">
      <div ref={ref} className="credentials-root">
        <SectionIntro index="6" label="Credentials" />

        <div className="mx-auto mt-12 max-w-[1500px] px-6 md:mt-16 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-16">
            {certifications.map((cert, i) => (
              <article
                key={cert.index}
                data-reveal
                className={i % 2 === 1 ? 'lg:mt-36' : ''}
              >
                <div className="flex items-center justify-between gap-6 border-t border-line pt-6">
                  <span className="u-figs u-label">
                    {cert.index} · {cert.organization}
                  </span>
                  <span className="flex items-center gap-2 border border-line-deep px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
                    <span
                      aria-hidden="true"
                      className="size-1 rounded-full bg-[#2f6b43]"
                    />
                    Verified
                  </span>
                </div>

                <h3 className="font-display mt-8 text-[clamp(2.6rem,5.2vw,4.6rem)] font-light leading-[0.98] tracking-[-0.02em]">
                  {cert.title}
                </h3>

                <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-muted">
                  {cert.description}
                </p>

                <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-b border-line pb-7">
                  {cert.tags.map((tag) => (
                    <li
                      key={tag}
                      className="u-label text-faint"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href={cert.credly}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em]"
                >
                  Verify on Credly
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}