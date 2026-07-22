import React from "react";
import { ArrowRight, Mail } from "lucide-react";

import logo from "../assets/amadeo-horizontal.png";
import tractorImg from "../assets/Pasted-image.png";
import SobreNos from "./com2";
import ServiceCard from "./com4";

const AmadeoHero: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes amadeoHeroImage {
            from {
              transform: scale(1.06);
            }

            to {
              transform: scale(1);
            }
          }

          @keyframes amadeoHeroBlue {
            from {
              opacity: 0;
              transform: translate(-5%, -4%) scale(1.05);
            }

            to {
              opacity: 1;
              transform: translate(0, 0) scale(1);
            }
          }

          @keyframes amadeoHeroGreen {
            from {
              opacity: 0;
              transform: translateX(-5%) scale(1.03);
            }

            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes amadeoHeroContent {
            from {
              opacity: 0;
              transform: translateY(26px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes amadeoHeroBottom {
            from {
              opacity: 0;
              transform: translateY(30%);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .amadeo-hero-image {
            animation: amadeoHeroImage 2.2s ease-out both;
          }

          .amadeo-hero-blue {
            animation: amadeoHeroBlue 1.2s ease-out both;
          }

          .amadeo-hero-green {
            animation: amadeoHeroGreen 1s ease-out both;
          }

          .amadeo-hero-content {
            animation: amadeoHeroContent 0.9s ease-out 0.25s both;
          }

          .amadeo-hero-bottom {
            animation: amadeoHeroBottom 1.2s ease-out 0.35s both;
          }

          /*
           * Desktop:
           * círculos grandes posicionados para formar o recorte lateral.
           */
          .amadeo-blue-shape {
            width: max(1050px, 108vw);
            height: max(1050px, 108vw);
            left: min(-58vw, -650px);
            top: min(-51vw, -520px);
          }

          .amadeo-green-shape {
            width: max(1100px, 114vw);
            height: max(1100px, 114vw);
            left: min(-66vw, -760px);
            top: min(-45vw, -440px);
          }

          /*
           * Notebook pequeno e tela dividida.
           */
          @media (max-width: 1180px) {
            .amadeo-blue-shape {
              width: 1250px;
              height: 1250px;
              left: -890px;
              top: -500px;
            }

            .amadeo-green-shape {
              width: 1300px;
              height: 1300px;
              left: -970px;
              top: -470px;
            }
          }

          /*
           * Tablet e tela dividida mais estreita.
           * A área verde passa a ocupar mais largura para o texto
           * não ficar em cima da imagem.
           */
          @media (max-width: 900px) {
            .amadeo-blue-shape {
              width: 1250px;
              height: 1250px;
              left: -795px;
              top: -450px;
            }

            .amadeo-green-shape {
              width: 1300px;
              height: 1300px;
              left: -875px;
              top: -420px;
            }
          }

          /*
           * Celular:
           * substitui os círculos gigantes por um painel verde
           * com borda curva.
           */
          @media (max-width: 640px) {
            .amadeo-blue-shape {
              display: none;
            }

            .amadeo-green-shape {
              width: 118%;
              height: 76%;
              left: -18%;
              top: 0;
              border-radius: 0 0 52% 0;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .amadeo-hero-image,
            .amadeo-hero-blue,
            .amadeo-hero-green,
            .amadeo-hero-content,
            .amadeo-hero-bottom {
              animation: none;
            }
          }
        `}
      </style>

      <section
        className="
          relative
          isolate
          min-h-[100svh]
          w-full
          overflow-hidden
          bg-[#65B33B]
        "
        style={{
          fontFamily:
            "'Poppins', ui-sans-serif, system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Imagem principal */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={tractorImg}
            alt="Trator trabalhando em uma área agrícola"
            className="
              amadeo-hero-image
              h-full
              w-full
              object-cover
              object-[68%_center]
              sm:object-[65%_center]
              lg:object-[72%_center]
            "
          />

          {/* Ajuda na leitura quando a tela fica estreita */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/15
              via-transparent
              to-transparent
              sm:hidden
            "
          />
        </div>

        {/* Arco azul */}
        <div
          className="
            amadeo-hero-blue
            amadeo-blue-shape
            pointer-events-none
            absolute
            z-10
            rounded-full
            bg-[#004A81]
          "
          aria-hidden="true"
        />

        {/* Forma verde */}
        <div
          className="
            amadeo-hero-green
            amadeo-green-shape
            pointer-events-none
            absolute
            z-20
            rounded-full
            bg-[#65B33B]
          "
          aria-hidden="true"
        />

        {/* Forma verde inferior */}
        <div
          className="
            amadeo-hero-bottom
            pointer-events-none
            absolute
            bottom-[-14%]
            right-[-9%]
            z-20
            h-[38%]
            w-[55%]
            rounded-[55%_0_0_0/100%_0_0_0]
            bg-[#65B33B]/65
            backdrop-blur-[1px]

            max-lg:h-[30%]
            max-lg:w-[58%]

            max-sm:bottom-[-9%]
            max-sm:h-[23%]
            max-sm:w-[85%]
          "
          aria-hidden="true"
        />

        {/* Forma azul inferior */}
        <div
          className="
            amadeo-hero-bottom
            pointer-events-none
            absolute
            bottom-[-24%]
            right-[7%]
            z-20
            h-[36%]
            w-[48%]
            rounded-[50%_50%_0_0/100%_100%_0_0]
            bg-[#004A81]/20

            max-lg:h-[30%]
            max-lg:w-[55%]

            max-sm:hidden
          "
          aria-hidden="true"
        />

        {/* Conteúdo */}
        <div
          className="
            amadeo-hero-content
            relative
            z-30
            flex
            min-h-[100svh]
            w-full
            items-center
            px-[clamp(28px,5vw,72px)]
            py-[clamp(40px,7vh,80px)]

            max-sm:items-start
            max-sm:px-6
            max-sm:pb-28
            max-sm:pt-16
          "
        >
          <div
            className="
              w-full
              max-w-[540px]

              max-xl:max-w-[470px]
              max-lg:max-w-[410px]
              max-md:max-w-[370px]
              max-sm:max-w-[330px]
            "
          >
            <img
              src={logo}
              alt="Amadeo Serviços Agroflorestais"
              className="
                mb-[clamp(28px,5vh,52px)]
                w-[clamp(145px,14vw,235px)]
                brightness-0
                invert

                max-lg:mb-8
                max-sm:w-[145px]
              "
            />

            <h1
              className="
                mb-[clamp(26px,4vh,42px)]
                text-[clamp(34px,3.7vw,60px)]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-white

                max-xl:text-[42px]
                max-lg:text-[36px]
                max-md:text-[32px]
                max-sm:text-[30px]
              "
            >
              Serviços Florestais e Agrícolas com Eficiência e Experiência
            </h1>

            <a
              href="#sobre"
              className="
                group
                inline-flex
                max-w-full
                items-center
                justify-between
                gap-3
                rounded-full
                border
                border-white
                px-5
                py-3
                text-[14px]
                font-medium
                text-white
                transition
                duration-300

                hover:-translate-y-0.5
                hover:bg-white
                hover:text-[#004A81]
                hover:shadow-lg

                max-sm:w-full
                max-sm:px-4
                max-sm:text-[12px]
              "
            >
              <span className="min-w-0">
                Conheça a Amadeo Serviços Agroflorestais
              </span>

              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-current
                  transition
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={15} />
              </span>
            </a>

            <a
              href="mailto:amadeo@amadeoagroflorestal.com.br"
              className="
    mt-[clamp(32px,6vh,60px)]
    flex
    w-fit
    max-w-full
    items-center
    gap-3
    text-[15px]
    font-medium
    leading-relaxed
    text-white
    transition
    hover:opacity-75

    max-lg:text-[14px]
    max-sm:mt-8
    max-sm:text-[13px]
  "
            >
              <Mail className="shrink-0" size={18} strokeWidth={1.8} />

              <span className="break-all sm:break-normal">
                amadeo@amadeoagroflorestal.com.br
              </span>
            </a>
          </div>
        </div>
      </section>
      <div>
        <SobreNos />
        <ServiceCard imageSrc={""} badge={""} title={""} description={""} />
      </div>
    </>
  );
};

export default AmadeoHero;
