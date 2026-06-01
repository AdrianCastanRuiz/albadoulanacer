import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Maternidad.css'
import { etapas, recursos, frases } from '../constants/maternidad.ts'





export default function Maternidad() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % frases.length)
        setVisible(true)
      }, 600)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="maternidad">
      {/* Page Header */}
      <section className="page-header maternidad-header">
        <div className="page-header__bg">
          <div className="page-header__orb" />
        </div>
        <div className="page-header__content">
          <p className="section-tag">Información & Comunidad</p>
          <h1>Maternidad <em>& Crianza</em></h1>
          <p>
            Todo lo que necesitas saber para atravesar la maternidad con confianza,
            información de calidad y el apoyo de una comunidad que entiende lo que estás viviendo.
          </p>
        </div>
      </section>

      {/* Etapas */}
      <section className="etapas">
        <div className="etapas__inner">
          <div className="etapas__intro">
            <p className="section-tag">Guía por etapas</p>
            <h2>Lo que nadie te cuenta<br /><em>pero necesitas saber</em></h2>
          </div>
          <div className="etapas__list">
            {etapas.map((etapa) => (
              <div key={etapa.num} className="etapa-item">
                <div className="etapa-item__number">{etapa.num}</div>
                <div className="etapa-item__content">
                  <div className="etapa-item__header">
                    <h3>{etapa.title}</h3>
                    <span>{etapa.subtitle}</span>
                  </div>
                  <div className="etapa-item__text">
                    {etapa.content.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                  <div className="etapa-item__tips">
                    {etapa.tips.map((tip, i) => (
                      <div key={i} className="etapa-tip">
                        <span>✦</span>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="recursos">
        <div className="recursos__inner">
          <div className="recursos__header">
            <p className="section-tag">Para ti</p>
            <h2>Recursos y <em>comunidad</em></h2>
            <p>Herramientas prácticas y espacios de apoyo para acompañarte en el día a día.</p>
          </div>
          <div className="recursos__grid">
            {recursos.map((r, i) => (
              <div key={i} className="recurso-card">
                <div className="recurso-card__icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="maternidad-quote">
        <div className="maternidad-quote__inner">
          <blockquote>
            <span className="maternidad-quote__mark">"</span>
            <p className={`maternidad-quote__text ${visible ? 'maternidad-quote__text--visible' : 'maternidad-quote__text--hidden'}`}>
              {frases[index]}
            </p>
            <cite>— Equipo AlbaDoulaNacer</cite>
          </blockquote>
          <div className="maternidad-quote__dots">
            {frases.map((_, i) => (
              <button
                key={i}
                className={`maternidad-quote__dot ${i === index ? 'maternidad-quote__dot--active' : ''}`}
                onClick={() => { setVisible(false); setTimeout(() => { setIndex(i); setVisible(true) }, 600) }}
                aria-label={`Frase ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="maternidad__cta">
        <div className="maternidad__cta-inner">
          <h2>¿Quieres más apoyo <em>personalizado?</em></h2>
          <p>Nuestro equipo está aquí para acompañarte en lo que necesites.</p>
          <div className="maternidad__cta-btns">
            <Link to="/servicios" className="btn-primary">Ver todos los servicios</Link>
            <Link to="/contacto" className="btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              Hablar con nosotras
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}