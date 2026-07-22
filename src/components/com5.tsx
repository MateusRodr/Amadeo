import trator from "../assets/trator.png";
export default function ServiceCard2({
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
    <div className="overflow-hidden bg-branco">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Coluna de conteúdo (agora à ESQUERDA) */}
        <div className="relative flex flex-col justify-center gap-6 px-10 py-16 md:px-20 md:py-24 bg-branco order-2 md:order-1">
          {/* Textura de fundo sutil */}
          {textureSrc && (
            <img
              src={textureSrc}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.03]"
            />
          )}

          {/* Badge */}
          <span className="relative z-10 inline-flex w-fit items-center rounded-full bg-[#004A81] px-6 py-2 text-sm font-semibold text-white tracking-wide uppercase">
            Preparo de solo
          </span>

          {/* Título */}
          <h2 className="relative z-10 text-4xl font-extrabold leading-tight text-[#65B33B] md:text-5xl">
            Base estruturada para alta eficiência
          </h2>

          {/* Descrição */}
          <p className="relative z-10 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
            Executamos o preparo do solo com técnicas adequadas para
            proporcionar melhores condições de desenvolvimento para culturas
            agrícolas e florestais. O trabalho é realizado visando qualidade,
            uniformidade e melhor aproveitamento do potencial produtivo da área.
          </p>
        </div>

        {/* Coluna da imagem (agora à DIREITA) */}
        <div className="relative flex items-center justify-center h-[400px] md:h-[600px] order-1 md:order-2">
          {/* Bolinha verde decorativa atrás, canto superior direito */}
          <div className="absolute top-0 right-0 h-40 w-40 md:h-80 md:w-80 rounded-full bg-[#65B33B] opacity-90" />

          {/* Anel azul + foto circular */}
          <div className="relative h-[580px] w-[480px] md:h-[420px] md:w-[420px]">
            {/* Anel azul (borda curva) */}
            <div className="absolute inset-0 rounded-full bg-[#004A81] rotate-12" />

            {/* Foto mascarada em círculo, levemente deslocada para criar o efeito de "crescente" azul */}
            <div className="absolute inset-0 translate-x-3 -translate-y-1 rounded-full overflow-hidden ">
              <img
                src={trator}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
