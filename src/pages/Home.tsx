import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Home.css'
import { highlights } from '../constants/home.ts'
import { testimonios } from '../constants/testimonios'
import heroImg from "../assets/albadoulanacer.avif"
import aboutMeImg from "../assets/aboutMe.jpg"

const PER_PAGE = 3
const INTERVAL = 2000

export default function Home() {
  const [page, setPage] = useState(0)
  const [animating, setAnimating] = useState(false)
  const totalPages = Math.ceil(testimonios.length / PER_PAGE)
  const visibles = testimonios.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setPage(p => (p + 1) % totalPages)
        setAnimating(false)
      }, 500)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [totalPages])

  return (
    <main className="home">

      {/* Hero */}
      <section
        className="hero"
        style={{ ['--hero-bg' as string]: `url(${heroImg})` }}
      >
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
            <img
              src={heroImg}
              alt="Alba Doula Nacer"
              className="hero__image"
            />
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
            <p className="section-tag">Lo que ofrezco</p>
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
            <img
              src={aboutMeImg}
              alt="Alba Doula Nacer"
              className="about-band__img"
            />
          </div>
          <div className="about-band__content">
            <h2>Quién <em>soy</em></h2>
            <p>
              Soy matrona, doula y especialista en lactancia con más de una década
              acompañando familias. Creo que cada parto es único y que cada mamá merece sentirse
              vista, escuchada y respetada.
            </p>
            <p>
              Mi filosofía une la evidencia científica más actualizada con un cuidado humano
              profundo y un respeto absoluto por tus decisiones.
            </p>
            <Link to="/sobre-mi" className="btn-primary" style={{ marginTop: '8px' }}>
              Conóceme mejor
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonials__inner">
          <div className="testimonials__header">
            <p className="section-tag">Ellas confían en mí</p>
            <h2>Palabras que<br /><em>me llenan el alma</em></h2>
          </div>

          <div className={`testimonials__grid ${animating ? 'testimonials__grid--out' : 'testimonials__grid--in'}`}>
            {visibles.map((t, i) => (
              <div key={`${page}-${i}`} className="testimonial-card" onClick={() => navigate('/testimonios#' + t.id)}>
                <div className="testimonial-card__quote">"</div>
                <p>{t.texto.length > 120 ? t.texto.slice(0, 117).trimEnd() + '...' : t.texto}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.nombre[0]}</div>
                  <div>
                    <strong>{t.nombre}</strong>
                    <span>{t.rol}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === page ? 'testimonials__dot--active' : ''}`}
                onClick={() => {
                  setAnimating(true)
                  setTimeout(() => { setPage(i); setAnimating(false) }, 500)
                }}
                aria-label={`Página ${i + 1}`}
              />
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
          <p>Escríbeme y cuéntame en qué etapa estás. Estoy aquí para ti.</p>
          <Link to="/contacto" className="btn-primary">Contactar ahora</Link>
        </div>
      </section>

    </main>
  )
}