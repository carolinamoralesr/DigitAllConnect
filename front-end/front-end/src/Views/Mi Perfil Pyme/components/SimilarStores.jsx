import React from "react";
import "./SimilarStores.css";
import similarStore1 from "../assets/similarStore1.png";
import similarStore2 from "../assets/similarStore2.png";

function SimilarStores() {
  return (
    <div className="SimilarStores">
      <h3>Ver Empresas Similares</h3>
      <div className="Store">
        <img src={similarStore1} alt="Similar Store 1" className="StoreImage" />
        <p>Florería Amanda</p>
      </div>
      <div className="Store">
        <img src={similarStore2} alt="Similar Store 2" className="StoreImage" />
        <p>Bar British</p>
      </div>
      <div>
        <a>
          ver más
        </a>
      </div>
    </div>
  );
}

export default SimilarStores;
