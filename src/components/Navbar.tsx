import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">✦</span>
          <span className="navbar__logo-text">AlbaDoulaNacer</span>
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)} end>Inicio</NavLink></li>
          <li><NavLink to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</NavLink></li>
          <li><NavLink to="/maternidad" onClick={() => setMenuOpen(false)}>Maternidad & Crianza</NavLink></li>
          <li>
            <NavLink to="/contacto" onClick={() => setMenuOpen(false)} className="navbar__cta">
              Contactar
            </NavLink>
          </li>
        </ul>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
