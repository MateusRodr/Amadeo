import ComoTrabalhamos from "../sections/ComoTrabalhamos";
import Contato from "../sections/Contato";
import Diferenciais from "../sections/Diferenciais";
import Hero from "../sections/Hero";
import NossaHistoria from "../sections/NossaHistoria";
import SegurancaTrabalho from "../sections/SegurancaTrabalho";
import Servicos from "../sections/Servicos";
import SobreNos from "../sections/SobreNos";
import Sustentabilidade from "../sections/Sustentabilidade";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SobreNos />
      <NossaHistoria />
      <Servicos />
      <SegurancaTrabalho />
      <Diferenciais />
      <Sustentabilidade />
      <ComoTrabalhamos />
      <Contato />
    </>
  );
}
