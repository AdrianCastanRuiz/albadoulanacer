import type { Etapa, Recurso, Frase } from '../types'

export const etapas : Etapa[] = [
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
      "La crianza con apego no es una moda: es una manera de relacionarse con tu hijo/a basada en la sensibilidad y la respuesta a sus necesidades. Bebés que se sienten seguros construyen una mejor regulación emocional.",
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

export const frases : Frase[] = [
  "La maternidad no te hace menos tú misma. Te amplía. Te expande. Te enseña que eres capaz de mucho más de lo que creías.",
  "Nacer es el acto más valiente. Acompañar ese nacimiento, el más sagrado.",
  "No existe la madre perfecta. Existe la madre presente, que lo intenta cada día con amor.",
  "Tu cuerpo sabía cómo hacerlo antes de que tu mente lo entendiera.",
  "El postparto no es el final del parto. Es el comienzo de una nueva versión de ti.",
  "Pedir ayuda no es debilidad. Es el primer acto de buena maternidad.",
  "Cada bebé que nace trae consigo una madre que también está naciendo.",
]

export const recursos : Recurso[] = [
  { icon: "📖", title: "Guías descargables", text: "Material informativo sobre cada etapa de la maternidad, elaborado por nuestras profesionales." },
  { icon: "👥", title: "Grupos de apoyo", text: "Círculos de encuentro presenciales y online para madres en diferentes etapas de la crianza." },
  { icon: "🎧", title: "Talleres y formaciones", text: "Sesiones formativas sobre lactancia, sueño infantil, alimentación complementaria y más." },
  { icon: "💬", title: "Comunidad privada", text: "Espacio digital de confianza donde compartir dudas, experiencias y apoyarse mutuamente." }
]

