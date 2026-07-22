import tratorOne from "../assets/tratordoc.jpg";

export default function BannerResponsabilidadeDedicacao() {
  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-[100svh]
        w-full
        items-center
        overflow-hidden
        bg-[#65B33B]
      "
      style={{
        fontFamily:
          "'Poppins', ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Fundo da imagem bem suave */}
      <img
        src={tratorOne}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          scale-110
          object-cover
          object-center
          opacity-[0.13]
          grayscale
          mix-blend-multiply
        "
      />

      {/* Camada verde sobre a textura */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[#65B33B]/85
        "
        aria-hidden="true"
      />

      {/* Círculo branco gigante formando o arco da direita */}
      <div
        className="
          pointer-events-none
          absolute
          left-[70%]
          top-1/2
          z-10
          h-[155%]
          aspect-square
          -translate-y-1/2
          rounded-full
          bg-white
        "
        aria-hidden="true"
      />

      {/* Conteúdo esquerdo */}
      <div
        className="
          relative
          z-30
          flex
          min-h-[100svh]
          w-[58%]
          items-center
          pl-[clamp(36px,8vw,135px)]
          pr-[clamp(170px,14vw,260px)]
          py-[clamp(48px,8vh,100px)]
        "
      >
        <div className="w-full max-w-[650px]">
          {/* Badge */}
          <span
            className="
              mb-[clamp(20px,3vh,34px)]
              inline-flex
              rounded-full
              bg-white
              px-[clamp(17px,1.4vw,25px)]
              py-[clamp(7px,0.6vw,10px)]
              text-[clamp(13px,0.95vw,17px)]
              font-semibold
              leading-none
              text-[#004A81]
            "
          >
            Responsabilidade e dedicação
          </span>

          {/* Título */}
          <h2
            className="
              mb-[clamp(22px,3vh,36px)]
              max-w-[600px]
              text-[clamp(38px,3.7vw,65px)]
              font-bold
              leading-[1.08]
              tracking-[-0.025em]
              text-white
            "
          >
            Compromisso com
            <br />
            qualidade e resultados
          </h2>

          {/* Descrição */}
          <p
            className="
              max-w-[590px]
              text-[clamp(15px,1.2vw,21px)]
              leading-[1.55]
              text-white/95
            "
          >
            Na Amadeo Serviços Agroflorestais, acreditamos que resultados
            consistentes são fruto de planejamento, organização e compromisso.
            Por isso, cada serviço é executado com atenção aos detalhes, foco na
            segurança e respeito ao meio ambiente, sempre buscando atender
            nossos clientes com eficiência e confiança.
          </p>
        </div>
      </div>

      {/* Foto circular */}
      <div
        className="
          absolute
          left-[58%]
          top-1/2
          z-40
          h-[clamp(360px,38vw,650px)]
          aspect-square
          -translate-x-1/2
          -translate-y-1/2
          overflow-hidden
          rounded-full
          bg-white
          shadow-[0_16px_35px_rgba(0,0,0,0.15)]
        "
      >
        <img
          src={tratorOne}
          alt="Trator agrícola trabalhando no campo"
          className="
            h-full
            w-full
            object-cover
            object-[50%_58%]
          "
        />
      </div>
    </section>
  );
}
