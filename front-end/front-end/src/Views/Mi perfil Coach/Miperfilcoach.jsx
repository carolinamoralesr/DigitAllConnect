import { useParams } from 'react-router-dom';
import React from "react";

import "./Miperfilcoach.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Habilities from "./components/Habilities";
import Buttonss from "./components/Buttonss";
import OtherProfile from "./components/OtherProfile";

function Miperfilcoach() {

  const { coachId } = useParams(); // Obtener coachId de la URL utilizando useParams
  console.log(coachId)

  return (
    <div className="app profile-containerCoach">
      <Profile coachId={coachId} /> {/* Pasar coachId como prop */}
      <About coachId={coachId} /> {/* Pasar coachId como prop */}
      <Habilities coachId={coachId} /> {/* Pasar coachId como prop */}
      <Experience coachId={coachId} /> {/* Pasar coachId como prop */}
      <OtherProfile coachId={coachId} /> {/* Pasar coachId como prop */}
      <Education coachId={coachId} /> {/* Pasar coachId como prop */}
      <Buttonss coachId={coachId} /> {/* Pasar coachId como prop */}
    </div>
  );
}

export default Miperfilcoach;

