import { useEffect, useRef, useState } from 'react'
import { nav } from '../data/content'
import { scrollToHash, setScrollLocked } from '../lib/scroll'

export function Logo() {
  return (
    <a href="/" className="logo" aria-label="tickIoT home">
      <img src="/logo.png" alt="tickIoT" className="logo__img" />
    </a>
  )
}

const Chevron = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
)
const External = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M8 2h4v4M12 2L6.5 7.5M10 8.5V11a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h2.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

const firstWithLinks = (menu) => Math.max(0, menu.items.findIndex((it) => it.links))

// Sections that already carry their own quote CTA: the header button steps aside while they are on screen.
const CTA_SECTIONS = ['.hero', '#quote', '.footer']

export default function Header() {
  const [open, setOpen] = useState(null) // top-level item whose menu is showing
  const [shown, setShown] = useState(0)  // last menu shown, kept so content stays put while it fades out
  const [sub, setSub] = useState(0)
  const [mobile, setMobile] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [ctaHidden, setCtaHidden] = useState(true)
  const headerRef = useRef(null)

  // Mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 960px)')
    const apply = () => { setIsMobile(mq.matches); if (!mq.matches) { setMobile(false); setOpen(null) } }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  // Contextual quote button: hidden while the hero, closing CTA or footer is visible
  useEffect(() => {
    const els = CTA_SECTIONS.map((s) => document.querySelector(s)).filter(Boolean)
    const visible = new Set()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)))
      setCtaHidden(visible.size > 0)
    }, { rootMargin: '-80px 0px 0px 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Lock page scroll while the mobile menu is open; close on Escape / outside tap
  useEffect(() => {
    setScrollLocked(mobile)
    return () => setScrollLocked(false)
  }, [mobile])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(null); setMobile(false) } }
    const onDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) { setOpen(null); setMobile(false) }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown) }
  }, [])

  const show = (i) => { setOpen(i); setShown(i); setSub(firstWithLinks(nav[i])) }
  const close = () => { setOpen(null); setMobile(false); setScrollLocked(false) } // unlock right away so the tapped link can scroll
  const toggleMobile = () => {
    if (mobile) return close()
    setMobile(true)
    show(open ?? 0)
  }
  const goTo = (item) => { if (item.section) { scrollToHash(`#${item.section}`); close() } }

  const menu = nav[shown]
  const active = menu?.items[sub]
  const menuOpen = isMobile ? mobile : open !== null

  return (
    <header
      ref={headerRef}
      className={`header ${open !== null || mobile ? 'is-open' : ''}`}
      onMouseLeave={() => { if (!isMobile) setOpen(null) }}
    >
      <div className="container header__bar">
        <Logo />

        <div className={`header__panel ${mobile ? 'is-open' : ''}`} data-lenis-prevent>
          <nav className="nav" aria-label="Main">
            {nav.map((item, i) => item.href ? (
              <div key={item.label} className="nav__item" onMouseEnter={() => { if (!isMobile) setOpen(null) }}>
                <a href={item.href} className="nav__btn nav__link" onClick={close}>{item.label}</a>
              </div>
            ) : (
              <div key={item.label} className="nav__item" onMouseEnter={() => { if (!isMobile) show(i) }}>
                <button
                  className={`nav__btn ${open === i ? 'is-active' : ''}`}
                  aria-expanded={open === i}
                  onClick={() => (isMobile ? show(i) : goTo(item))}
                  onFocus={() => show(i)}
                >
                  <span>{item.label}</span>
                  {isMobile && <Chevron />}
                </button>
              </div>
            ))}
          </nav>

          {/* Secondary menu: a panel under the bar on desktop, a pane beside the primary list on mobile */}
          <div className={`mega ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
            <div className="container mega__inner">
              <ul className="mega__list">
                {isMobile && menu.section && (
                  <li>
                    <a href={`#${menu.section}`} className="mega__row mega__row--go" onClick={close}>Go to {menu.label}</a>
                  </li>
                )}
                {menu.items.map((it, n) => (
                  <li key={it.label}>
                    <a
                      href="#"
                      className={`mega__row ${n === sub ? 'is-active' : ''}`}
                      onMouseEnter={() => { if (!isMobile) setSub(n) }}
                      onFocus={() => setSub(n)}
                      onClick={(e) => { if (it.links) { e.preventDefault(); setSub(n) } else close() }}
                    >
                      <span>{it.label}</span>
                      {it.links && <Chevron />}
                    </a>
                  </li>
                ))}
              </ul>
              {active?.links && (
                <div className="mega__panel" key={`${shown}-${sub}`}>
                  <h4>{active.label}</h4>
                  <ul>
                    {active.links.map((l) => (
                      <li key={l.label}>
                        <a href="#" onClick={close}>{l.label}{l.ext && <External />}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <a href="#quote" className="btn btn--primary header__mobile-cta" onClick={close}>Request a Quote</a>
        </div>

        <a href="#quote" className={`btn btn--primary header__cta ${ctaHidden ? 'is-hidden' : ''}`} tabIndex={ctaHidden ? -1 : 0}>Request a Quote</a>
        <button className={`burger ${mobile ? 'is-open' : ''}`} aria-label="Menu" aria-expanded={mobile} onClick={toggleMobile}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
