const HEADER_OFFSET = -72

// Routes in-page #anchor clicks through a smooth native scroll (skipped for
// users who prefer reduced motion, who get the browser's instant jump).
export function initScroll() {
  const onClick = (e) => {
    const a = e.target.closest?.('a[href^="#"]')
    if (!a) return
    const hash = a.getAttribute('href')
    if (hash === '#') { e.preventDefault(); return } // placeholder links: don't jump to top
    if (document.querySelector(hash)) { e.preventDefault(); scrollToHash(hash) }
  }
  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}

export function scrollToHash(hash) {
  const el = document.querySelector(hash)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' })
}

// Freeze page scrolling while the mobile menu is open.
export function setScrollLocked(locked) {
  document.body.style.overflow = locked ? 'hidden' : ''
}
