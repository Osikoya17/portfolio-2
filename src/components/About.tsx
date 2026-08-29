import { useGsap, fadeUp, clipReveal } from '../lib/animations'
import { SectionIntro } from './SectionIntro'
import { site } from '../data/site'
import { skills } from '../data/skills'

export function About() {
  const ref = useGsap((api) => {
    const root = api.query<HTMLElement>('.about-root')[0]
    const portraitFrame = api.query<HTMLElement>('.about-portrait')[0]
    if (root) {
      const targets = api.query<HTMLElement>('[data-reveal]')
      if (targets.length) fadeUp(targets, root, { stagger: 0.09 })
    }
    if (portraitFrame && root) clipReveal([portraitFrame], root, { duration: 1.1 })
  })

  return (
    <section id="about" className="mt-28 pt-4 md:mt-40">
      <div ref={ref} className="about-root">
        <SectionIntro index="2" label="About" />

        <div className="mx-auto mt-12 max-w-[1500px] px-6 md:mt-16 md:px-10">
          <h2 className="font-display-xl max-w-[16em] text-[clamp(2.1rem,5.4vw,5rem)] font-light leading-[1.02] tracking-[-0.02em]">
            I&apos;m a software engineer who loves turning ideas into reliable
            products.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-10 md:mt-24">
            <div className="lg:col-span-4">
              <figure className="about-portrait aspect-[4/5] overflow-hidden border border-line-deep bg-line/40">
                <img
                  src="/images/profile.jpg"
                  alt="Portrait of Osikoya Olaoluwa David"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale-[0.15]"
                />
              </figure>
              <figcaption className="mt-3 flex items-center justify-between">
                <span className="u-label">{site.displayName}</span>
                <span className="u-label">{site.role}</span>
              </figcaption>
            </div>

            <div className="flex flex-col gap-10 lg:col-span-5 lg:col-start-6 lg:gap-12">
              <div data-reveal className="flex flex-col gap-5">
                <p className="max-w-[60ch] text-[16px] font-sans leading-relaxed text-muted md:text-lg md:leading-relaxed">
                  I design and build web applications end to end, with a soft
                  spot for clean architecture, thoughtful UX, and the small
                  details that make a product a pleasure to use.
                </p>
                <p className="max-w-[60ch] text-[16px] leading-relaxed text-muted md:text-lg md:leading-relaxed">
                  Frontend is where I spend most of my time, but I enjoy
                  understanding the full product: from interface and
                  interaction to APIs, data, deployment, and everything in
                  between.
                </p>
              </div>

              <div data-reveal className="flex items-end justify-between gap-8 border-t border-line pt-8">
                <div className="flex flex-col gap-4">
                  <span className="u-label">Capabilities</span>
                  <ul>
                    {skills.disciplines.map((label) => (
                      <li
                        key={label}
                        className="flex items-center gap-4 border-b border-line py-3 text-[15px] font-semibold uppercase tracking-[0.08em]"
                      >
                        <span
                          aria-hidden="true"
                          className="size-1.5 shrink-0 border border-ink/50"
                        />
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex flex-col gap-3">
                  <span className="u-label">Based in</span>
                  <p className="font-display text-[clamp(1.7rem,3.4vw,2.8rem)] font-light leading-none tracking-tight">
                    Nigeria
                  </p>
                  <p className="u-label">WAT · UTC+1</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}