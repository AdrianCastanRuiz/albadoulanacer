import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            {/* <span className="footer__logo-icon">✦</span> */}
          <img src="/logo.png" alt="Alba Doula Nacer" className="navbar__logo-img" />
          </div>
          <p>Acompañándote en cada etapa del camino hacia la maternidad con amor, ciencia y presencia.</p>
        </div>

        <div className="footer__nav">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/maternidad">Maternidad & Crianza</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contacto</h4>
          <ul>
            <li>
              <span>📍</span>
              <span>Ibiza, España</span>
            </li>
            <li>
              <span>📞</span>
              <span>+34 670 52 13 58</span>
            </li>
            <li>
              <span>✉️</span>
              <span>castanibiza@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} AlbaDoulaNacer. Todos los derechos reservados.</p>
        <p>Hecho con amor ♡</p>
      </div>
    </footer>
  )
}
