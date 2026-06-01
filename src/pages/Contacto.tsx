import { useEffect, useState } from 'react'
import './Contacto.css'

type FormState = {
  nombre: string
  email: string
  telefono: string
  etapa: string
  mensaje: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

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
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.mensaje) return
    setStatus('sending')
    // Simular envío
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
  }



  return (
    <main className="contacto">
      {/* Page Header */}
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

          {/* Info lateral */}
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
                  <div className="contacto__info-icon">🕐</div>
                  <div>
                    <strong>Horario</strong>
                    <span>Lun–Vie de 9h a 19h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contacto__social">
              <p className="section-tag">Síguenos</p>
              <div className="contacto__social-links">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">WhatsApp</a>
              </div>
            </div>

            <div className="contacto__promise">
              <div className="contacto__promise-icon">💛</div>
              <p>Te prometemos una respuesta cálida, honesta y sin juicios. Cada consulta es única para nosotras.</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="contacto__form-wrap">
            {status === 'success' ? (
              <div className="contacto__success">
                <div className="contacto__success-icon">🌸</div>
                <h2>¡Mensaje enviado!</h2>
                <p>
                  Gracias por escribirnos, <strong>{form.nombre}</strong>. Te
                  responderemos a {form.email} lo antes posible.
                </p>
                <button
                  className="btn-outline"
                  onClick={() => { setStatus('idle'); setForm({ nombre: '', email: '', telefono: '', etapa: '', mensaje: '' }) }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <div className="contacto__form">
                <h2>Escríbenos</h2>
                <p>Rellena el formulario y te contactamos pronto.</p>

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
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
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
