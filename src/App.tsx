import { Encabezado } from "./components/Encabezado";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { VistaHE } from "./pages/aporteAmbiental/VistaHE";
import { Home } from "./pages/home/Inicio";
import { LandingPage } from "./pages/home/landingPage";
import { MisPlantas } from "./pages/jardin/MisPlantas";
import { MisAfiches } from "./pages/jardin/MisAfiches";
import { VistaGame } from "./pages/juego/VistaGame";
import { Toaster } from "react-hot-toast";
import { VistaR } from "./pages/recomendaciones/VistaR";
import { VistaMensajes } from "./pages/juego/VistaMensajes";
import { VistaAprendizaje } from "./pages/juego/VistaAprendizaje";
import { CreateUsr } from "./pages/usuario/CreateUsr";
import ResetPassword from "./pages/usuario/ResetPassword";

function App(){
  return(
    <BrowserRouter>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Navigate to="/index"/>}/>
        <Route path="/index" element={<LandingPage />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/aporte-ambiental" element={<VistaHE />} />
        <Route path="/mis-plantas" element={<MisPlantas />}/>
        <Route path="/aportes-plantas/:id" element={<MisAfiches />}/>
        <Route path="/juego-educativo/:id" element={<VistaGame />}/>
        <Route path="/conociendo-tu-planta" element={<VistaR />}/>
        <Route path="/consejos-encontrados/:id" element={<VistaMensajes /> }/>
        <Route path="/mis-aprendizajes/:id" element={<VistaAprendizaje /> }/>
        <Route path="/crear-cuenta" element={<CreateUsr/>} />
        <Route path="/reset-password/:uid/:token" element={<ResetPassword />}/>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App;