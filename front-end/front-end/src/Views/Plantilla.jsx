import { Outlet, useLocation } from "react-router-dom"
import NavBar from "../Components/Navbar/Navbar"
import Foot from "../Components/Footer/Foot"

const Plantilla = ({ darkMode, setDarkMode }) => {
  return (
    <div>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Outlet />
        <Foot />
    </div>
  )
}

export default Plantilla