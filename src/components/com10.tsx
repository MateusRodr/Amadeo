import React from "react";
import eucalipto from "../assets/eucalipto.jpg";

const GREEN = "#65B33B";
const TEXT_COLOR = "#595959";

interface BulletItemProps {
  children: React.ReactNode;
}

const BulletItem: React.FC<BulletItemProps> = ({ children }) => {
  return (
    <div className="flex w-full items-start gap-[clamp(16px,1.5vw,26px)]">
      <span
        className="
          mt-[5px]
          h-[clamp(17px,1.25vw,22px)]
          w-[clamp(17px,1.25vw,22px)]
          shrink-0
          rounded-full
        "
        style={{ backgroundColor: GREEN }}
        aria-hidden="true"
      />

      <p
        className="
          m-0
          max-w-[430px]
          text-[clamp(13px,0.9vw,16px)]
          leading-[1.35]
        "
        style={{ color: TEXT_COLOR }}
      >
        {children}
      </p>
    </div>
  );
};

const ForestServicesSlide: React.FC = () => {
  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-white
      "
      style={{
        fontFamily: "'Poppins', 'Mulish', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* Coluna esquerda */}
      <div className="relative z-10 flex min-h-[100svh] w-[65%] items-center">
        {/* Círculo verde-claro da esquerda */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-1/2
            h-[clamp(410px,56vw,640px)]
            w-[clamp(410px,56vw,640px)]
            -translate-x-[58%]
            -translate-y-1/2
            rounded-full
            opacity-[0.08]
          "
          style={{ backgroundColor: GREEN }}
          aria-hidden="true"
        />

        {/* Lista */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            max-w-[540px]
            flex-col
            gap-[clamp(24px,4vh,42px)]
            px-[clamp(28px,9vw,120px)]
            py-[clamp(40px,7vh,80px)]
            lg:px-0
            lg:pl-[clamp(70px,9vw,145px)]
          "
        >
          <BulletItem>
            Contamos com uma equipe preparada e comprometida, capaz de executar
            as atividades com organização, eficiência e alto padrão de qualidade
            em todas as etapas dos serviços florestais e agrícolas.
          </BulletItem>

          <BulletItem>
            Cada operação é planejada com atenção técnica e foco em resultados,
            buscando sempre oferecer agilidade, precisão e confiabilidade nas
            atividades realizadas em campo.
          </BulletItem>

          <BulletItem>
            Nossos serviços seguem práticas responsáveis e padrões de segurança,
            respeitando as exigências ambientais e priorizando o cuidado com as
            pessoas e com o meio ambiente. Trabalhamos com o compromisso de
            contribuir para uma produção sustentável e responsável.
          </BulletItem>
        </div>
      </div>

      {/* Imagem direita */}
      <div className="relative block min-h-[100svh] w-[35%]">
        <img
          src={eucalipto}
          alt="Plantação de eucalipto"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Faixa curva verde */}
        <svg
          className="absolute -left-[170px] top-0 h-full w-[250px]"
          viewBox="0 0 250 100"
          preserveAspectRatio="none"
        >
          <path
            d="
                M250 0
                L80 0
                C180 18,180 82,80 100
                L250 100
                Z
              "
            fill={GREEN}
          />
        </svg>
      </div>

      {/* Mobile */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[5px]
          lg:hidden
        "
        style={{ backgroundColor: GREEN }}
      />
    </section>
  );
};

export default ForestServicesSlide;
