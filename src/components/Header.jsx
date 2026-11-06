import { useEffect, useState } from 'react'
import { nav } from '../data/content'

export function Logo() {
  return (
    <a href="/" className="logo" aria-label="TickIoT home">
      <img src="/logo.png" alt="TickIoT" className="logo__img" />
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

export default function Header() {
  const [open, setOpen] = useState(null)
  const [sub, setSub] = useState(0)
  const [mobile, setMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const show = (i) => { setOpen(i); setSub(firstWithLinks(nav[i])) }
  const menu = open !== null ? nav[open] : null
  const active = menu?.items[sub]

  return (
    <header className={`header ${scrolled || open !== null || mobile ? 'is-solid' : ''}`} onMouseLeave={() => setOpen(null)}>
      <div className="container header__bar">
        <Logo />
        <nav className={`nav ${mobile ? 'nav--open' : ''}`} aria-label="Main">
          {nav.map((item, i) => (
            <div key={item.label} className="nav__item" onMouseEnter={() => show(i)}>
              <button
                className={`nav__btn ${open === i ? 'is-active' : ''}`}
                aria-expanded={open === i}
                onClick={() => (open === i ? setOpen(null) : show(i))}
                onFocus={() => show(i)}
              >
                {item.label}
              </button>
              {open === i && (
                <div className="mega">
                  <div className="container mega__inner">
                    <ul className="mega__list">
                      {item.items.map((it, n) => (
                        <li key={it.label}>
                          <a
                            href="#"
                            className={`mega__row ${n === sub ? 'is-active' : ''}`}
                            onMouseEnter={() => setSub(n)}
                            onFocus={() => setSub(n)}
                            onClick={(e) => { if (it.links) { e.preventDefault(); setSub(n) } }}
                          >
                            <span>{it.label}</span>
                            {it.links && <Chevron />}
                          </a>
                        </li>
                      ))}
                    </ul>
                    {active?.links && (
                      <div className="mega__panel">
                        <h4>{active.label}</h4>
                        <ul>
                          {active.links.map((l) => (
                            <li key={l.label}>
                              <a href="#">{l.label}{l.ext && <External />}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <a href="#quote" className="btn btn--primary header__cta">Request a Quote</a>
        <button className="burger" aria-label="Menu" aria-expanded={mobile} onClick={() => setMobile(!mobile)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
