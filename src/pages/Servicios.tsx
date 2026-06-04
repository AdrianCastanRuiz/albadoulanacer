import { Link } from 'react-router-dom'
import './Servicios.css'
import { services } from '../constants/servicios'


export default function Servicios() {
  return (
    <main className="servicios">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg">
          <div className="page-header__orb" />
        </div>
        <div className="page-header__content">
          <p className="section-tag">Todo lo que necesitas</p>
          <h1>Nuestros <em>servicios</em></h1>
          <p>
            Un catálogo completo de acompañamiento profesional diseñado para que
            te sientas segura, informada y cuidada en cada fase de la maternidad.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((group) => (
        <section key={group.category} className={`service-group service-group--${group.color}`}>
          <div className="service-group__inner">
            <div className="service-group__header">
              <p className="section-tag">{group.category}</p>
            </div>
            <div className="service-group__grid">
              {group.items.map((service, i) => (
                <div key={i} className="service-card">
                  <div className="service-card__top">
                    <div className="service-card__icon">{service.icon}</div>
                    <div className="service-card__meta">
                      <span className="service-card__duration">⏱ {service.duration}</span>
                      <span className="service-card__price">{service.price}</span>
                    </div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/contacto" className="service-card__cta">
                    Solicitar información →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="servicios__cta">
        <div className="servicios__cta-inner">
          <h2>¿No encuentras lo que buscas?</h2>
          <p>Escríbenos y diseñamos juntas el acompañamiento que necesitas.</p>
          <Link to="/contacto" className="btn-primary">Contactar</Link>
        </div>
      </section>
    </main>
  )
}
