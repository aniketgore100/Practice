import { useState } from 'react'
import { categories } from '../data/content'

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

// Bento grid of product categories: one large card, two stacked beside it, three along the bottom.
export default function CategoryCarousel() {
  const [open, setOpen] = useState(null) // tap-to-open on touch devices

  return (
    <section className="cats" id="products" aria-label="Product categories">
      <div className="container">
        <div className="section__head cats__head">
          {/* <p className="eyebrow">Product categories</p> */}
          <h2>Everything you need to <span className="grad">deploy anywhere.</span></h2>
        </div>

        <div className="bento">
          {categories.map((c, n) => (
            <a
              key={c.name}
              href="#"
              className={`bento__card bento__card--${n + 1} ${open === n ? 'is-open' : ''}`}
              onClick={(e) => { if (window.matchMedia('(hover: none)').matches && open !== n) { e.preventDefault(); setOpen(n) } }}
            >
              <img src={c.img} alt="" loading="lazy" className="bento__img" />
              <span className="bento__title">
                <span className="bento__name">{c.name}</span>
                <span className="bento__text">{c.text}</span>
              </span>
              <span className="bento__desc">
                <span>{c.desc}</span>
                <span className="bento__go">Explore <Arrow /></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
