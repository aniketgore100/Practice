import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/content'

const SLIDE_MS = 6000
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const Caret = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true"><path d={dir === 'prev' ? 'M10 3L5 8l5 5' : 'M6 3l5 5-5 5'} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

// Static hero text over an auto-advancing, crossfading product image carousel.
export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = heroSlides.length
  const go = (n) => setIndex((n + count) % count)

  useEffect(() => {
    if (paused || reduceMotion()) return
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), SLIDE_MS)
    return () => clearTimeout(t)
  }, [index, paused, count])

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false) }}
    >
      <div className="hero__slides" aria-roledescription="carousel" aria-label="tickIoT products">
        {heroSlides.map((s, n) => (
          <img
            key={s.img}
            className={`hero__slide ${n === index ? 'is-active' : ''}`}
            src={s.img}
            alt={s.alt}
            aria-hidden={n !== index}
            loading={n === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="container hero__inner">
        <h1>Connected Hardware. Integrated Solutions. Built for Deployment.</h1>
        <p className="hero__lead">
          tickIoT designs, manufactures, integrates, and supports mission-critical connectivity and
          communication solutions. From 5G networking and public safety systems to enterprise voice,
          cloud management, and field deployment, we deliver reliable technology built for real-world operations.
        </p>
        <p className="hero__tagline">Practical. Valuable. Secure.</p>
        <div className="hero__actions">
          <Link to="/products" className="btn btn--primary btn--lg">Explore Products</Link>
          <a href="#quote" className="btn btn--ghost btn--lg">Talk to an Expert</a>
        </div>
      </div>
      <div className="container hero__controls">
        <button className="hero__arrow" aria-label="Previous image" onClick={() => go(index - 1)}><Caret dir="prev" /></button>
        <button className="hero__arrow" aria-label="Next image" onClick={() => go(index + 1)}><Caret dir="next" /></button>
      </div>
    </section>
  )
}
