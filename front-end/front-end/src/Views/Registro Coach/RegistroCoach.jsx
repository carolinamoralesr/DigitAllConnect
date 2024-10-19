import React from "react";
import "./RegistroCoach.css";
import Header from "./components/Header";
import Form from "./components/Form";

function RegistroCoach() {
  return (
    <div className="container-fluid registro-coach" id="registro-coach">
      <Header />
      <Form />
    </div>
  );
}

export default RegistroCoach;
