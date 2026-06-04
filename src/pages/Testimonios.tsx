import './Testimonios.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { testimonios } from '../constants/testimonios'

export default function Testimonios() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Pequeño delay para que el DOM esté listo
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }, [hash])

  // const destacados = testimonios.filter(t => t.destacado)
  // const resto = testimonios.filter(t => !t.destacado)

  return (
    <main className="testimonios">

      {/* Page Header */}
      <section className="page-header testimonios-header">
        <div className="page-header__bg">
          <div className="page-header__orb" />
        </div>
        <div className="page-header__content">
          <p className="section-tag">Lo que dicen de mí</p>
          <h1>Palabras que me<br /><em>llenan el alma</em></h1>
          <p>
            Cada testimonio es una historia real de confianza, valentía y transformación.
            Es el mayor regalo que puede recibir una profesional.
          </p>
        </div>
      </section>

      {/* Contador */}
      <section className="testimonios__stats">
        <div className="testimonios__stats-inner">
          <div className="testimonios__stat">
            <span className="testimonios__stat-num">+500</span>
            <span className="testimonios__stat-label">familias acompañadas</span>
          </div>
          <div className="testimonios__stat-divider" />
          <div className="testimonios__stat">
            <span className="testimonios__stat-num">12</span>
            <span className="testimonios__stat-label">años de experiencia</span>
          </div>
          <div className="testimonios__stat-divider" />
          <div className="testimonios__stat">
            <span className="testimonios__stat-num">❤️</span>
            <span className="testimonios__stat-label">con amor y dedicación</span>
          </div>
        </div>
      </section>

      {/* Lista de testimonios */}
      <section className="testimonios__lista">
        <div className="testimonios__lista-inner">
          {testimonios.map((t, i) => (
            <article
              id={t.id}
              key={i}
              className={`testimonio-item ${t.destacado ? 'testimonio-item--destacado' : ''} ${i % 2 === 0 ? 'testimonio-item--left' : 'testimonio-item--right'}`}
            >
              <div className="testimonio-item__numero">{String(i + 1).padStart(2, '0')}</div>

              <div className="testimonio-item__body">
                <div className="testimonio-item__etapa">{t.etapa}</div>
                <blockquote className="testimonio-item__texto">
                  <span className="testimonio-item__comilla">"</span>
                  {t.texto}
                  <span className="testimonio-item__comilla testimonio-item__comilla--close">"</span>
                </blockquote>
                <div className="testimonio-item__autor">
                  <div className="testimonio-item__avatar">{t.nombre[0]}</div>
                  <div>
                    <strong>{t.nombre}</strong>
                    <span>{t.rol}</span>
                  </div>
                </div>
              </div>

              {t.destacado && (
                <div className="testimonio-item__badge">✦ Testimonio destacado</div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="testimonios__cta">
        <div className="testimonios__cta-inner">
          <h2>¿Quieres ser parte<br /><em>de esta historia?</em></h2>
          <p>Escríbeme y cuéntame en qué etapa estás. Estaré encantada de acompañarte.</p>
          <Link to="/contacto" className="btn-primary">Contactar</Link>
        </div>
      </section>

    </main>
  )
}