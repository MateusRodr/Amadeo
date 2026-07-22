import manejo from "../assets/manejo.jpg";

export default function BannerManejoAgricola() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        aspect-[786/419]
        bg-white
      "
    >
      {/* Textura de fundo (opcional) */}
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      {/* Círculo verde decorativo, cortado no canto inferior esquerdo */}
      <div
        className="
          absolute bottom-0 left-0
          h-40 sm:h-52 aspect-square
          -translate-x-1/3 translate-y-1/2
          rounded-full
          bg-[#65B33B]
        "
      />

      {/* Foto circular com anel verde */}
      <div
        className="
          absolute left-6 sm:left-10 top-6 sm:top-8
          h-[55%] aspect-square
          rounded-full overflow-hidden
          ring-[6px] ring-[#65B33B]
          shadow-lg
          z-10
        "
      >
        <img
          src={manejo}
          alt="Produtor rural analisando plantação"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Conteúdo de texto */}
      <div
        className="
          absolute inset-0
          flex items-center justify-center
          pl-[38%] pr-6 sm:pr-10
        "
      >
        <div className="max-w-lg text-center">
          {/* Badge / eyebrow */}
          <span
            className="
              inline-block rounded-full bg-[#004A81]
              px-4 py-1.5
              text-xs sm:text-sm font-semibold
              text-[#FFFFFF]
              mb-4
            "
          >
            Manejo Agrícola
          </span>

          {/* Título */}
          <h2
            className="
              text-2xl sm:text-3xl lg:text-4xl
              font-bold leading-tight
              text-[#65B33B]
              mb-4
            "
          >
            Cuidados técnicos para melhor desempenho das lavouras e florestas
          </h2>

          {/* Descrição */}
          <p
            className="
              text-sm sm:text-base
              leading-relaxed
              text-[#595959]
            "
          >
            Executamos atividades de manejo agrícola voltadas à manutenção e
            desenvolvimento das áreas cultivadas, contribuindo para a saúde das
            culturas e para a eficiência das operações no campo.
          </p>
        </div>
      </div>
    </section>
  );
}
