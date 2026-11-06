import { useState } from 'react'
import { stack, industries, stats, segments, capabilities, footer } from '../data/content'
import { Logo } from './Header'

const YEAR = new Date().getFullYear()

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

export function Stack() {
  return (
    <section className="section stack">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">One ecosystem</p>
          <h2>Connected hardware. Integrated solutions. Built for deployment.</h2>
          <p>TickIoT designs, manufactures and integrates the technology that keeps critical operations connected, from 5G routers and antennas to voice, public safety, power and device management.</p>
        </div>
        <div className="stack__grid">
          {stack.map((s, i) => (
            <article key={s.tag} className="stack__card">
              <span className="stack__num">0{i + 1}</span>
              <span className="tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#" className="link">{s.link} <Arrow /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Industries() {
  const [active, setActive] = useState(null)
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Solutions</p>
          <h2>Built around the way you operate.</h2>
        </div>
        <div className={`sol ${active !== null ? 'has-open' : ''}`} onMouseLeave={() => setActive(null)}>
          {industries.map((c, n) => (
            <article
              key={c.key}
              className={`sol__card ${active === n ? 'is-open' : ''}`}
              style={{ '--g1': c.tone.split(',')[0], '--g2': c.tone.split(',')[1] }}
              tabIndex={0}
              onMouseEnter={() => setActive(n)}
              onFocus={() => setActive(n)}
              onClick={() => setActive(n)}
            >
              <svg className="sol__art" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon} /></svg>
              <h3 className="sol__title">{c.key}</h3>
              <div className="sol__info">
                <p className="sol__headline">{c.headline}</p>
                <ul>{c.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <div className="chips"><span>Recommended:</span>{c.products.map((p) => <b key={p}>{p}</b>)}</div>
                <a href="#" className="btn btn--primary">Explore {c.key}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Why() {
  return (
    <section className="why">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Why TickIoT</p>
          <h2>One partner. The complete connectivity stack.</h2>
        </div>
        <ol className="why__grid">
          {capabilities.map((c, n) => (
            <li key={c.title}>
              <span>0{n + 1}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Proof() {
  return (
    <section className="section proof">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Deployment proof</p>
          <h2>Connectivity already deployed in the field.</h2>
          <p>Supporting organizations across government, public safety, education, transportation and enterprise environments.</p>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </div>
        <div className="logos" aria-label="Customer logos placeholder">
          {segments.map((s) => <span key={s}>{s}</span>)}
        </div>
        <p className="proof__note">Customer logos and deployment map to be added from approved company materials.</p>
      </div>
    </section>
  )
}

export function OEM() {
  return (
    <section className="oem">
      <div className="container oem__grid">
        <a href="#" className="oem__card">
          <span className="tag">OEM / ODM</span>
          <h3>Need hardware that doesn't exist yet?</h3>
          <p>Custom hardware design, manufacturing and private label from the team that builds TickIoT products.</p>
          <span className="link">Build with us <Arrow /></span>
        </a>
        <a href="#" className="oem__card">
          <span className="tag">Services</span>
          <h3>Deployed, managed and supported.</h3>
          <p>Managed connectivity, UCaaS, PhoneMDM, installation and support, so your team can focus on operations.</p>
          <span className="link">Explore services <Arrow /></span>
        </a>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="cta" id="quote">
      <div className="container cta__inner">
        <h2>Planning your next deployment?</h2>
        <p>Tell us what you're trying to connect. We'll help you build the right solution.</p>
        <div className="hero__actions hero__actions--center">
          <a href="#" className="btn btn--primary btn--lg">Request a Quote</a>
          <a href="#" className="btn btn--ghost btn--lg">Talk to an Expert</a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>Connectivity built for the real world.</p>
          <a href="#quote" className="btn btn--primary">Request a Quote</a>
        </div>
        {footer.map((c) => (
          <div key={c.title}>
            <h4>{c.title}</h4>
            <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="container footer__bar">
        <span>© {YEAR} TickIoT. All rights reserved.</span>
        <span><a href="#">Privacy</a> · <a href="#">Terms</a></span>
      </div>
    </footer>
  )
}
