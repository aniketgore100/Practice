import { Link } from 'react-router-dom'
import { steps, services, industries, whyItems, proofStats, projects, footer, contact, customerLogos, partnerLogos } from '../data/content'
import { Logo } from './Header'

const YEAR = new Date().getFullYear()

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

const Icon = ({ d, size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
)

// Infinite right-to-left logo strip. The rail holds two identical halves and slides by one half per loop.
// `repeat` copies the set inside each half so a short list still fills the width; copies are hidden from screen readers.
function LogoStrip({ title, logos, repeat = 1, duration, className = '' }) {
  const half = Array.from({ length: repeat }, () => logos).flat()
  return (
    <section className={`trusted ${className}`} aria-label={title}>
      <div className="container">
        <h2 className="trusted__head">{title}</h2>
        <div className="trusted__track">
          <ul className="trusted__rail" style={duration ? { animationDuration: duration } : undefined}>
            {[...half, ...half].map((c, n) => {
              const copy = n >= logos.length
              return (
                <li key={`${c.name}-${n}`} aria-hidden={copy || undefined}>
                  <img src={c.img} alt={copy ? '' : c.name} loading="lazy" style={c.h ? { '--h': `${c.h}px` } : undefined} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function TrustedBy() {
  return <LogoStrip title="Brought internet to" logos={customerLogos} />
}

// Seven logos: repeated twice per half so the strip stays full; a shorter loop keeps the same speed as the customer strip.
export function Partners() {
  return <LogoStrip title="Our Technology Partners" logos={partnerLogos} repeat={2} duration="34s" className="trusted--partners" />
}

export function Steps() {
  return (
    <section className="steps">
      <div className="container">
        <h2>One Partner. Complete Technology Solutions.</h2>
        <ul className="steps__grid">
          {steps.map((s) => (
            <li key={s.title}>
              <span className="steps__icon">
                {s.img ? <span className="steps__mask" style={{ '--icon': `url("${s.img}")` }} aria-hidden="true" /> : <Icon d={s.icon} />}
              </span>
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

// Solutions by Industry: 3 x 2 photo cards. Cards without a photo yet show the industry icon.
export function Industries() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section__head">
          <h2>Solutions by Industry</h2>
          <p>Connectivity built for the places your operations run.</p>
        </div>
        <div className="ind__grid">
          {industries.map((c) => (
            <Link key={c.key} to={c.to} className="ind__card">
              <div className="ind__media">
                {c.img ? <img src={c.img} alt="" loading="lazy" /> : <Icon d={c.icon} size={56} />}
              </div>
              <div className="ind__body">
                <h3>{c.key}</h3>
                <p>{c.text}</p>
                <span className="link">{c.link} <Arrow /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why tickIoT: plain 3 x 2 icon grid (no cards) so it reads differently from the card sections around it.
export function Why() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <div className="section__head">
          <h2>Why tickIoT</h2>
          <p>20+ years of wireless expertise, from first design to ongoing support.</p>
        </div>
        <ul className="why__grid">
          {whyItems.map((w) => (
            <li key={w.title}>
              <span className="why__icon"><Icon d={w.icon} size={40} /></span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// Proven in the Field: verified stats, then featured deployments with links to the products used.
export function Proof() {
  const stats = proofStats.filter((s) => s.value)
  return (
    <section className="section proof" id="proof">
      <div className="container">
        <div className="section__head">
          <h2>Proven in the Field</h2>
          <p>tickIoT technology at work in transit, public safety, smart city and education.</p>
        </div>
        {stats.length > 0 && (
          <dl className="proof__stats">
            {stats.map((s) => (
              <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
            ))}
          </dl>
        )}
        <div className="proj__grid">
          {projects.map((p) => (
            <article key={p.title} className="proj__card">
              <div className="proj__media">
                {p.img ? <img src={p.img} alt="" loading="lazy" /> : <Icon d={p.icon} size={44} />}
              </div>
              <div className="proj__body">
                <p className="proj__tag">{p.tag}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <p className="proj__products">
                  <span>Products used</span>
                  {p.products.map((x) => <Link key={x.label} to={x.to}>{x.label}</Link>)}
                </p>
                {p.caseStudy && <a href={p.caseStudy} className="link">Read the case study <Arrow /></a>}
              </div>
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
          <a href="#" className="btn btn--primary btn--lg">Talk to an Expert</a>
        </div>
      </div>
    </section>
  )
}

const tel = (n) => `tel:${n.replace(/[^+\d]/g, '')}`
const external = { target: '_blank', rel: 'noopener noreferrer' }
// "a · b · c", skipping empty entries
const joined = (items) => items.filter(Boolean).flatMap((el, i) => (i ? [<span key={`sep${i}`} aria-hidden="true"> · </span>, el] : [el]))

function FooterLink({ l }) {
  if (l.href) return <a href={l.href} {...external}>{l.label}</a>
  if (!l.to) return <a href="#">{l.label}</a>
  if (l.to.startsWith('#')) return <a href={l.to}>{l.label}</a>
  return <Link to={l.to}>{l.label}</Link>
}

export function Footer() {
  const sales = joined([
    contact.salesPhone && <a key="phone" href={tel(contact.salesPhone)}>{contact.salesPhone}</a>,
    contact.salesEmail && <a key="email" href={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</a>,
  ])
  const support = joined([
    contact.supportUrl && <a key="url" href={contact.supportUrl} {...external}>{contact.supportUrl.replace(/^https?:\/\//, '')}</a>,
    contact.supportPhone && <a key="phone" href={tel(contact.supportPhone)}>{contact.supportPhone}</a>,
  ])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p>Connected Hardware. Integrated Solutions. Built for Deployment.</p>
          </div>
          <div className="footer__ctas">
            <a href="#quote" className="btn btn--primary">Talk to an Expert</a>
          </div>
        </div>

        <nav className="footer__grid" aria-label="Footer">
          {footer.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              <ul>{c.links.map((l) => <li key={l.label}><FooterLink l={l} /></li>)}</ul>
            </div>
          ))}
        </nav>

        {(sales.length > 0 || support.length > 0 || contact.address) && (
          <address className="footer__contact">
            <p>
              {sales.length > 0 && <span><b>Sales:</b> {sales}</span>}
              {support.length > 0 && <span><b>Support:</b> {support}</span>}
            </p>
            {contact.address && <p>{contact.address}</p>}
          </address>
        )}

        <div className="footer__bar">
          <span>© {YEAR} tickIoT Inc. All rights reserved. <a href="#">Privacy Policy</a> · <a href="#">Terms &amp; Conditions</a></span>
          {contact.linkedin && <a href={contact.linkedin} className="footer__social" {...external}>LinkedIn</a>}
        </div>
      </div>
    </footer>
  )
}
