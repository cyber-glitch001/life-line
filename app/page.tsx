const resources = [
  { label: "Talk to someone", detail: "Connect with a trained listener", icon: "01" },
  { label: "Find local care", detail: "Explore support in your area", icon: "02" },
  { label: "Make a plan", detail: "Take the next step at your pace", icon: "03" },
]

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Life Line home"><span className="brand-mark">+</span> life line</a>
        <div className="nav-links"><a href="#resources">Resources</a><a href="#about">About</a></div>
        <a className="nav-action" href="#resources">Get support <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Support, without the noise</p>
          <h1>A clearer path<br /><em>forward.</em></h1>
          <p className="intro">Whatever today feels like, you don&apos;t have to navigate it alone. Life Line connects you with practical, human support—one step at a time.</p>
          <a className="primary-button" href="#resources">Find your next step <span aria-hidden="true">→</span></a>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="signal"><span /><span /><span /></div>
          <p>you are<br /><strong>here</strong></p>
        </div>
      </section>

      <section className="resources" id="resources">
        <div className="section-heading"><p className="eyebrow">Start where you are</p><h2>Small steps count.</h2></div>
        <div className="resource-grid">
          {resources.map((resource) => <a className="resource-card" href="#about" key={resource.icon}><span className="card-number">{resource.icon}</span><span><strong>{resource.label}</strong><small>{resource.detail}</small></span><span className="card-arrow" aria-hidden="true">↗</span></a>)}
        </div>
      </section>

      <footer id="about"><span>Life Line</span><span>Here when you need a way through.</span><span>© 2026</span></footer>
    </main>
  )
}
