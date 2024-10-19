import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Plantilla from "./Views/Plantilla";
import PaginaPrincipal from "./Views/Pagina Principal/PaginaPrincipal";/**SI L*/
import LoginForm from "./Views/Inicio Sesión/LoginForm";/**SI L */
import RegistroPrincipal from "./Views/Registro Principal/RegistroPrincipal";/**SI L */
import QuienesSomos from "./Views/Quienes Somos/QuienesSomos";/**SI L*/
import RegistroCoach from "./Views/Registro Coach/RegistroCoach";/**SI L*/
import RegistroPyme from "./Views/Registro Pyme/RegistroPyme";/**SI L*/
import InicioPyme from "./Views/Inicio Pyme/InicioPyme";/**SI L*/
import MiPerfilCoach from "./Views/Mi perfil Coach/Miperfilcoach";/*SI L*/ 
import PerfilCoach from "./Views/perfil-coach/PerfilCoach";/**SI l*/
import PerfilPyme from "./Views/Perfil Pyme/PerfilPyme";/**SI L */
import MiPerfilPyme from "./Views/Mi Perfil Pyme/MiPerfilPyme";/**si L*/ 
import InicioCoach from "./Views/Inicio Coach/InicioCoach";/**si L */

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Plantilla darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          <Route index element={<PaginaPrincipal />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registroPrincipal" element={<RegistroPrincipal />} />
          <Route path="/sobreNosotros" element={<QuienesSomos />} />
          <Route path="/registroCoach" element={<RegistroCoach />} />
          <Route path="/registroPyme" element={<RegistroPyme />} />
          <Route path="/inicioPyme" element={<InicioPyme />} />
          <Route path="/miPerfilCoach/:coachId" element={<MiPerfilCoach />} />
          <Route path="/perfilCoach/:coachId" element={<PerfilCoach />} />
          <Route path="/perfilPyme/:pymeId" element={<PerfilPyme />} />
          <Route path="/miperfilPyme/:pymeId" element={<MiPerfilPyme />} />
          <Route path="/inicioCoach" element={<InicioCoach />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
