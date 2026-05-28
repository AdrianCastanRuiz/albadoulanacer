import { Link } from 'react-router-dom'
import './Home.css'

const testimonials = [
  {
    text: "Dulce Origen transformó mi experiencia de parto. Me sentí acompañada, segura y empoderada en cada momento.",
    name: "Laura M.",
    role: "Mamá de Sofía, 8 meses"
  },
  {
    text: "El apoyo en el postparto fue fundamental. Pasar de la incertidumbre a la confianza fue posible gracias a su equipo.",
    name: "Marta R.",
    role: "Mamá de Lucas, 1 año"
  },
  {
    text: "Las clases de preparación al parto me dieron las herramientas que necesitaba. Recomiendo Dulce Origen a todas las futuras mamás.",
    name: "Carmen V.",
    role: "Mamá de Lola y Pau"
  }
]

const highlights = [
  {
    icon: "❀",
    title: "Embarazo consciente",
    text: "Acompañamiento personalizado durante todo el proceso gestacional con enfoque holístico."
  },
  {
    icon: "✦",
    title: "Parto respetado",
    text: "Preparación para un parto activo y consciente que respete tus deseos y necesidades."
  },
  {
    icon: "◌",
    title: "Postparto amoroso",
    text: "Apoyo integral en las semanas más intensas: lactancia, recuperación y vínculo."
  },
  {
    icon: "⌘",
    title: "Crianza con apego",
    text: "Herramientas y comunidad para criar con seguridad, amor y confianza en ti misma."
  }
]

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
        </div>
        <div className="hero__content">
          <p className="section-tag" style={{ animationDelay: '0.1s' }}>Maternidad · Parto · Postparto</p>
          <h1 className="hero__title animate-fadeup" style={{ animationDelay: '0.2s' }}>
            El comienzo<br />
            <em>más hermoso</em><br />
            de tu vida
          </h1>
          <p className="hero__subtitle animate-fadeup" style={{ animationDelay: '0.35s' }}>
            Te acompaño con cariño y profesionalidad en cada etapa de tu camino hacia la maternidad.
            Porque este momento merece toda la atención del mundo.
          </p>
          <div className="hero__actions animate-fadeup" style={{ animationDelay: '0.5s' }}>
            <Link to="/servicios" className="btn-primary">Servicios</Link>
            <Link to="/contacto" className="btn-outline">Habla conmigo</Link>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-wrap">
            <div className="hero__image-decoration" />
            <div className="hero__image-placeholder">
              <div className="hero__image-inner">
                <span>🌸</span>
                <p>Tu foto aquí</p>
              </div>
            </div>
          </div>
          <div className="hero__badge hero__badge--1">
            <span className="hero__badge-number">+500</span>
            <span className="hero__badge-label">familias acompañadas</span>
          </div>
          <div className="hero__badge hero__badge--2">
            <span className="hero__badge-number">12</span>
            <span className="hero__badge-label">años de experiencia</span>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div className="highlights__inner">
          <div className="highlights__header">
            <p className="section-tag">Lo que ofrecemos</p>
            <h2>Un acompañamiento completo<br /><em>para cada etapa</em></h2>
          </div>
          <div className="highlights__grid">
            {highlights.map((item, i) => (
              <div key={i} className="highlight-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="highlight-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to="/servicios" className="highlight-card__link">
                  Saber más →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About band */}
      <section className="about-band">
        <div className="about-band__inner">
          <div className="about-band__image">
            <div className="about-band__image-placeholder">
              <span>👩‍⚕️</span>
              <p>Tu foto aquí</p>
            </div>
          </div>
          <div className="about-band__content">
            {/* <p className="section-tag">Quién soy</p> */}
            <h2>Quién <em>soy</em></h2>
            <p>
              Somos un equipo de matronas, doulas y especialistas en lactancia con más de una década
              acompañando familias. Creemos que cada parto es único y que cada mamá merece sentirse
              vista, escuchada y respetada.
            </p>
            <p>
              Nuestra filosofía une la evidencia científica más actualizada con un cuidado humano
              profundo y un respeto absoluto por tus decisiones.
            </p>
            <Link to="/servicios" className="btn-primary" style={{ marginTop: '8px' }}>
              Conoce mis servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonials__inner">
          <div className="testimonials__header">
            <p className="section-tag">Ellas confían en nosotras</p>
            <h2>Palabras que<br /><em>nos llenan el alma</em></h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card__quote">"</div>
                <p>{t.text}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner__inner">
          <div className="cta-banner__orb" />
          <p className="section-tag">¿Lista para comenzar?</p>
          <h2>Da el primer paso hacia<br /><em>una maternidad plena</em></h2>
          <p>Escríbenos y cuéntanos en qué etapa estás. Estamos aquí para ti.</p>
          <Link to="/contacto" className="btn-primary">Contactar ahora</Link>
        </div>
      </section>
    </main>
  )
}
