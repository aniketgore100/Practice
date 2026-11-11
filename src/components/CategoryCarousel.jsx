import { categories } from '../data/content'

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

// "Explore Our Products": 3 x 2 grid. Each card = product image, category name, one-line benefit, View Products link.
export default function CategoryCarousel() {
  return (
    <section className="cats" id="products" aria-label="Products">
      <div className="container">
        <div className="section__head cats__head">
          <h2>Explore Our Products</h2>
          <p>Find the right technology for your next deployment.</p>
        </div>
        <div className="prod__grid">
          {categories.map((c) => (
            <a key={c.name} href="#" className="prod__card">
              <div className="prod__media"><img src={c.img} alt={c.name} loading="lazy" /></div>
              <div className="prod__body">
                <h3>{c.name}</h3>
                <p>{c.text}</p>
                <span className="prod__link">View Products <Arrow /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
