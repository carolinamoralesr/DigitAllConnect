import "./Popup.css";
import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";

class Popup extends Component {
  state = {
    abierto: false,
  };

  abrirmodal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  render() {
    const { navigate } = this.props;

    const modalStyles = {
      position: "absolute",
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
      <>
        <div className="principall">
          <div className="secundarioo">
            <Button className="BOTONPOP" onClick={this.abrirmodal}>Siguiente →</Button>
          </div>
        </div>
        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>
            Registro Exitoso
          </ModalHeader>

          {/* <ModalBody>
              
          </ModalBody> */}

          <ModalFooter>
            <Button className="BOTONOPCI" onClick={() => navigate("/paginaPrincipal")}>
              Volver al Inicio
            </Button>
            <Button className="BOTONOPCI" onClick={() => navigate("/MiPerfilCoach")}>
              Ver mi Perfil
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

// Crear un componente de orden superior para usar hooks dentro de una clase
const withNavigation = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};

export default withNavigation(Popup);
