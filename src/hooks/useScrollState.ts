import { useEffect, useState } from 'react'

/**
 * Reports whether the page has been scrolled past `threshold` px.
 * Throttled with requestAnimationFrame so it stays cheap to run.
 */
export function useScrollState(threshold = 12) {
  const [past, setPast] = useState(
    () => typeof window !== 'undefined' && window.scrollY > threshold,
  )

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPast(window.scrollY > threshold))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [threshold])

  return past
}