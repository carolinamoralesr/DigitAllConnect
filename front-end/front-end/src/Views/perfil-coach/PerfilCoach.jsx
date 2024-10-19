import React from "react";
import "./PerfilCoach.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Habilities from "./components/Habilities";
import Buttons from "./components/Buttonss";
import OtherProfile from "./components/OtherProfile";

function PerfilCoach() {
  return (
    <div className="app profile-containerr">
      <Profile />
      <About />
      <Habilities />
      <Experience />
      <OtherProfile />
      <Education />
      <Buttons />
    </div>
  );
}

export default PerfilCoach;
