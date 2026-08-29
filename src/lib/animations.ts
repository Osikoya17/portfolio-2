import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------------- scoped lifecycle hook ---------------- */

export interface ScopedContext {
  /** Query elements inside the hook's scope element. */
  query: <T extends Element = Element>(selector: string) => T[]
  scope: HTMLElement | null
}

/**
 * Wrap all GSAP work in a scoped context that is reverted on
 * unmount, so tweens and ScrollTriggers never leak.
 */
export function useGsap(
  draw: (api: ScopedContext) => void | (() => void),
  deps: React.DependencyList = [],
) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const scope = ref.current
    const ctx = gsap.context((self) => void self, ref)
    const baseQuery = (selector: string): Element[] => gsap.utils.toArray(selector, scope)
    const api: ScopedContext = {
      query: baseQuery as ScopedContext['query'],
      scope,
    }
    const result = draw(api)
    return () => {
      if (typeof result === 'function') result()
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}

const toArray = gsap.utils.toArray

/* ---------------- movement primitives ---------------- */

interface RevealOpts {
  y?: number
  x?: number
  duration?: number
  ease?: string
  stagger?: number
  delay?: number
  start?: string
}

/** Screen reveal: fade + rise, fired once when the trigger enters. */
export function fadeUp(
  targets: gsap.TweenTarget,
  selector: string | Element,
  { y = 26, duration = 0.9, ease = 'power2.out', stagger = 0.08, start = 'top 85%', delay = 0 }: RevealOpts = {},
) {
  const reduce = prefersReducedMotion()
  gsap.set(targets, { autoAlpha: 0, y: reduce ? 0 : y, x: 0 })
  const tween = gsap.to(targets, {
    autoAlpha: 1,
    y: 0,
    duration: reduce ? 0.5 : duration,
    ease,
    stagger,
    delay,
    paused: true,
  })
  ScrollTrigger.create({
    trigger: selector,
    start,
    once: true,
    onEnter: () => tween.play(),
  })
}

/** Grow a thin rule / index marker from the left. */
export function growLine(
  targets: gsap.TweenTarget,
  selector: string | Element,
  { duration = 1.2, ease = 'power3.inOut', stagger = 0.12, start = 'top 88%' }: RevealOpts = {},
) {
  if (prefersReducedMotion()) {
    gsap.set(targets, { scaleX: 1 })
    return
  }
  gsap.set(targets, { scaleX: 0, transformOrigin: 'left center' })
  const tween = gsap.to(targets, {
    scaleX: 1,
    duration,
    ease,
    stagger,
    paused: true,
  })
  ScrollTrigger.create({
    trigger: selector,
    start,
    once: true,
    onEnter: () => tween.play(),
  })
}

/** Clip reveal: unwrap from the left, used for rows and index bars. */
export function clipReveal(
  targets: gsap.TweenTarget,
  selector: string | Element,
  { duration = 1.1, ease = 'power3.inOut', stagger = 0.1, start = 'top 88%' }: RevealOpts = {},
) {
  const reduce = prefersReducedMotion()
  gsap.set(targets, { clipPath: reduce ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)' })
  if (reduce) return
  const tween = gsap.to(targets, {
    clipPath: 'inset(0% 0% 0% 0%)',
    duration,
    ease,
    stagger,
    paused: true,
  })
  ScrollTrigger.create({
    trigger: selector,
    start,
    once: true,
    onEnter: () => tween.play(),
  })
}

/** Split an element's text into per-word reveal masks. */
export function splitToWords(el: HTMLElement) {
  if (prefersReducedMotion()) return null
  const text = (el.textContent ?? '').trim().replace(/\s+/g, ' ')
  if (!text) return null
  el.setAttribute('aria-label', text)
  el.textContent = ''
  const words = text.split(' ')
  const inners: HTMLElement[] = []
  words.forEach((word, i) => {
    const mask = document.createElement('span')
    mask.style.display = 'inline-block'
    mask.style.overflow = 'hidden'
    mask.style.verticalAlign = 'top'
    mask.style.paddingRight = '0.26em'
    mask.style.paddingBottom = '0.12em'
    const inner = document.createElement('span')
    inner.style.display = 'inline-block'
    inner.textContent = i === 0 ? word : ` ${word}`
    mask.appendChild(inner)
    el.appendChild(mask)
    inners.push(inner)
  })
  return inners
}

export function revealWords(
  el: HTMLElement,
  selector: string | Element,
  { duration = 1, ease = 'power4.out', stagger = 0.045, start = 'top 88%' }: RevealOpts = {},
) {
  const inners = splitToWords(el)
  if (!inners) return
  gsap.set(inners, { yPercent: 118 })
  const tween = gsap.to(inners, {
    yPercent: 0,
    duration,
    ease,
    stagger,
    paused: true,
    force3D: true,
  })
  ScrollTrigger.create({
    trigger: selector,
    start,
    once: true,
    onEnter: () => tween.play(),
  })
}

/**
 * Adds `.is-scrolled` to the header once the page passes `threshold`.
 * CSS handles the visual transition; nothing re-renders per scroll tick.
 */
export function headerState(header: HTMLElement, threshold = 32) {
  const st = ScrollTrigger.create({
    start: threshold,
    end: 'max',
    onUpdate: () => header.classList.toggle('is-scrolled', window.scrollY > threshold),
  })
  return () => st.kill()
}

/* ---------------- imagery ---------------- */

/**
 * Parallax for `[data-parallax]` wrappers: the inner img drifts
 * vertically relative to the wrapper while it crosses the viewport.
 */
export function imageParallax(scope: HTMLElement, amount = 10) {
  if (prefersReducedMotion()) return
  toArray<HTMLElement>('[data-parallax]', scope).forEach((wrapper) => {
    const img = wrapper.querySelector('img')
    if (!img) return
    gsap.set(img, { scale: 1.24 })
    gsap.fromTo(
      img,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
  })
}

/**
 * Cursor-led drift for elements matched by `selector` inside `scope`.
 * Uses a damped ticker so it stays smooth and cheap.
 */
export function cursorParallax(
  scope: HTMLElement,
  selector: string,
  strength = 24,
) {
  if (prefersReducedMotion()) return () => {}
  const els = toArray<HTMLElement>(selector, scope)
  if (!els.length) return () => {}
  let tx = 0
  let ty = 0
  const onMove = (e: PointerEvent) => {
    tx = (e.clientX / window.innerWidth - 0.5) * 2
    ty = (e.clientY / window.innerHeight - 0.5) * 2
  }
  scope.addEventListener('pointermove', onMove, { passive: true })
  const tick = () => {
    els.forEach((el, i) => {
      const s = strength * (i === 0 ? 0.6 : 1)
      gsap.set(el, {
        x: tx * s,
        y: ty * s * 0.6,
        ease: 'power3.out',
        duration: 0.6,
        overwrite: 'auto',
      })
    })
  }
  gsap.ticker.add(tick)
  return () => {
    scope.removeEventListener('pointermove', onMove)
    gsap.ticker.remove(tick)
  }
}