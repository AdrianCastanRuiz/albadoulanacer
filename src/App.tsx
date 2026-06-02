import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Maternidad from './pages/Maternidad'
import Contacto from './pages/Contacto'
import SobreMi from './pages/Sobremi'
import './styles/globals.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/maternidad" element={<Maternidad />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
