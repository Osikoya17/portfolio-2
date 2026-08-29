import { useGsap, fadeUp } from '../lib/animations'

export function Currently() {
  const ref = useGsap((api) => {
    const root = api.query<HTMLElement>('.current-root')[0]
    if (root) {
      const targets = api.query<HTMLElement>('[data-reveal]')
      if (targets.length) fadeUp(targets, root, { stagger: 0.1 })
    }
  })

  return (
    <section className="mt-28 pt-4 md:mt-40">
      <div ref={ref} className="current-root">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-10 border-y border-line px-6 py-12 md:flex-row md:items-center md:px-10 md:py-16">
          <div data-reveal className="flex flex-col gap-3">
            <span className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-[#2f6b43] animate-pulse-dot"
              />
              <span className="u-label">Active</span>
            </span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-light leading-none tracking-[-0.02em]">
              Currently
            </h2>
          </div>

          <div data-reveal className="md:max-w-[46ch] font-sans md:text-right">
            <p className="u-label">Exploring &amp; building</p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted md:text-lg">
              Going deeper on 3D on the web, motion design, and polished
              full-stack applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}