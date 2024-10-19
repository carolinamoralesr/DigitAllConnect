import React from 'react';
import './estiloregprin.css'

function Card({card_title, imagen, pregunta, req, req1, req2, req3, text_button, dudas, onClick, onClickduda}) {
    return(
        <div className='card-registro'>
            <div className="tarjetas container d-flex flex-column align-items-center">
                <div className="col-md-8 mb-3">
                    <div className="cardreg h-100">
                        <div className="card-body text-start letra-cards">
                            <h3 className="titulo-tarjeta-reg">{card_title}</h3>
                            <img id="Imagen1" src={imagen} alt="Imagenpyme" className="img-fluid float-end"/>

                            <p className="texto-tarjeta-reg">{pregunta}</p>
                                
                            <h4 className="text-start requisito" id='title-req'>{req}</h4>
                            <ul className="text-start lista">
                                <li >{req1}</li>
                                <li>{req2}</li>
                                <li>{req3}</li>
                            </ul>
                            <div className="text-end">
                                <button href="#"  className="btn-registro" type="submit" onClick={onClick} >{text_button}</button>
                            </div>
                                
                            <div className="mt-3 text-center">
                                <a href="#" className="dudas" onClick={onClickduda}>{dudas}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card