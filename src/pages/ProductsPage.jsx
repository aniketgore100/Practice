import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { scrollToHash } from '../lib/scroll'
import { productCategories, products, productPages } from '../data/content'
import { CTA } from '../components/Sections'

const Icon = ({ d, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
)
const Plus = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
)
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Product card: inset image, name and a one-line summary. A product with its own page links straight
// to it; any other card toggles the details panel under its row.
function ProductTile({ p, open, onToggle }) {
  const content = (
    <>
      <span className={`ptile__media ${p.imgFit === 'contain' ? 'is-contain' : ''}`}>
        {p.img ? <img src={p.img} alt="" loading="lazy" /> : <Icon d={p.icon} size={64} />}
      </span>
      <span className="ptile__name">{p.name}</span>
      <span className="ptile__summary">{p.summary}</span>
    </>
  )

  if (productPages[p.id]) {
    return (
      <article className="ptile" id={p.id}>
        <Link to={`/products/${p.id}`} className="ptile__hit">
          {content}
          <span className="ptile__more">
            View details
            <span className="ptile__toggle" aria-hidden="true"><Arrow /></span>
          </span>
        </Link>
      </article>
    )
  }

  return (
    <article className={`ptile ${open ? 'is-open' : ''}`} id={p.id}>
      <button
        id={`${p.id}-btn`}
        className="ptile__hit"
        aria-expanded={open}
        aria-controls={`${p.id}-details`}
        onClick={onToggle}
      >
        {content}
        <span className="ptile__more">
          {open ? 'Hide details' : 'View details'}
          <span className="ptile__toggle" aria-hidden="true"><Plus /></span>
        </span>
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

      <div className={`pdetail__media ${p.imgFit === 'contain' ? 'is-contain' : ''}`}>
        {p.img ? <img src={p.img} alt={p.name} loading="lazy" /> : <Icon d={p.icon} size={96} />}
      </div>

      <div className="pdetail__body">
        <p className="eyebrow">{p.tagline}</p>
        <h3 id={`${p.id}-title`}>{p.name} <span className="tag">{p.tag}</span></h3>
        <dl className="pdetail__specs">
          {p.specs.map(([value, label]) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
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
          <a href="#quote" className="btn btn--primary">Talk to an Expert</a>        </div>
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

// Sticky category sidebar: jumps to a category and highlights the one being scrolled through.
// On narrow screens it becomes a sticky horizontal strip that keeps the current item in view.
function CategoryNav({ current, onJump }) {
  const listRef = useRef(null)

  useEffect(() => {
    const list = listRef.current
    const link = list?.querySelector('.is-active')
    if (!link || list.scrollWidth <= list.clientWidth) return
    list.scrollTo({ left: link.offsetLeft - 16, behavior: reduceMotion() ? 'auto' : 'smooth' })
  }, [current])

  return (
    <aside className="pnav">
      <nav aria-label="Product categories">
        <p className="pnav__title">Categories</p>
        <ul ref={listRef}>
          {productCategories.map((c) => (
            <li key={c.slug}>
              <a
                href={`#${c.slug}`}
                className={current === c.slug ? 'is-active' : ''}
                aria-current={current === c.slug ? 'location' : undefined}
                onClick={(e) => { e.preventDefault(); onJump(c.slug) }}
              >
                <span>{c.label}</span>
                <span className="pnav__count">{products.filter((p) => p.category === c.slug).length}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default function ProductsPage() {
  const location = useLocation()
  const [current, setCurrent] = useState(productCategories[0].slug)
  const [openId, setOpenId] = useState(null)
  const revealPanel = useRef(false)

  const jump = (slug) => scrollToHash(`#${slug}`)

  // Scrollspy: the category whose section crosses a band near the top of the viewport is "current".
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setCurrent(e.target.id) })
    }, { rootMargin: '-128px 0px -55% 0px' })
    productCategories.forEach((c) => {
      const el = document.getElementById(c.slug)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Deep links (/products#rc500, footer and nav links): open the product's details, then scroll.
  // Keyed on location.key so re-clicking the same link works.
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1))
    if (!id) return
    // oxlint-disable-next-line react/set-state-in-effect -- syncing page state from the router's URL hash
    if (products.some((p) => p.id === id) && !productPages[id]) setOpenId(id)
    scrollToHash(`#${id}`)
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

  return (
    <>
      <h1 className="sr-only">Products</h1>

      <div className="container plist">
        <CategoryNav current={current} onJump={jump} />
        <div className="plist__main">
          {productCategories.map((c) => (
            <section key={c.slug} className="pcat" id={c.slug}>
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
            </section>
          ))}
        </div>
      </div>

      <section className="pcat pcat--custom" id="custom">
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
