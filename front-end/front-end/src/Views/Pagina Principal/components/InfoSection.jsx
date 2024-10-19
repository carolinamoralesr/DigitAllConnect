import React from 'react';
import "./InfoSection.css";
import InfoCard from "./InfoCard";

const InfoSection = () => (
  <section className="info-section">
    <InfoCard
      heading="Tengo una Pyme"
      benefitTitle={"Beneficios"}
      benefits={[
        "🞄 Conéctate con mentores experimentados para recibir asesoramiento personalizado.",
        "🞄 Obtén apoyo en áreas críticas como marketing digital, gestión de redes sociales y postulación a fondos estatales.",
        "🞄 Accede a una red de contactos y oportunidades comerciales que te ayudarán a crecer.",
      ]}
      catchFrase="¡Regístrate hoy y da el primer paso hacia el crecimiento y éxito de tu pyme!"
    />
    <InfoCard
      heading="Quiero ser Coach"
      benefitTitle={"Beneficios"}
      benefits={[
        "🞄 Desarrolla tus habilidades de liderazgo, coaching y comunicación.",
        "🞄 Aprende y crece profesionalmente al compartir tu experiencia con otros.",
        "🞄 Controla tu disponibilidad y el tipo de apoyo que deseas brindar.",
      ]}
      catchFrase="¡Regístrate hoy como coach en DigitAll Connect y comienza a inspirar y guiar a la próxima generación de emprendedores digitales en Chile!"
    />
  </section>
);

export default InfoSection;
