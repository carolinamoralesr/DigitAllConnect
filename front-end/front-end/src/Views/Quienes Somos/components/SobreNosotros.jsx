import img1 from './imagen1.png'

const SobreNosotros = () => {
  return (
    <div className="container-fluid container-sobreNosotros">
      <div className="row">
        <div className="col-12">
          <img src={img1} alt="Imagen principal" className="img-fluid float-start me-3 mb-3 imagen1" />
          <section className="Sobre-Nosotros">
            <p>
              <span className="nombre">DigitAll Connect</span> es más que una plataforma; es el lugar donde <span className="letrasAzules">convergen</span> la <span className="letrasAzules">visión</span>
              empresarial y el <span className="letrasAzules">talento</span> creativo.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
