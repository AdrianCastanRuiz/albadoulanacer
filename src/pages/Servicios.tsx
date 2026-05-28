import { Link } from 'react-router-dom'
import './Servicios.css'

const services = [
  {
    category: "Embarazo",
    color: "sage",
    items: [
      {
        icon: "🌿",
        title: "Seguimiento de embarazo",
        description: "Control prenatal personalizado con visitas regulares, ecografías de bienestar y atención integral a tus necesidades físicas y emocionales durante los nueve meses.",
        duration: "Consultas mensuales",
        price: "Desde 80€/sesión"
      },
      {
        icon: "🧘",
        title: "Yoga prenatal",
        description: "Clases de yoga adaptadas al embarazo para fortalecer el cuerpo, conectar con tu bebé y prepararte mental y físicamente para el parto.",
        duration: "Sesiones de 75 min",
        price: "Desde 20€/clase"
      },
      {
        icon: "📚",
        title: "Preparación al parto",
        description: "Curso completo de preparación que cubre las fases del parto, técnicas de respiración, posiciones activas, la analgesia y el rol de tu acompañante.",
        duration: "6 sesiones de 2h",
        price: "180€ el curso"
      }
    ]
  },
  {
    category: "Parto",
    color: "rose",
    items: [
      {
        icon: "🤝",
        title: "Acompañamiento en el parto",
        description: "Presencia continua de una doula certificada durante todo el proceso del parto, ofreciendo apoyo físico, emocional e informativo a ti y a tu pareja.",
        duration: "Proceso completo",
        price: "Consulta precio"
      },
      {
        icon: "💧",
        title: "Parto en agua",
        description: "Asesoría y preparación para el parto en agua: beneficios, protocolo, centros disponibles y todo lo que necesitas saber para considerar esta opción.",
        duration: "3 sesiones prep.",
        price: "Desde 150€"
      },
      {
        icon: "📝",
        title: "Plan de parto",
        description: "Sesión personalizada para redactar juntas tu plan de parto, respetando tus deseos y asegurándonos de que sea realista, claro y bien recibido por el equipo médico.",
        duration: "2h",
        price: "60€"
      }
    ]
  },
  {
    category: "Postparto",
    color: "blush",
    items: [
      {
        icon: "🤱",
        title: "Apoyo a la lactancia",
        description: "Consultas especializadas en lactancia materna y artificial, resolución de problemas (enganche, grietas, mastitis), y apoyo para establecer una lactancia satisfactoria.",
        duration: "Sesiones de 90 min",
        price: "Desde 70€/sesión"
      },
      {
        icon: "💛",
        title: "Visita postparto domicilio",
        description: "Te visitamos en casa durante los primeros días para revisar la recuperación, el estado emocional, la alimentación del bebé y resolver todas tus dudas.",
        duration: "2-3h",
        price: "Desde 90€"
      },
      {
        icon: "🌸",
        title: "Grupo de postparto",
        description: "Espacio semanal de encuentro para madres en el postparto. Un círculo de apoyo, escucha y aprendizaje compartido facilitado por una profesional.",
        duration: "Sesiones semanales",
        price: "15€/sesión"
      }
    ]
  }
]

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
