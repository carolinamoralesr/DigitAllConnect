import React from "react";
import "./IncomeInfo.css";

function IncomeInfo() {
  return (
    <div className="IncomeInfo">
      <h3>Ingresos De La Empresa</h3>
      <p>
        Temporada alta: <strong>$780,000 CLP - MES</strong>
      </p>
      <p>
        Temporada baja: <strong>$590,000 CLP - MES</strong>
      </p>
    </div>
  );
}

export default IncomeInfo;
