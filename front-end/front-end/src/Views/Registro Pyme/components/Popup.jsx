import "./Popup.css";
import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import LogoNegro from '../components/img/LogoNegro.png';
import { useNavigate } from 'react-router-dom';

class Popup extends Component {
  state = {
    abierto: false,
  };

  abrirmodal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  render() {
    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    return (
      <>
        <div className="principal" id="principal">
          <div className="secundario" id="secundario">
            <Button className="BOTONPOP" onClick={this.abrirmodal}>
              Siguiente →
            </Button>
          </div>
        </div>
        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>Registro Exitoso</ModalHeader>
          <ModalBody>
            Felicidades, ya eres parte de DigitAll Connect
            <img
              src={LogoNegro}
              alt="LogoNegro"
              style={{ width: "50%", marginTop: "20px" }}
            />
          </ModalBody>
          <ModalFooter>
            <Button className="BOTONOPCI" onClick={() => this.props.navigate("/")}>
              Volver al Inicio
            </Button>
            <Button className="BOTONOPCI" onClick={() => this.props.navigate("/miPerfilPyme")}>
              Ver mi Perfil
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

function PopupWrapper() {
  const navigate = useNavigate();
  return <Popup navigate={navigate} />;
}

export default PopupWrapper;
