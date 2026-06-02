import './AboutMe.css'
import { useScrollToTop } from '../hooks/useScrollToTop.ts'
import { Link } from 'react-router-dom'
import { formacion, valores } from '../constants/aboutMe.ts'




export default function SobreMi() {
  useScrollToTop()

  return (
    <main className="sobre-mi">

      {/* Page Header */}
      <section className="page-header sobre-mi-header">
        <div className="page-header__bg">
          <div className="page-header__orb" />
        </div>
        <div className="page-header__content">
          <p className="section-tag">Quién soy</p>
          <h1>Sobre <em>mí</em></h1>
          <p>
            Matrona, doula y consultora de lactancia. Llevo más de una década
            acompañando a familias en uno de los momentos más transformadores de sus vidas.
          </p>
        </div>
      </section>

      {/* Bio section */}
      <section className="sobre-mi__bio">
        <div className="sobre-mi__bio-inner">

          {/* Foto */}
          <div className="sobre-mi__foto-wrap">
            <div className="sobre-mi__foto-decoration" />
            <div className="sobre-mi__foto-placeholder">
              <span>🌸</span>
              <p>Tu foto aquí</p>
            </div>
            <div className="sobre-mi__valores">
              {valores.map((v) => (
                <div key={v.label} className="sobre-mi__valor">
                  <span className="sobre-mi__valor-icon">{v.icon}</span>
                  <span>{v.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Texto */}
          <div className="sobre-mi__texto">
            <p className="section-tag">Mi historia</p>
            <h2>Acompañar es <em>mi vocación</em></h2>

            <p>
              Hola, soy Alba. Matrona de formación y doula de corazón. Desde que acompañé
              mi primer parto supe que quería dedicar mi vida a estar presente en ese momento
              tan único e irrepetible en el que una mujer se convierte en madre.
            </p>
            <p>
              A lo largo de estos años he tenido el privilegio de acompañar a más de 500 familias
              en su camino hacia la maternidad — desde los primeros nervios del embarazo hasta las
              noches de lactancia y los días de crianza. Cada historia me ha enseñado algo nuevo
              y me ha hecho mejor profesional.
            </p>
            <p>
              Mi filosofía es sencilla: cada mujer, cada bebé y cada familia son únicos.
              No existe un único camino correcto. Mi trabajo es darte información basada
              en evidencia, acompañarte sin juzgar y ayudarte a confiar en ti misma.
            </p>

            <div className="sobre-mi__stats">
              <div className="sobre-mi__stat">
                <span className="sobre-mi__stat-num">+500</span>
                <span className="sobre-mi__stat-label">familias acompañadas</span>
              </div>
              <div className="sobre-mi__stat">
                <span className="sobre-mi__stat-num">12</span>
                <span className="sobre-mi__stat-label">años de experiencia</span>
              </div>
              <div className="sobre-mi__stat">
                <span className="sobre-mi__stat-num">100%</span>
                <span className="sobre-mi__stat-label">dedicación y amor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formación */}
      <section className="sobre-mi__formacion">
        <div className="sobre-mi__formacion-inner">
          <div className="sobre-mi__formacion-header">
            <p className="section-tag">Trayectoria académica</p>
            <h2>Mi <em>formación</em></h2>
            <p>Una base sólida para un acompañamiento seguro, actualizado y de calidad.</p>
          </div>

          <div className="sobre-mi__timeline">
            {formacion.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-item__year">{item.year}</div>
                <div className="timeline-item__dot" />
                <div className="timeline-item__content">
                  <h3>{item.titulo}</h3>
                  <span>{item.centro}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sobre-mi__cta">
        <div className="sobre-mi__cta-inner">
          <h2>¿Conectamos <em>juntas?</em></h2>
          <p>Si sientes que puedo ser la acompañante que necesitas, escríbeme sin compromiso.</p>
          <Link to="/contacto" className="btn-primary">Contactar</Link>
        </div>
      </section>

    </main>
  )
}
