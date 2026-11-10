import { useState } from 'react'
import { steps, services, industries, projects, capabilities, footer, contact } from '../data/content'
import { Logo } from './Header'

const YEAR = new Date().getFullYear()

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

const Icon = ({ d, size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
)

export function Steps() {
  return (
    <section className="steps">
      <div className="container">
        <h2>One Partner. Complete Technology Solutions.</h2>
        <ul className="steps__grid">
          {steps.map((s) => (
            <li key={s.title}>
              <span className="steps__icon"><Icon d={s.icon} /></span>
              <b>{s.title}</b>
            </li>
          ))}
        </ul>
        <p>From initial concept through deployment and ongoing operations.</p>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="section svc" id="services">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Complete Technology Solutions &amp; Services</p>
          <h2>One Partner. End-to-End Technology Solutions.</h2>
          <p>From concept to deployment and beyond, tickIoT delivers integrated technology solutions that simplify connectivity, improve operational efficiency, and support mission-critical infrastructure. We combine hardware engineering, wireless communications, systems integration, field deployment, and managed services to provide reliable, scalable solutions.</p>
        </div>
        <div className="svc__grid">
          {services.map((s) => (
            <a key={s.title} href="#" className="svc__card">
              <div className="svc__media">
                {s.img ? <img src={s.img} alt="" loading="lazy" /> : <Icon d={s.icon} size={64} />}
              </div>
              <div className="svc__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="link">{s.link} <Arrow /></span>
              </div>
            </a>
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
          <p className="eyebrow">Industries</p>
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
          <p className="eyebrow">Why tickIoT</p>
          <h2>One partner. From design to ongoing support.</h2>
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
        <div className="proj__grid">
          {projects.map((p) => (
            <article key={p.title} className="proj__card">
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="cta" id="quote">
      <div className="container cta__inner">
        <h2>Whether you need a single device, a customized hardware platform, or a fully managed deployment, tickIoT can help.</h2>
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
          <p>Connected Hardware. Integrated Solutions. Built for Deployment.</p>
          <div className="footer__ctas">
            <a href="#quote" className="btn btn--primary">Request a Quote</a>
            <a href="#quote" className="btn btn--ghost">Talk to an Expert</a>
          </div>
          <ul className="footer__contact">
            <li><b>Contact Sales</b></li>
            {contact.email && <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>}
            {contact.phone && <li><a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>{contact.phone}</a></li>}
          </ul>
        </div>
        {footer.map((c) => (
          <div key={c.title}>
            <h4>{c.title}</h4>
            <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="container footer__bar">
        <span>© {YEAR} tickIoT. All rights reserved.</span>
        <span><a href="#">Privacy</a> · <a href="#">Terms</a></span>
      </div>
    </footer>
  )
}
