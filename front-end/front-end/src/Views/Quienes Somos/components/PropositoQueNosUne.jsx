
import img3 from './imagen3.png'

const PropositoQueNosUne = () => {
  return (
    <div className="col-md-12">
      <section className="text-center proposito-que-nos-une">
        <h2 className="titulo-proposito">El propósito que nos une...</h2>
        <p className="text-start mb-4 parrafo-proposito">
          Buscamos impulsar el crecimiento de las micro y pequeñas empresas mediante su integración en
          el mundo digital, permitiéndoles ampliar su alcance e interacción en redes sociales y
          páginas web. Para ello, se fomentará la contratación de profesionales con o sin experiencia
          y jóvenes en formación en áreas de marketing digital, publicidad o áreas afines.
        </p>
        <img src={img3} alt="Imagen sobre nuestro propósito" className="imagen1234" />
      </section>
    </div>
  );
};

export default PropositoQueNosUne;
