import React from "react";
import "./CardsSection.css";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";

function CardSection() {
  const [listacoach, SetListacoach] = useState([]);
  useEffect(() => {
    //hacer la peticion a la API -- GET
    //fetch retorna una promesa  --> por que consulta un recurso externo
    fetch("http://localhost:3000/api/users/listar-coaches", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((datos) => {
        SetListacoach(datos.data);
        console.log(datos); //para que nos muestre en la consola
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="portafolio">
        Colabora con nuestros <span className="highlight">estudiantes</span> y{" "}
        <span className="highlight">profesionales</span> para obtener resultados
        de otro <span className="highlight">nivel.</span>
      </h1>
      <Carousel cardsData={listacoach} cardType="professional" />
    </>
  );
}

export default CardSection;
