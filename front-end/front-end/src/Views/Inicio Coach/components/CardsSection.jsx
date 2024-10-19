import React from "react";
import "./CardsSection.css";
import Carouselcoach from "./Carouselcoach";
import { useState, useEffect } from "react";

function CardSection() {
  const [listapyme, SetListapyme] = useState([]);
  useEffect(() => {
    //hacer la peticion a la API -- GET
    //fetch retorna una promesa  --> por que consulta un recurso externo
    fetch("http://localhost:3000/api/users/listar-pymes", {
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
      .then((data) => {
        SetListapyme(data.data);
        console.log(data); //para que nos muestre en la consola
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="subtitulo">
        Conoce a las pymes y sus
        <span className="highlight"> necesidades</span>.
      </h1>
      <div className="card-containerc">
        <Carouselcoach cardsData={listapyme} />
      </div>
    </>
  );
}

export default CardSection;
