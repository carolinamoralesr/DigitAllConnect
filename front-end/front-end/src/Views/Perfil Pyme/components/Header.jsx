import React from "react";
import "./Header.css";
import { IoStorefrontSharp } from "react-icons/io5";



function Header() {
  return (
    <header className="perfil-de-empresa">
      <h1 className="pymeProfile">
        <IoStorefrontSharp className="icon-store" />
        Perfil De Empresa
      </h1>
    </header>
  );
}

export default Header;
