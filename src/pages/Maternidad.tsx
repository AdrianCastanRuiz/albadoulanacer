import { Link } from 'react-router-dom'
import './Maternidad.css'

const etapas = [
  {
    num: "01",
    title: "El cuarto trimestre",
    subtitle: "Las primeras 12 semanas postparto",
    content: [
      "El cuarto trimestre es una etapa de profunda transformación. Tu cuerpo se recupera del parto mientras se adapta a la nueva realidad de ser madre. Es normal sentirse desbordada, emocionada, asustada y feliz al mismo tiempo.",
      "Durante estas semanas, el contacto piel con piel, el descanso cuando el bebé duerme y pedir ayuda son los pilares fundamentales. No tienes que hacerlo todo tú sola."
    ],
    tips: ["Descansa siempre que puedas", "Acepta la ayuda de tu entorno", "La lactancia es un aprendizaje mutuo", "Habla de cómo te sientes"]
  },
  {
    num: "02",
    title: "Lactancia materna",
    subtitle: "Un vínculo nutritivo y emocional",
    content: [
      "La lactancia materna es mucho más que alimentación: es contacto, calor, consuelo y conexión. Pero también puede ser un reto. Las primeras semanas pueden ser difíciles, y eso es completamente normal.",
      "Con el apoyo adecuado, la mayoría de los problemas tienen solución. Nuestras consultoras de lactancia están disponibles para acompañarte, ya sea que elijas dar el pecho o que optes por la lactancia mixta o artificial."
    ],
    tips: ["El enganche correcto lo es todo", "Ofrece el pecho a demanda", "Busca apoyo especializado pronto", "Cada gota cuenta"]
  },
  {
    num: "03",
    title: "Crianza con apego",
    subtitle: "Construyendo seguridad desde el principio",
    content: [
      "La crianza con apego no es una moda: es una manera de relacionarse con tu hijo/a basada en la sensibilidad y la respuesta a sus necesidades. Bebes que se sienten seguros construyen una mejor regulación emocional.",
      "No significa hacerlo todo perfectamente. Significa estar presente, reparar cuando nos equivocamos y confiar en que tu instinto materno/paterno es una herramienta poderosa."
    ],
    tips: ["Responde a sus señales", "El colecho seguro es una opción", "Portear crea vínculo", "No existe el 'malcriar' a un bebé"]
  },
  {
    num: "04",
    title: "El bienestar materno",
    subtitle: "Cuidarte para poder cuidar",
    content: [
      "La salud mental materna es parte fundamental de la crianza. La depresión postparto, la ansiedad o el simple agotamiento extremo son realidades que merecen atención y no vergüenza.",
      "Invertir en tu bienestar no es egoísta: es necesario. Una madre que se cuida tiene más recursos para cuidar. Escuchar tus necesidades es también un acto de amor hacia tu familia."
    ],
    tips: ["Identifica señales de alerta", "Habla con tu pareja o entorno", "Busca apoyo profesional si lo necesitas", "Tu salud importa tanto como la del bebé"]
  }
]

const recursos = [
  { icon: "📖", title: "Guías descargables", text: "Material informativo sobre cada etapa de la maternidad, elaborado por nuestras profesionales." },
  { icon: "👥", title: "Grupos de apoyo", text: "Círculos de encuentro presenciales y online para madres en diferentes etapas de la crianza." },
  { icon: "🎧", title: "Talleres y formaciones", text: "Sesiones formativas sobre lactancia, sueño infantil, alimentación complementaria y más." },
  { icon: "💬", title: "Comunidad privada", text: "Espacio digital de confianza donde compartir dudas, experiencias y apoyarse mutuamente." }
]

export default function Maternidad() {
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
            <h2>Lo que nadie te conta<br /><em>pero necesitas saber</em></h2>
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
            <p>La maternidad no te hace menos tú misma. Te amplía. Te expande. Te enseña que eres capaz de mucho más de lo que creías.</p>
            <cite>— Equipo Dulce Origen</cite>
          </blockquote>
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
