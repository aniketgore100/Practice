export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__img" aria-hidden="true" />
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
          <a href="#products" className="btn btn--primary btn--lg">Explore Products</a>
          <a href="#quote" className="btn btn--ghost btn--lg">Talk to an Expert</a>
        </div>
      </div>
    </section>
  )
}
