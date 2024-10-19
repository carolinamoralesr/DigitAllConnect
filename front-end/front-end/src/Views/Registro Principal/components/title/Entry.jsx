import React from 'react'
import './estiloregprin.css'

function Entry({text_ingreso, onClick}) {
  return (
    <div className="text-center mt-4 ingreso">
        <a href="#" className="cuenta" onClick={onClick} >{text_ingreso}</a>
    </div>

  )
}

export default Entry