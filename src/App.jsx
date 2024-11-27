import './App.css'
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
//pages 
import Contacto from "./pages/contacto.jsx";
import SobreMi from "./pages/sobremi.jsx";
import Formacion from "./pages/formacion.jsx";
import Proyectos from "./pages/proyectos.jsx";
import Tecnologias from "./pages/tecnologias.jsx";
//importando context
import { ThemeProvider } from "./context/themeContext.jsx";
import { Welcome } from './pages/welcome.jsx';
import { Footer } from './components/Footer.jsx';



function App() {



  return (
    <ThemeProvider>
      <div className="body">
        <NavBar />

        <main>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/formacion" element={<Formacion />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/tecnologias" element={<Tecnologias />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>

  )
}

export default App
