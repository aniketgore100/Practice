export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__img" aria-hidden="true" />
      <div className="hero__shade" aria-hidden="true" />
      <div className="container hero__inner">
        <h1>Connectivity built for the real world.</h1>
        <p className="hero__lead">
          Enterprise-grade cellular hardware, software and integrated solutions for vehicles,
          public safety, remote sites and connected operations.
        </p>
        <div className="hero__actions">
          <a href="#products" className="btn btn--primary btn--lg">Explore Products</a>
          <a href="#quote" className="btn btn--ghost btn--lg">Talk to an Expert</a>
        </div>
      </div>
    </section>
  )
}
