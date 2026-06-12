import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../pages/Home'
import Servicios from '../pages/Servicios'
import Maternidad from '../pages/Maternidad'
import Contacto from '../pages/Contacto'
import AboutMe from '../pages/AboutMe.tsx'
import '../styles/globals.css'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Testimonios from '../pages/Testimonios.tsx'
// import SocialIcon from './SocialIcon.tsx'
// import { instaGramIcon } from '../constants/social.ts'


const Layout = () => {

    useScrollToTop()

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-mi" element={<AboutMe />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/maternidad" element={<Maternidad />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/testimonios" element = {<Testimonios />} />
            </Routes>
            <Footer />
        </>

    )


}


export default Layout;