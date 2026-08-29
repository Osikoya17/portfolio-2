import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { prefersReducedMotion } from '../lib/animations'

interface LoaderProps {
  onDone: () => void
}

/** Full-screen boot loader: a hairline progress bar with an index
    counter, framed like the rest of the page. Fades out once it
    reaches 100 and hands off to the page. */
export function Loader({ onDone }: LoaderProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = prefersReducedMotion()
    const root = rootRef.current!
    const context = gsap.context(() => {
      const counter = root.querySelector<HTMLElement>('[data-loader-count]')
      const fill = root.querySelector<HTMLElement>('[data-loader-fill]')
      const state = { value: 0 }

      const timeline = gsap.timeline({
        onComplete() {
          gsap.to(root, {
            autoAlpha: 0,
            duration: reduce ? 0.3 : 0.7,
            ease: 'power3.inOut',
            onComplete: onDone,
          })
        },
      })

      timeline.to(state, {
        value: 100,
        duration: reduce ? 0.2 : 1.4,
        ease: 'power2.inOut',
        onUpdate() {
          const label = String(Math.round(state.value)).padStart(2, '0')
          if (counter) counter.textContent = label
          if (fill) fill.style.transform = `scaleX(${state.value / 100})`
        },
      })
    }, rootRef)

    return () => context.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Loading"
      className="loader-root fixed inset-0 z-[100] grid place-items-center bg-paper"
    >
      <div className="flex flex-col items-center gap-7">
        <span
          data-loader-count
          aria-hidden="true"
          className="u-figs font-display text-[clamp(3rem,8vw,5.5rem)] font-light italic leading-none text-ink"
        >
          00
        </span>

        <div
          aria-hidden="true"
          className="h-[2px] w-[min(320px,70vw)] overflow-hidden bg-line-deep"
        >
          <div
            data-loader-fill
            className="h-full w-full origin-left scale-x-0 bg-ember"
          />
        </div>

        <p className="u-label flex items-center gap-2.5 text-faint">
          Loading
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-ember animate-pulse-dot"
          />
        </p>
      </div>
    </div>
  )
}