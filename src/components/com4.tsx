import tratorone from "../assets/tratorone.png";
import ForestServicesSlide from "./com10";
import AmadeoContactCard from "./com11";
import ServiceCard2 from "./com5";
import BannerPlantio from "./com6";
import BannerManejoFlorestal from "./com7";
import BannerManejoAgricola from "./com8";
import BannerResponsabilidadeDedicacao from "./com9";

export default function ServiceCard({
  imageAlt = "",
  textureSrc,
}: {
  imageAlt?: string;
  textureSrc?: string;
  imageSrc: string;
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden bg-white shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Coluna da imagem com a curva sobreposta */}
        <div className="relative h-64 md:h-[600px] overflow-hidden">
          <img
            src={tratorone}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Curva Azul sobreposta à imagem */}
          <div className="absolute inset-y-0 right-0 w-1/3 h-full hidden md:block">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path d="M100 0 C 30 0, 30 100, 100 100 Z" fill="#004A81" />
            </svg>
          </div>

          {/* Curva Branca principal separando o conteúdo */}
          <div className="absolute inset-y-0 -right-1 w-1/3 h-full hidden md:block">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path d="M100 0 C 50 0, 50 100, 100 100 Z" fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* Coluna de conteúdo */}
        <div className="relative flex flex-col justify-center gap-6 px-10 py-16 md:px-20 md:py-24 bg-branco">
          {/* Textura de fundo sutil (se houver) */}
          {textureSrc && (
            <img
              src={textureSrc}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.03]"
            />
          )}

          {/* Badge */}
          <span className="relative z-10 inline-flex w-fit items-center rounded-full bg-[#004A81] px-6 py-2 text-sm font-semibold text-branco tracking-wide uppercase text-white">
            Limpeza de Área
          </span>

          {/* Título */}
          <h2 className="relative z-10 text-4xl font-extrabold leading-tight text-[#65B33B] md:text-5xl">
            Preparação de áreas para novos projetos produtivos
          </h2>

          {/* Descrição */}
          <p className="relative z-10 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            Realizamos serviços de limpeza de áreas destinados à preparação do
            terreno para atividades agrícolas e florestais. A operação é
            executada com planejamento e eficiência, garantindo que o local
            esteja adequado para as próximas etapas de implantação ou manejo.
          </p>

          {/* Círculo verde decorativo no canto inferior */}
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-[#65B33B] opacity-90 hidden md:block" />
        </div>
      </div>
      <ServiceCard2 imageSrc={""} badge={""} title={""} description={""} />
      <BannerPlantio />
      <BannerManejoFlorestal />
      <BannerManejoAgricola />
      <BannerResponsabilidadeDedicacao />
      <ForestServicesSlide />
      <AmadeoContactCard />
    </div>
  );
}
