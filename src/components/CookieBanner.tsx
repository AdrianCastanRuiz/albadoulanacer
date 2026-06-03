import { useState, useEffect } from 'react'
import './CookieBanner.css'
import type { CookiePreferences } from '../types'



const COOKIE_KEY = 'cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [prefs, setPrefs] = useState<CookiePreferences>({
    necesarias: true,
    analiticas: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const guardar = (preferences: CookiePreferences) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(preferences))
    setVisible(false)
  }

  const aceptarTodas = () => {
    guardar({ necesarias: true, analiticas: true, marketing: true })
  }

  const rechazarOpcionales = () => {
    guardar({ necesarias: true, analiticas: false, marketing: false })
  }

  const guardarPersonalizadas = () => {
    guardar(prefs)
  }

  if (!visible) return null

  return (
    <div className="cb-overlay" role="dialog" aria-modal="true" aria-label="Aviso de cookies">
      <div className={`cb-banner ${expanded ? 'cb-expanded' : ''}`}>

        <div className="cb-petal cb-petal-1" aria-hidden="true" />
        <div className="cb-petal cb-petal-2" aria-hidden="true" />

        <div className="cb-main">
          <div className="cb-icon" aria-hidden="true">🍪</div>
          <div className="cb-content">
            <h2 className="cb-title">Usamos cookies</h2>
            <p className="cb-text">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia.
              Puedes aceptarlas todas, rechazar las opcionales o personalizar tu elección.{' '}
              <a href="/politica-cookies" className="cb-link">Más información</a>
            </p>
          </div>
        </div>

        {expanded && (
          <div className="cb-details">
            <div className="cb-category">
              <div className="cb-category-header">
                <div>
                  <span className="cb-category-name">Necesarias</span>
                  <span className="cb-category-desc">Esenciales para el funcionamiento del sitio</span>
                </div>
                <div className="cb-toggle cb-toggle--disabled">
                  <span className="cb-toggle-knob" />
                </div>
              </div>
            </div>

            <div className="cb-category">
              <div className="cb-category-header">
                <div>
                  <span className="cb-category-name">Analíticas</span>
                  <span className="cb-category-desc">Nos ayudan a entender cómo usas la web</span>
                </div>
                <button
                  className={`cb-toggle ${prefs.analiticas ? 'cb-toggle--on' : ''}`}
                  onClick={() => setPrefs(p => ({ ...p, analiticas: !p.analiticas }))}
                  aria-pressed={prefs.analiticas}
                  aria-label="Activar cookies analíticas"
                >
                  <span className="cb-toggle-knob" />
                </button>
              </div>
            </div>

            <div className="cb-category">
              <div className="cb-category-header">
                <div>
                  <span className="cb-category-name">Marketing</span>
                  <span className="cb-category-desc">Para mostrarte contenido relevante</span>
                </div>
                <button
                  className={`cb-toggle ${prefs.marketing ? 'cb-toggle--on' : ''}`}
                  onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                  aria-pressed={prefs.marketing}
                  aria-label="Activar cookies de marketing"
                >
                  <span className="cb-toggle-knob" />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="cb-actions">
          <button className="cb-btn cb-btn--ghost" onClick={rechazarOpcionales}>
            Solo necesarias
          </button>
          <button
            className="cb-btn cb-btn--outline"
            onClick={() => setExpanded(e => !e)}
          >
            {expanded ? 'Ocultar opciones' : 'Personalizar'}
          </button>
          {expanded
            ? (
              <button className="cb-btn cb-btn--primary" onClick={guardarPersonalizadas}>
                Guardar selección
              </button>
            ) : (
              <button className="cb-btn cb-btn--primary" onClick={aceptarTodas}>
                Aceptar todas
              </button>
            )
          }
        </div>
      </div>
    </div>
  )
}

// Utilidad para leer las preferencias guardadas desde cualquier componente
export function getCookieConsent(): CookiePreferences | null {
  const raw = localStorage.getItem(COOKIE_KEY)
  return raw ? JSON.parse(raw) : null
}
