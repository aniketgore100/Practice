import { Link, Navigate, useParams } from 'react-router-dom'
import { products, productCategories, productPages } from '../data/content'
import { CTA } from '../components/Sections'

const Icon = ({ d, size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
)
const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

// Collapsible section built on <details>, so it opens/closes and stays accessible without extra state.
function Collapsible({ title, count, defaultOpen = false, children }) {
  return (
    <details className="pd-collapse" open={defaultOpen}>
      <summary>
        <span>{title}{count ? <small>{count}</small> : null}</span>
        <span className="pd-collapse__icon" aria-hidden="true" />
      </summary>
      <div className="pd-collapse__body">{children}</div>
    </details>
  )
}

// Full product page: /products/:id (only products with an entry in productPages).
export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const page = productPages[id]
  if (!product || !page) return <Navigate to={product ? `/products#${id}` : '/products'} replace />
  const category = productCategories.find((c) => c.slug === product.category)

  return (
    <>
      <section className="pd-hero">
        <div className="container">
          <nav className="pd-crumbs" aria-label="Breadcrumb">
            <Link to="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <Link to={`/products#${category.slug}`}>{category.label}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <header className="pd-hero__head">
            <p className="eyebrow">{product.tagline}</p>
            <h1>{product.name} <span className="tag">{product.tag}</span></h1>
            <p className="pd-hero__headline">{page.headline}</p>
          </header>

          {/* Image first, with the description and its key features beside it */}
          <div className="pd-hero__grid">
            <div className="pd-hero__media">
              <img src={page.img} alt={`${product.name} rear panel`} />
            </div>
            <div className="pd-hero__info">
              <p className="pd-hero__desc">{page.description}</p>
              <h2 className="pd-features__title">Key Features</h2>
              <ul className="pd-features">
                {page.features.map((f) => (
                  <li key={f.label}><Icon d={f.icon} size={20} /><span>{f.label}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pd-section">
        <div className="container">
          <div className="pd-section__head">
            <h2>Solutions &amp; Accessories</h2>
            <p>Everything that completes an {product.name} deployment.</p>
          </div>
          <ul className="pd-acc">
            {page.accessories.map((a) => {
              const body = (
                <>
                  <span className="pd-acc__media"><img src={a.img} alt="" loading="lazy" /></span>
                  <span className="pd-acc__name">{a.name}</span>
                  {a.to && <span className="pd-acc__link">View <Arrow /></span>}
                </>
              )
              return (
                <li key={a.name}>
                  {a.to ? <Link to={a.to} className="pd-acc__card">{body}</Link> : <div className="pd-acc__card">{body}</div>}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="pd-section pd-section--details">
        <div className="container pd-details">
          <Collapsible title="Use Cases" count={page.useCases.length} defaultOpen>
            <ul className="pd-icons pd-icons--uses">
              {page.useCases.map((u) => (
                <li key={u.label}><Icon d={u.icon} /><span>{u.label}</span></li>
              ))}
            </ul>
          </Collapsible>

          <Collapsible title="Ports & Interfaces" count={page.ports.length}>
            <dl className="pd-ports">
              {page.ports.map((p) => (
                <div key={p.label}><dt>{p.label}</dt><dd>{p.value}</dd></div>
              ))}
            </dl>
          </Collapsible>
        </div>
      </section>

      <CTA />
    </>
  )
}
