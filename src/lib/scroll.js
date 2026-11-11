import Lenis from 'lenis'

let lenis = null
const HEADER_OFFSET = -72

// Start Lenis smooth scrolling (skipped for users who prefer reduced motion).
// Also routes in-page #anchor clicks through Lenis so they glide instead of jumping.
export function initScroll() {
  const onClick = (e) => {
    const a = e.target.closest?.('a[href^="#"]')
    if (!a) return
    const hash = a.getAttribute('href')
    if (hash === '#') { e.preventDefault(); return } // placeholder links: don't jump to top
    if (document.querySelector(hash)) { e.preventDefault(); scrollToHash(hash) }
  }
  document.addEventListener('click', onClick)

  let raf = 0
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    lenis = new Lenis({ duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3), smoothWheel: true })
    const loop = (time) => { lenis?.raf(time); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
  }
  return () => {
    document.removeEventListener('click', onClick)
    cancelAnimationFrame(raf)
    lenis?.destroy()
    lenis = null
  }
}

export function scrollToHash(hash) {
  const el = document.querySelector(hash)
  if (!el) return
  // force: a menu link is tapped while scrolling is still locked; Lenis ignores scrollTo when stopped unless forced
  if (lenis) { lenis.start(); lenis.scrollTo(el, { offset: HEADER_OFFSET, duration: 1.5, force: true }) }
  else el.scrollIntoView({ behavior: 'smooth' })
}

// Freeze page scrolling while the mobile menu is open.
export function setScrollLocked(locked) {
  if (lenis) (locked ? lenis.stop() : lenis.start())
  document.body.style.overflow = locked ? 'hidden' : ''
}
