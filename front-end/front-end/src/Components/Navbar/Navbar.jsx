
import { Link, useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import logo_negro from './logo negro2.png';
import logo_blanco from './logo blanco dark.png';
import Switch from './Switch';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode, userId}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Eliminar cualquier información de autenticación almacenada en localStorage o sessionStorage
    localStorage.removeItem('userToken'); // o el nombre de tu clave de almacenamiento
    sessionStorage.removeItem('userToken'); // si también usas sessionStorage

    // Mostrar un alert de cierre de sesión
    alert('Sesión cerrada correctamente');

    // Redirigir a la página principal
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleRegistroPrincipalClick = () => {
    navigate('/registroPrincipal');
  };

  return (
    <nav className="navbar navbar-expand-lg back-nav">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          <img src={darkMode ? logo_blanco : logo_negro} id="brandLogo" alt="Logo" width="120" height="45" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active SobreNosotros" id="dark-sobreNosotros" aria-current="page" to="/sobreNosotros">
                Sobre Nosotros
              </Link>
            </li>
          </ul>
          <div className="nav-item cambio-modo">
            <i className="bi bi-sun sun-icon"></i>
            <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
            <i className="bi bi-moon-stars moon-icon"></i>
          </div>
          <div className="nav-item botones">
          {location.pathname !== '/' && 
           location.pathname !== '/login' &&
           location.pathname !== '/registroPrincipal' && 
           location.pathname !== '/registroCoach' && 
           location.pathname !== '/registroPyme' &&
           location.pathname !== '/sobreNosotros' && (
            <button className="btn btn-outline-success agranda-letra" type="button" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          )}
            {location.pathname !== '/login' && 
            !location.pathname.startsWith('/inicioPyme') &&
            !location.pathname.startsWith('/miperfilCoach/') &&
            !location.pathname.startsWith('/perfilCoach/') &&
            location.pathname !== '/perfilPyme' &&
            !location.pathname.startsWith('/miperfilPyme/') &&
            location.pathname !== '/inicioCoach' && (
              <button className="btn btn-outline-success ingresa" type="button" onClick={handleLoginClick}>
                Ingresa
              </button>
            )}
            {location.pathname !== '/registroPrincipal' && 
             location.pathname !== '/registroCoach' && 
             location.pathname !== '/registroPyme' &&
             !location.pathname.startsWith('/inicioPyme') &&
             !location.pathname.startsWith('/miperfilCoach/') &&
             !location.pathname.startsWith('/perfilCoach/') &&
             location.pathname !== '/perfilPyme' &&
             !location.pathname.startsWith('/miperfilPyme/') &&
             location.pathname !== '/inicioCoach' && (
            <button className="btn btn-outline-success registrate" type="button" onClick={handleRegistroPrincipalClick}>
              Registrate
            </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
