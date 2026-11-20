import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToHash } from '../lib/scroll'
import { productCategories, products } from '../data/content'
import { CTA } from '../components/Sections'

const Icon = ({ d, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
)
const Caret = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true"><path d={dir === 'prev' ? 'M10 3L5 8l5 5' : 'M6 3l5 5-5 5'} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
)
const Plus = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
)

const SLIDE_MS = 6000
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function CategoryCarousel({ onSelect }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = productCategories.length
  const go = (n) => setIndex((n + count) % count)

  useEffect(() => {
    if (paused || reduceMotion()) return
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), SLIDE_MS)
    return () => clearTimeout(t)
  }, [index, paused, count])

  return (
    <section
      className="pslider"
      aria-roledescription="carousel"
      aria-label="Product categories"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false) }}
    >
      <h1 className="sr-only">Products</h1>
      {productCategories.map((c, n) => {
        const items = products.filter((p) => p.category === c.slug)
        return (
          <div
            key={c.slug}
            className={`pslider__slide ${n === index ? 'is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${n + 1} of ${count}: ${c.label}`}
            inert={n !== index}
          >
            <img className="pslider__img" src={c.img} alt="" loading={n === 0 ? 'eager' : 'lazy'} />
            <div className="pslider__shade" aria-hidden="true" />
            <div className="container pslider__content">
              <p className="eyebrow">{String(n + 1).padStart(2, '0')} · {c.label}</p>
              <h2>{c.headline}</h2>
              <p className="pslider__blurb">{c.blurb}</p>
              <p className="pslider__list"><b>{items.length} products:</b> {items.map((p) => p.name).join(' · ')}</p>
              <div className="hero__actions">
                <a href={`#${c.slug}`} className="btn btn--primary btn--lg" onClick={(e) => { e.preventDefault(); onSelect(c.slug) }}>Explore {c.label}</a>
                <a href="#quote" className="btn btn--glass btn--lg">Request a Quote</a>
              </div>
            </div>
          </div>
        )
      })}

      <div className="container pslider__controls">
        <button className="pslider__arrow" aria-label="Previous category" onClick={() => go(index - 1)}><Caret dir="prev" /></button>
        <button className="pslider__arrow" aria-label="Next category" onClick={() => go(index + 1)}><Caret dir="next" /></button>
      </div>
    </section>
  )
}

// Compact spec-sheet tile: image, name and three key specs. The whole tile toggles the details panel.
function ProductTile({ p, open, onToggle }) {
  return (
    <article className={`ptile ${open ? 'is-open' : ''}`} id={p.id}>
      <button
        id={`${p.id}-btn`}
        className="ptile__hit"
        aria-expanded={open}
        aria-controls={`${p.id}-details`}
        onClick={onToggle}
      >
        <span className="ptile__media">
          {p.img ? <img src={p.img} alt="" loading="lazy" /> : <Icon d={p.icon} size={64} />}
          <span className="tag ptile__tag">{p.tag}</span>
          <span className="ptile__toggle" aria-hidden="true"><Plus /></span>
        </span>
        <span className="ptile__head">
          <span className="ptile__tagline">{p.tagline}</span>
          <span className="ptile__name">{p.name}</span>
        </span>
        <span className="ptile__specs">
          {p.specs.map(([value, label]) => (
            <span key={label} className="ptile__spec"><b>{value}</b><small>{label}</small></span>
          ))}
        </span>
        <span className="sr-only">{open ? 'Hide details' : 'Show details'}</span>
      </button>
    </article>
  )
}

// Full-width panel that opens directly under the tile's row (the grid's dense flow backfills the row).
function ProductDetails({ p, onClose }) {
  return (
    <div className="pdetail" id={`${p.id}-details`} role="region" aria-labelledby={`${p.id}-title`}>
      <button className="pdetail__close" aria-label={`Close ${p.name} details`} onClick={onClose}>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
      </button>

      <div className="pdetail__media">
        {p.img ? <img src={p.img} alt={p.name} loading="lazy" /> : <Icon d={p.icon} size={96} />}
      </div>

      <div className="pdetail__body">
        <p className="eyebrow">{p.tagline}</p>
        <h3 id={`${p.id}-title`}>{p.name}</h3>
        <p className="pdetail__text">{p.text}</p>
        <ul className="pdetail__features">
          {p.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
        {p.meta && (
          <dl className="pdetail__meta">
            {p.meta.map((m) => (
              <div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd></div>
            ))}
          </dl>
        )}
        <div className="pdetail__actions">
          <a href="#quote" className="btn btn--primary">Request a Quote</a>
          <a href="#quote" className="btn btn--ghost">Talk to an Expert</a>
        </div>
      </div>

      {p.specTable && (
        <div className="pdetail__wide spec-table-wrap">
          <table className="spec-table">
            <thead>
              <tr><th>Model</th>{p.specTable.columns.map((c) => <th key={c}>{c}</th>)}</tr>
            </thead>
            <tbody>
              {p.specTable.rows.map((r) => (
                <tr key={r.label}>
                  <th>{r.label}</th>
                  {r.values.map((v, i) => <td key={i}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {p.plans && (
        <div className="pdetail__wide plans">
          {p.plans.map((pl) => (
            <div key={pl.name} className={`plan ${pl.featured ? 'is-featured' : ''}`}>
              <b>{pl.name}</b>
              <div className="plan__price">{pl.price}<span>{pl.period}</span></div>
              <ul>{pl.features.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProductsPage() {
  const location = useLocation()
  const [active, setActive] = useState('all')
  const [openId, setOpenId] = useState(null)
  // A fresh object per request, so asking for the same target twice still scrolls.
  // Set alongside any filter change, so the scroll runs after the target section has rendered.
  const [scrollReq, setScrollReq] = useState(null)
  const revealPanel = useRef(false)

  useEffect(() => { if (scrollReq) scrollToHash(`#${scrollReq.id}`) }, [scrollReq])

  const select = (slug) => { setActive(slug); setScrollReq({ id: slug }) }

  // Deep links (/products#rc500, footer and nav links): widen the filter if it hides the target,
  // open the product's details, then scroll. Keyed on location.key so re-clicking the same link works.
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1))
    if (!id) return
    const product = products.find((p) => p.id === id)
    const category = product ? product.category : productCategories.find((c) => c.slug === id)?.slug
    // oxlint-disable-next-line react/set-state-in-effect -- syncing page state from the router's URL hash
    setActive((cur) => (cur === 'all' || cur === category ? cur : 'all'))
    if (product) setOpenId(id)
    setScrollReq({ id })
  }, [location.key, location.hash])

  const toggle = (id) => {
    revealPanel.current = openId !== id
    setOpenId(openId === id ? null : id)
  }
  const close = () => {
    const id = openId
    setOpenId(null)
    document.getElementById(`${id}-btn`)?.focus()
  }

  // After a tile is clicked, bring its panel into view (scroll-margin keeps it clear of the fixed header).
  useEffect(() => {
    if (!revealPanel.current || !openId) return
    revealPanel.current = false
    document.getElementById(`${openId}-details`)?.scrollIntoView({ block: 'nearest', behavior: reduceMotion() ? 'auto' : 'smooth' })
  }, [openId])

  useEffect(() => {
    if (!openId) return
    const onKey = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  const visibleCategories = productCategories.filter((c) => active === 'all' || active === c.slug)

  return (
    <>
      <CategoryCarousel onSelect={select} />

      <nav className="cat-tabs" aria-label="Filter products by category">
        <div className="container cat-tabs__row">
          <a href="#" className={active === 'all' ? 'is-active' : ''} onClick={(e) => { e.preventDefault(); setActive('all') }}>All products</a>
          {productCategories.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className={active === c.slug ? 'is-active' : ''} onClick={(e) => { e.preventDefault(); select(c.slug) }}>{c.label}</a>
          ))}
        </div>
      </nav>

      {visibleCategories.map((c) => (
        <section key={c.slug} className="pcat" id={c.slug}>
          <div className="container">
            <div className="pcat__head">
              <h2>{c.label}</h2>
              <p>{c.blurb}</p>
            </div>
            <div className="ptile__grid">
              {products.filter((p) => p.category === c.slug).flatMap((p) => {
                const open = openId === p.id
                const tile = <ProductTile key={p.id} p={p} open={open} onToggle={() => toggle(p.id)} />
                return open ? [tile, <ProductDetails key={`${p.id}-details`} p={p} onClose={close} />] : [tile]
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="pcat" id="custom">
        <div className="container pcat__head pcat__head--center">
          <p className="eyebrow">Custom Products</p>
          <h2>Don&rsquo;t see the exact fit? We design it.</h2>
          <p>Our hardware design and manufacturing team builds custom and private-label devices around your deployment requirements.</p>
          <div className="hero__actions hero__actions--center">
            <a href="#quote" className="btn btn--primary btn--lg">Talk to an Expert</a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
