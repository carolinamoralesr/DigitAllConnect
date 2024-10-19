
import SobreNosotros from './components/SobreNosotros';
import InfoSobreNosotros from './components/InfoSobreNosotros';
import QueHacemos from './components/QueHacemos';
import PropositoQueNosUne from './components/PropositoQueNosUne';
import TeSumas from './components/TeSumas';
import './QuienesSomos.css';

function App() {
  return (
    <div className="quienes-somos">
      <SobreNosotros />
      <InfoSobreNosotros />
      <QueHacemos />
      <PropositoQueNosUne />
      <TeSumas />
    </div>
  );
}

export default App;
