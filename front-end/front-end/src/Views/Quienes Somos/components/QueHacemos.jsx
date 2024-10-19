
import img2 from './imagen2.png'

const QueHacemos = () => {
  return (
    <div className="col-md-12">
      <img src={img2} alt="Imagen sobre lo que hacemos" className="img-fluid float-end me-3 mb-3 imagen2" />
      <section className="queHacemos">
        <h2 className="titulo-queHacemos">¿Qué hacemos?</h2>
        <p className="text-start mb-4 parrafo-queHacemos">
          DigitAll Connect es una plataforma en línea que conecta empresas y emprendedores que necesitan
          digitalizarse con profesionales y estudiantes que pueden brindar servicios especializados y
          colaborar de manera segura y eficiente.
        </p>
      </section>
    </div>
  );
};

export default QueHacemos;
