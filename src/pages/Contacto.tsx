import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contacto.css'
import type { FormState, FormStatus } from '../types'
import SocialIcon from '../components/SocialIcon'
import { whatsappIcon, instaGramIcon, facebookIcon } from '../constants/social'

// ─── Configuración EmailJS ───────────────────────────────────────
// Crea tu cuenta en https://www.emailjs.com y sustituye estos valores
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
// ────────────────────────────────────────────────────────────────



const etapas = [
  "Estoy embarazada",
  "Preparación al parto",
  "Postparto reciente",
  "Lactancia",
  "Crianza y desarrollo",
  "Otra consulta"
]

export default function Contacto() {
  const [form, setForm] = useState<FormState>({
    nombre: '', email: '', telefono: '', etapa: '', mensaje: ''
  })
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const successDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (formStatus === 'success') {
      successDivRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [formStatus])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.mensaje) return

    setFormStatus('sending')

    try {

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono || 'No indicado',
          etapa: form.etapa || 'No indicada',
          mensaje: form.mensaje,
        },
        EMAILJS_PUBLIC_KEY
      )

      setFormStatus('success')

    } catch (error) {
      console.error('Error al enviar:', error)
      setFormStatus('error')
    }
  }

  return (
    <main className="contacto">
      <section className="page-header contacto-header">
        <div className="page-header__bg">
          <div className="page-header__orb" />
        </div>
        <div className="page-header__content">
          <p className="section-tag">Estamos aquí para ti</p>
          <h1>Hablemos <em>juntas</em></h1>
          <p>
            Cuéntanos en qué etapa estás y qué necesitas. Te respondemos en menos de 24 horas
            con toda la información y cariño del mundo.
          </p>
        </div>
      </section>

      <section className="contacto__body">
        <div className="contacto__inner">

          <div className="contacto__info">
            <div className="contacto__info-block">
              <p className="section-tag">Dónde encontrarnos</p>
              <div className="contacto__info-items">
                <div className="contacto__info-item">
                  <div className="contacto__info-icon">📍</div>
                  <div>
                    <strong>Dirección</strong>
                    <span>Calle Mayor 42, Barcelona</span>
                  </div>
                </div>
                <div className="contacto__info-item">
                  <div className="contacto__info-icon">📞</div>
                  <div>
                    <strong>Teléfono</strong>
                    <span>+34 670 52 13 58</span>
                  </div>
                </div>
                <div className="contacto__info-item">
                  <div className="contacto__info-icon">✉️</div>
                  <div>
                    <strong>Email</strong>
                    <span>castanibiza@gmail.com</span>
                  </div>
                </div>
                <div className="contacto__info-item">
                  {/* <div className="contacto__info-icon">🕐</div> */}
                  {/* <div>
                    <strong>Horario</strong>
                    <span>Lun–Vie de 9h a 19h</span>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="contacto__social">
              <p className="section-tag">Síguenos</p>
              <div className="contacto__social-links">
                <SocialIcon {...whatsappIcon} />
                <SocialIcon {...instaGramIcon} />
                <SocialIcon {...facebookIcon} />
              </div>
            </div>

            <div className="contacto__promise">
              <div className="contacto__promise-icon">💛</div>
              <p>Te prometemos una respuesta cálida, honesta y sin juicios. Cada consulta es única para nosotras.</p>
            </div>
          </div>

          <div className="contacto__form-wrap">
            {formStatus === 'success' ? (
              <div className="contacto__success" ref={successDivRef}>
                <div className="contacto__success-icon">🌸</div>
                <h2>¡Mensaje enviado!</h2>
                <p>
                  Gracias por escribirnos, <strong>{form.nombre}</strong>. Te
                  responderemos a {form.email} lo antes posible.
                </p>
                <button
                  className="btn-outline"
                  onClick={() => { setFormStatus('idle'); setForm({ nombre: '', email: '', telefono: '', etapa: '', mensaje: '' }) }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <div className="contacto__form">
                <h2>Escríbenos</h2>
                <p>Rellena el formulario y te contactamos pronto.</p>

                {formStatus === 'error' && (
                  <div className="form__error-banner">
                    ⚠️ Ha habido un error al enviar el mensaje. Por favor inténtalo de nuevo o escríbenos directamente a <strong>castanibiza@gmail.com</strong>
                  </div>
                )}

                <div className="form__grid">
                  <div className="form__field">
                    <label htmlFor="nombre">Nombre completo *</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form__field">
                    <label htmlFor="email">Correo electrónico *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form__field">
                    <label htmlFor="telefono">Teléfono (opcional)</label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="+34 600 000 000"
                      value={form.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form__field">
                    <label htmlFor="etapa">¿En qué etapa estás?</label>
                    <select
                      id="etapa"
                      name="etapa"
                      value={form.etapa}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      {etapas.map(e => (
                        <option key={e} value={e}>{e}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form__field form__field--full">
                    <label htmlFor="mensaje">Tu mensaje *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={6}
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form__field form__field--full form__submit">
                    <button
                      className="btn-primary form__btn"
                      onClick={handleSubmit}
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <span className="form__spinner" />
                          Enviando...
                        </>
                      ) : (
                        <>Enviar mensaje ✦</>
                      )}
                    </button>
                    <p className="form__note">* Campos obligatorios. Tu información es completamente privada.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}