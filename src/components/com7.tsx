import manejoFlorestal from "../assets/manejo-florestal.jpg";
import plantio from "../assets/plantio.jpg";

export default function BannerManejoFlorestal() {
  return (
    <section
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-white
      "
      style={{
        fontFamily:
          "'Poppins', ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Foto de plantio usada como textura de fundo */}
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
          scale-110
          object-cover
          object-center
          opacity-[0.12]
          grayscale
        "
      />

      {/* Camada branca por cima da textura */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-white/60
        "
        aria-hidden="true"
      />

      {/* Grande círculo azul formando o arco */}
      <div
        className="
          pointer-events-none
          absolute
          left-[27%]
          top-1/2
          h-[145%]
          aspect-square
          -translate-y-1/2
          rounded-full
          bg-[#004A81]/95
        "
        aria-hidden="true"
      />

      {/* Foto circular */}
      <div
        className="
          absolute
          left-[clamp(34px,4vw,76px)]
          top-[clamp(28px,4vh,68px)]
          z-20
          h-[clamp(300px,34vw,560px)]
          aspect-square
          overflow-hidden
          rounded-full
          border-[clamp(6px,0.5vw,9px)]
          border-white
          bg-white
          shadow-[0_12px_28px_rgba(0,0,0,0.12)]
        "
      >
        <img
          src={manejoFlorestal}
          alt="Guindaste manuseando tronco em área de manejo florestal"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* Conteúdo */}
      <div
        className="
          absolute
          inset-0
          z-30
          flex
          items-center
        "
      >
        <div
          className="
            ml-[clamp(380px,51vw,980px)]
            w-[clamp(420px,40vw,720px)]
            -translate-y-[1%]
            text-left
          "
        >
          {/* Badge */}
          <span
            className="
              mb-[clamp(18px,2vh,28px)]
              inline-flex
              rounded-full
              bg-white
              px-[clamp(18px,1.5vw,26px)]
              py-[clamp(7px,0.55vw,10px)]
              text-[clamp(13px,0.95vw,17px)]
              font-semibold
              leading-none
              text-[#004A81]
            "
          >
            Manejo Florestal
          </span>

          {/* Título */}
          <h2
            className="
              mb-[clamp(20px,2.6vh,34px)]
              max-w-[690px]
              text-[clamp(38px,3.4vw,64px)]
              font-bold
              leading-[1.14]
              tracking-[-0.02em]
              text-white
            "
          >
            Gestão e desenvolvimento
            <br />
            sustentável das florestas
          </h2>

          {/* Descrição */}
          <p
            className="
              max-w-[660px]
              text-[clamp(16px,1.18vw,22px)]
              leading-[1.55]
              text-white/95
            "
          >
            Oferecemos serviços de manejo florestal voltados à manutenção,
            desenvolvimento e produtividade das áreas plantadas, garantindo que
            as operações sejam conduzidas de forma organizada e eficiente.
          </p>
        </div>
      </div>
    </section>
  );
}
