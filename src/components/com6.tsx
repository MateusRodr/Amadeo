import forest from "../assets/forest.jpg";

export default function BannerPlantio() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        aspect-[786/419]
        bg-neutral-900
      "
    >
      {/* Imagem de fundo */}
      <img
        src={forest}
        alt="Floresta de pinheiros"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Círculo azul gigante que cria o efeito de curva */}
      <div
        className="
          absolute top-1/2 right-0
          h-[170%] aspect-square
          -translate-y-1/2 translate-x-[28%]
          rounded-full
          bg-[#004A81]
        "
      />

      {/* Conteúdo de texto */}
      <div
        className="
          absolute inset-0
          flex items-center
          pl-[42%] pr-6 sm:pr-12
        "
      >
        <div className="max-w-md">
          {/* Badge / eyebrow */}
          <span
            className="
              inline-block rounded-full bg-white
              px-4 py-1.5
              text-xs sm:text-sm font-semibold
              text-[#004A81]
              mb-4
            "
          >
            Plantio
          </span>

          {/* Título */}
          <h2
            className="
              text-2xl sm:text-3xl lg:text-4xl
              font-bold leading-tight
              text-[#FFFFFF]
              mb-4
            "
          >
            Implantação de cultivos
            <br />
            com precisão
          </h2>

          {/* Descrição */}
          <p
            className="
              text-sm sm:text-base
              leading-relaxed
              text-[#FFFFFF]/90
            "
          >
            Realizamos o plantio de culturas florestais e agrícolas seguindo
            boas práticas operacionais, garantindo organização, qualidade no
            processo e condições adequadas para o desenvolvimento saudável das
            plantas.
          </p>
        </div>
      </div>
    </section>
  );
}
