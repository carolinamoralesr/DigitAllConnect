import React, { useState } from 'react';
import FileUploadButton from './botones/FileUploadButton';
import BtnBlanco from "./botones/BtnBlanco";
import BtnHoras from "./botones/BtnHoras";
import FotoPerfil from './botones/FotoPerfil';
import Popup from './Popup';

const Form = () => {
    const [rut, setRut] = useState('');
    const [rutError, setRutError] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [uppercaseError, setUppercaseError] = useState('');
    const [lengthError, setLengthError] = useState('');
    const [showPasswordInfo, setShowPasswordInfo] = useState(false);
    const [passwordMismatchError, setPasswordMismatchError] = useState('');

    const validateRut = (rut) => {
        const cleanRut = rut.replace(/[^0-9kK]/g, '').toUpperCase();
        if (cleanRut.length < 8 || cleanRut.length > 9) {
            return false;
        }
        const number = cleanRut.slice(0, -1);
        const verifier = cleanRut.slice(-1);
        let sum = 0;
        let multiplier = 2;
        for (let i = number.length - 1; i >= 0; i--) {
            sum += parseInt(number.charAt(i), 10) * multiplier;
            multiplier = multiplier < 7 ? multiplier + 1 : 2;
        }
        const calculatedVerifier = 11 - (sum % 11);
        const validVerifier = calculatedVerifier === 11 ? '0' : calculatedVerifier === 10 ? 'K' : calculatedVerifier.toString();
        return verifier === validVerifier;
    };

    const handleRutChange = (e) => {
        const { value } = e.target;
        setRut(value);

        if (!validateRut(value)) {
            setRutError('El RUT ingresado no es válido');
        } else {
            setRutError('');
        }
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPassword(value);

        if (!/(?=.*[A-Z])/.test(value)) {
            setUppercaseError('La contraseña debe tener al menos una mayúscula');
        } else {
            setUppercaseError('');
        }

        if (value.length < 8) {
            setLengthError('La contraseña debe tener al menos 8 caracteres');
        } else {
            setLengthError('');
        }

        if (confirmPassword && value !== confirmPassword) {
            setPasswordMismatchError('Las contraseñas no son iguales');
        } else {
            setPasswordMismatchError('');
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const { value } = e.target;
        setConfirmPassword(value);

        if (password !== value) {
            setPasswordMismatchError('Las contraseñas no son iguales');
        } else {
            setPasswordMismatchError('');
        }
    };

    const handlePasswordFocus = () => {
        setShowPasswordInfo(true);
    };

    const handlePasswordBlur = () => {
        setShowPasswordInfo(false);
    };

    return (
        <article>
            <article className="DatosPersonalesCoach">
                <h2 className='tit'>Datos Personales</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="nombreCompleto" className="NombreCompleto label-form">Nombre Completo*</label>
                            <input type="text" id="nombreCompleto" className="form-control Rectangulo2" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="region" className="Region label-form">Región*</label>
                            <select id="region" className="form-control rectangulo8 custom-select">
                                <option value="" disabled selected>Seleccione su Región</option>
                                <option value="I">I Región de Tarapacá</option>
                                <option value="II">II Región de Antofagasta</option>
                                <option value="III">III Región de Atacama</option>
                                <option value="IV">IV Región de Coquimbo</option>
                                <option value="V">V Región de Valparaíso</option>
                                <option value="VI">VI Región del Libertador General Bernardo O'Higgins</option>
                                <option value="VII">VII Región del Maule</option>
                                <option value="VIII">VIII Región del Biobío</option>
                                <option value="IX">IX Región de La Araucanía</option>
                                <option value="X">X Región de Los Lagos</option>
                                <option value="XI">XI Región Aysén del General Carlos Ibáñez del Campo</option>
                                <option value="XII">XII Región de Magallanes y de la Antártica Chilena</option>
                                <option value="RM">RM Región Metropolitana de Santiago</option>
                                <option value="XIV">XIV Región de Los Ríos</option>
                                <option value="XV">XV Región de Arica y Parinacota</option>
                                <option value="XVI">XVI Región de Ñuble</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="contrasena" className="Contrasena label-form">Contraseña*</label>
                            <input 
                                type="password" 
                                id="contrasena" 
                                className="form-control Rectangulo5" 
                                value={password} 
                                onChange={handlePasswordChange} 
                                onFocus={handlePasswordFocus} 
                                onBlur={handlePasswordBlur} 
                            />
                            {showPasswordInfo && (
                                <div className="DatosContrasena">
                                    Debe tener:<br />
                                    1 Mayúscula<br />
                                    8 caracteres como mínimo
                                </div>
                            )}
                            {uppercaseError && <p className="error-message">{uppercaseError}</p>}
                            {lengthError && <p className="error-message">{lengthError}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmeContrasena" className="ConfirmeContrasena label-form">Confirme Contraseña*</label>
                            <input 
                                type="password" 
                                id="confirmeContrasena" 
                                className="form-control Rectangulo9" 
                                value={confirmPassword} 
                                onChange={handleConfirmPasswordChange} 
                            />
                            {passwordMismatchError && <p className="error-message">{passwordMismatchError}</p>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="rut" className="Rut label-form">Rut*</label>
                            <input 
                                type="text" 
                                id="rut" 
                                name="rut" 
                                className={`form-control Rectangulo6 ${rutError ? 'input-error' : ''}`} 
                                value={rut} 
                                onChange={handleRutChange} 
                                placeholder="12345678-9"
                            />
                            {rutError && <p className="error-message">{rutError}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo" className="Correo label-form">Correo electrónico*</label>
                            <input type="email" id="correo" className="form-control Rectangulo7" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="genero" className="Genero label-form">Género*</label>
                            <select id="genero" className="form-control Rectangulo8">
                                <option value="" disabled selected>Seleccione su género</option>
                                <option value="male">Masculino</option>
                                <option value="female">Femenino</option>
                                <option value="other">Otro</option>
                                <option value="pn">Prefiero no decirlo</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="fechaNacimiento" className="FechaNacimiento label-form">Fecha de Nacimiento (DD/MM/AAAA)*</label>
                            <input type="date" id="fechaNacimiento" className="form-control Rectangulo4" />
                        </div>

                    </div>
                </div>
            </article>
            <article className="DatosPersonalesCoach">
                <h2 className='tit'>Formación Academica</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="nombreCompleto" className="NombreCompleto label-form">Área de especialización*</label>
                            <select id="genero" className="form-control Rectangulo8">
                                <option value="" disabled selected>Seleccione su especialización</option>
                                <option value="male">Redes Sociales</option>
                                <option value="female">Comunicación</option>
                                <option value="other">Páginas web</option>
                                <option value="pn">Otro</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="region" className="Region label-form">Certificaciones(opcional)*</label>
                            <br />
                            <FileUploadButton id="1" />
                        </div>
                        
                        <div className="form-group ">
                            <label htmlFor="rut" className="Rut label-form">Formación Academica(opcional)*</label>
                            <FileUploadButton id="2" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="region" className="Region label-form">
                                Disponibilidad Horaria*</label>
                            <select id="genero" className="form-control Rectangulo8">
                                <option value="" disabled selected>Seleccione su Disponibilidad</option>
                                <option value="male">Lunes a Viernes</option>
                                <option value="male">Sabado y Domingo</option>
                                <option value="other">Personalizado(conversar con cliente)</option>
                            </select>
                            
                           
                        </div>

                    </div>
                    <div className="col-md-6"> 
                        <div className="form-group">
                            <label htmlFor="correo" className="Correo label-form">Danos una breve descripción de ti, junto con tu experiencia en Mentorías y/o Marketing.<br></br>(MAX 2000 carácteres)*</label>
                            <textarea type="text" id="correo" className=" form-control Rectangulo7 TEXTA" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="genero" className="Genero label-form">Foto De Perfil*</label>
                            
                            <FotoPerfil />
                        </div>
                    </div>
                </div>
            </article>
            <Popup />
        </article>
    );
};

export default Form;


