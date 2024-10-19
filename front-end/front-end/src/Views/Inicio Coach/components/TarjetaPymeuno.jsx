import { Link } from "react-router-dom";
import "./PymeCards.css";

const TarjetaPymeuno = ({ nameCompany, descriptionPyme, avatar, id }) => {
  return (
    <div className="pyme-card">
      <div className="image-container-coach">
        <img
          src={`http://localhost:3000${avatar}`}
          alt="..."
          className="perfil-imagen"
        />
      </div>
      <h3 className="nombre-pyme">{nameCompany}</h3>
      <p className="descripcion-pyme">{descriptionPyme}</p>
      <Link
        className="boton-contacto"
        id="btn-contacto-pyme"
        to={`/perfilPyme/${id}`}
      >
        Contáctame
      </Link>
    </div>
  );
};

/* aca en link o ruta de perfil pyme a la que quiero contactar linea 12 */

export default TarjetaPymeuno;
