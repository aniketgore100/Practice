const HEADER_HEIGHT = 72

// Looks up by id rather than querySelector, so ids like "5g-connectivity" (not valid CSS selectors) work.
const byHash = (hash) => document.getElementById(decodeURIComponent(hash.slice(1)))

// Routes in-page #anchor clicks through a smooth native scroll (skipped for
// users who prefer reduced motion, who get the browser's instant jump).
export function initScroll() {
  const onClick = (e) => {
    if (e.defaultPrevented) return // a component already handled this click
    const a = e.target.closest?.('a[href^="#"]')
    if (!a) return
    const hash = a.getAttribute('href')
    if (hash === '#') { e.preventDefault(); return } // placeholder links: don't jump to top
    if (byHash(hash)) { e.preventDefault(); scrollToHash(hash) }
  }
  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}

// Lands the target just below the fixed header, or below its CSS scroll-margin-top when it sets one
// (e.g. product sections, which also clear the sticky category strip on small screens).
export function scrollToHash(hash) {
  const el = byHash(hash)
  if (!el) return
  const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || HEADER_HEIGHT
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' })
}

// Freeze page scrolling while the mobile menu is open.
export function setScrollLocked(locked) {
  document.body.style.overflow = locked ? 'hidden' : ''
}
