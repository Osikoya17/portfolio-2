import gsap from 'gsap'
import { site } from '../data/site'
import { useGsap, cursorParallax, splitToWords } from '../lib/animations'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Hero() {
  const reduced = useReducedMotion()

  const heroRef = useGsap((api) => {
    if (reduced) return
    const steps = api.query<HTMLElement>('[data-hero-step]')
    const headline = api.query<HTMLElement>('.hero-headline')[0]
    if (headline) {
      const inners = splitToWords(headline)
      if (inners) {
        gsap.set(inners, { yPercent: 118 })
        gsap.to(inners, {
          yPercent: 0,
          duration: 1.15,
          ease: 'power4.out',
          stagger: 0.06,
          delay: 0.45,
        })
      }
    }
    let delay = 0.15
    steps.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          delay,
          clearProps: 'all',
        },
      )
      delay += 0.11
    })
    const media = api.query<HTMLElement>('.hero-media')[0]
    const figure = api.query<HTMLElement>('.hero-figure')[0]
    if (media && figure) {
      gsap.fromTo(
        figure,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power3.inOut', delay, clearProps: 'all' },
      )
      const cursorCleanup = cursorParallax(media, '.hero-float', 22)
      return () => cursorCleanup()
    }
  })

  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div ref={heroRef} className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 md:gap-x-10">
          {/* masthead row */}
          <div className="md:col-span-6">
            <p className="kicker u-label" data-hero-step>
              {site.role}
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 md:mt-0 md:justify-end">
             
            </div>
          </div>

          {/* headline */}
          <h1
            data-hero-step
            className="hero-headline font-display-xl mt-14 w-full text-[clamp(2.6rem,8vw,7.4rem)] font-light leading-[0.98] tracking-[-0.02em] md:col-span-11 md:mt-20"
          >
            Building modern digital experiences with code, clarity, and{' '}
            <span className="italic text-ember">intention</span>.
          </h1>

          {/* support + CTAs */}
          <div className="mt-10 md:col-span-5 md:mt-16 md:pr-8" data-hero-step>
            <p className="max-w-[48ch] text-[17px] font-sans leading-relaxed text-muted md:text-xl md:leading-relaxed">
              {site.heroSupport}
            </p>
          </div>

          {/* <div
            className="mt-12 flex flex-wrap items-start gap-x-12 gap-y-6 md:col-span-8 md:col-start-10 md:mt-16 md:flex-col md:items-end md:gap-6"
            data-hero-step
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em]"
            >
              View selected work
              <ArrowDown
                aria-hidden="true"
                className="size-3.5 transition-transform duration-500 group-hover:translate-y-0.5"
                strokeWidth={1.75}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors duration-300 hover:text-ink"
            >
              Get in touch
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-2 left-0 h-px w-full bg-ink/20"
              />
            </a>
          </div> */}
        </div>

        {/* front page media */}
        {/* <div className="mt-16 md:mt-24" data-hero-step>
          <div className="grid md:grid-cols-12 md:items-end md:gap-x-10">
            <div className="md:col-span-4">
              <p className="max-w-[30ch] text-[15px] leading-relaxed text-muted">
                The opening spread. A recreation of{' '}
                <span className="smallcaps">Zentry</span>, rebuilt with scaled
                type, layered motion and smooth 3D transitions.
              </p>
            </div>
            <div ref={mediaRef} className="hero-media md:col-span-8 md:col-start-6">
              <figure className="hero-figure aspect-[4/3] overflow-hidden border border-line-deep bg-line/40 lg:aspect-[10/7]">
                <div data-parallax className="hero-float h-full w-full overflow-hidden">
                  <img
                    src={prelude.image}
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full scale-[1.15] object-cover"
                  />
                </div>
                <figcaption className="sr-only">{prelude.alt}</figcaption>
              </figure>
              <p className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <span className="u-label">
                  <span className="mr-2 inline-block h-px w-8 bg-ink/40 align-middle" />
                  Front page · {prelude.brand}
                </span>
                <span className="u-figs u-label">{prelude.urlLabel}</span>
              </p>
            </div>
          </div>
        </div> */}

        {/* bottom masthead */}
        <div
          className="mt-16 hidden items-center justify-between border-t border-line py-5 md:flex md:mt-20"
          data-hero-step
        >
          <p className="u-label">{site.wordmark} · Portfolio</p>
          <p className="u-label">{site.location} · WAT · UTC+1</p>
          <span className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="relative block h-9 w-px overflow-hidden bg-line-deep"
            >
              <span className="scroll-cue absolute left-0 top-0 block h-1/2 w-px bg-ink" />
            </span>
            <span className="u-label">Scroll</span>
          </span>
        </div>
      </div>
    </section>
  )
}