
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';

const TeSumas = () => {
  const navigate = useNavigate();
  const redirigirRegistro = () => {
    navigate ('/registroPrincipal')
    
  };

  return (
    <div className="container mt-5">
      <section className="te-sumas">
        <p className="text-center">¿Te sumas a esta idea?</p>
        <div className="center-button">
          <button className="cta-button" type="submit" onClick={redirigirRegistro}>Regístrate</button>
        </div>
      </section>
    </div>
  );
};

export default TeSumas;
