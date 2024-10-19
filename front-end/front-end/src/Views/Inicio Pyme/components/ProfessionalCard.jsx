import { Link } from "react-router-dom";
import "./ProfessionalCard.css";

const ProfessionalCard = ({
  fullName,
  avatar,
  specialization,
  disponibility,
  id,
}) => {
  return (
    <div className="professional-card">
      <div className="image-container">
        <img src={`http://localhost:3000${avatar}`} alt="..." className="profile-imageProfessional" />
      </div>
      <h3>{fullName}</h3>
      <p>{specialization}</p>
      <p className="disponibility">{disponibility}</p>
      <Link className="btn-inicio-pyme" to={`/perfilCoach/${id}`}>Contáctame</Link>
    </div>
  );
};

export default ProfessionalCard;
