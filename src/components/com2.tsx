import AtuacaoAltaPerformance from "./com3";
import plantio from "../assets/plantio.jpg";

export default function SobreNos() {
  return (
    <div
      className="
        relative
        overflow-hidden
        bg-[#F4F4F2]
        font-['Inter',system-ui,sans-serif]
      "
    >
      <section
        className="
          relative
          min-h-[100svh]
          w-full
          overflow-hidden
        "
      >
        {/* Imagem suave no fundo */}
        <img
          src={plantio}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
            scale-105
            object-cover
            object-center
            opacity-[0.12]
            grayscale
          "
        />

        {/* Camada branca opaca */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-white/65
          "
          aria-hidden="true"
        />

        {/* Área visual esquerda */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-10
            w-[48%]
            overflow-hidden
          "
          aria-hidden="true"
        >
          {/* Grupo dos círculos */}
          <div
            className="
              absolute
              left-[-10%]
              top-1/2
              h-[clamp(460px,52vw,760px)]
              aspect-square
              -translate-y-[62%]
            "
          >
            {/* Imagem circular */}
            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-full
                bg-white
              "
            >
              <img
                src={plantio}
                alt=""
                className="
                  h-full
                  w-full
                  object-cover
                  object-[55%_40%]
                "
              />
            </div>

            {/* Círculo verde sobreposto */}
            <div
              className="
                absolute
                left-[-4%]
                top-[57%]
                h-[92%]
                aspect-square
                rounded-full
                bg-[#65B33B]
                opacity-90
              "
            />
          </div>
        </div>

        {/* Conteúdo */}
        <div
          className="
            relative
            z-20
            ml-auto
            flex
            min-h-[100svh]
            w-[56%]
            items-center
            px-[clamp(36px,6vw,110px)]
            py-[clamp(48px,7vh,90px)]
          "
        >
          <div className="w-full max-w-[650px]">
            <span
              className="
                mb-[clamp(18px,2.5vh,28px)]
                inline-flex
                rounded-full
                bg-[#004A81]
                px-[clamp(18px,1.5vw,25px)]
                py-[clamp(7px,0.6vw,10px)]
                text-[clamp(13px,0.9vw,16px)]
                font-semibold
                leading-none
                text-white
              "
            >
              Sobre nós
            </span>

            <h1
              className="
                mb-[clamp(22px,3vh,34px)]
                max-w-[620px]
                text-[clamp(36px,3.6vw,62px)]
                font-extrabold
                leading-[1.08]
                tracking-[-0.025em]
                text-[#65B33B]
              "
            >
              Experiência e compromisso com o campo
            </h1>

            <p
              className="
                max-w-[630px]
                text-[clamp(16px,1.2vw,21px)]
                leading-[1.65]
                text-[#3A3F3D]
              "
            >
              Com 9 anos de atuação, a Amadeo Serviços Agroflorestais está
              localizada em Água Clara – MS e se destaca pela dedicação,
              responsabilidade e conhecimento das atividades florestais e
              agrícolas, oferecendo suporte operacional confiável para
              diferentes etapas do manejo e preparo de áreas produtivas.
            </p>
          </div>
        </div>
      </section>

      <AtuacaoAltaPerformance />
    </div>
  );
}
