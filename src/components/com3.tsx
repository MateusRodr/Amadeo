import tratores from "../assets/tratores.jpg";

const servicos = [
  "Limpeza de área",
  "Preparo de solo",
  "Plantio",
  "Manejo florestal",
  "Manejo agrícola",
];

export default function AtuacaoAltaPerformance() {
  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-white
      "
      style={{
        fontFamily:
          "'Poppins', ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Imagem suave de fundo */}
      <img
        src={tratores}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          h-full
          w-full
          scale-110
          object-cover
          opacity-[0.07]
          grayscale
        "
      />

      {/* Camada branca sobre o fundo */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-white/75
        "
        aria-hidden="true"
      />

      <div
        className="
          relative
          grid
          min-h-[100svh]
          w-full
          grid-cols-[minmax(0,48%)_minmax(0,52%)]

          max-[1100px]:grid-cols-[minmax(0,54%)_minmax(0,46%)]

          max-[900px]:min-h-0
          max-[900px]:grid-cols-1
        "
      >
        {/* Conteúdo esquerdo */}
        <div
          className="
            relative
            z-30
            flex
            min-w-0
            items-center
            px-[clamp(36px,6vw,110px)]
            py-[clamp(55px,8vh,95px)]

            max-[1100px]:px-[clamp(32px,5vw,60px)]

            max-[900px]:min-h-0
            max-[900px]:px-8
            max-[900px]:py-16

            max-sm:px-6
            max-sm:py-14
          "
        >
          <div className="w-full max-w-[650px]">
            {/* Badge */}
            <span
              className="
                mb-[clamp(22px,3vh,34px)]
                inline-flex
                w-fit
                items-center
                rounded-full
                bg-[#004A81]
                px-[clamp(18px,1.5vw,28px)]
                py-[clamp(8px,0.65vw,11px)]
                text-[clamp(13px,1vw,17px)]
                font-medium
                leading-none
                text-white

                max-sm:mb-6
                max-sm:px-5
                max-sm:py-2.5
                max-sm:text-[13px]
              "
            >
              Nossos serviços
            </span>

            {/* Título */}
            <h2
              className="
                mb-[clamp(26px,4vh,46px)]
                text-[clamp(40px,4.3vw,76px)]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-[#65B33B]

                max-[1100px]:text-[48px]

                max-[900px]:max-w-[600px]
                max-[900px]:text-[46px]

                max-sm:text-[36px]
              "
            >
              Atuação de alta performance
            </h2>

            {/* Descrição */}
            <p
              className="
                mb-[clamp(34px,5vh,58px)]
                max-w-[600px]
                text-[clamp(16px,1.35vw,23px)]
                leading-[1.5]
                text-[#555555]

                max-[1100px]:text-[17px]

                max-sm:mb-9
                max-sm:text-[15px]
              "
            >
              Especializada na prestação de serviços para o setor agrícola e
              florestal, atendemos produtores e empresas que buscam eficiência,
              organização e qualidade em suas operações.
            </p>

            {/* Lista de serviços */}
            <ul className="flex flex-col">
              {servicos.map((servico, index) => (
                <li
                  key={servico}
                  className="
                    relative
                    flex
                    min-h-[clamp(52px,6.5vh,76px)]
                    items-start
                    gap-[clamp(16px,1.5vw,28px)]

                    max-sm:min-h-[50px]
                    max-sm:gap-4
                  "
                >
                  {/* Linha pontilhada */}
                  {index < servicos.length - 1 && (
                    <span
                      className="
                        pointer-events-none
                        absolute
                        left-[8px]
                        top-[23px]
                        h-[calc(100%-5px)]
                        border-l-[3px]
                        border-dotted
                        border-[#777777]
                        opacity-50
                      "
                      aria-hidden="true"
                    />
                  )}

                  {/* Bolinha */}
                  <span
                    className="
                      relative
                      z-10
                      mt-1
                      h-[18px]
                      w-[18px]
                      shrink-0
                      rounded-full
                      border-[3px]
                      border-[#65B33B]
                      bg-white
                    "
                    aria-hidden="true"
                  />

                  {/* Nome do serviço */}
                  <span
                    className="
                      text-[clamp(16px,1.3vw,23px)]
                      font-semibold
                      leading-[1.3]
                      text-[#555555]

                      max-[1100px]:text-[17px]
                      max-sm:text-[16px]
                    "
                  >
                    {servico}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Imagem para desktop */}
        <div
          className="
            pointer-events-none
            relative
            z-10
            min-h-[100svh]
            overflow-visible

            max-[900px]:hidden
          "
          aria-hidden="true"
        >
          {/* Imagem realmente circular */}
          <div
            className="
              absolute
              right-[-6%]
              top-1/2
              aspect-square
              w-[min(50vw,92svh)]
              -translate-y-1/2
              overflow-hidden
              rounded-full

              max-[1300px]:right-[-12%]
              max-[1300px]:w-[min(54vw,88svh)]

              max-[1000px]:right-[-30%]
              max-[1000px]:w-[min(62vw,82svh)]
            "
            style={{
              borderRadius: "50%",
            }}
          >
            <img
              src={tratores}
              alt=""
              className="
                block
                h-full
                w-full
                rounded-full
                object-cover
                object-[48%_50%]
              "
              style={{
                borderRadius: "50%",
              }}
            />

            {/* Círculo verde decorativo */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[-18%]
                left-[-10%]
                z-20
                aspect-square
                h-[45%]
                rounded-full
                bg-[#65B33B]/85
              "
              aria-hidden="true"
            />

            {/* Círculo azul decorativo */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[-26%]
                left-[15%]
                z-10
                aspect-square
                h-[40%]
                rounded-full
                bg-[#004A81]/20
              "
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Imagem para tablet e celular */}
        <div
          className="
            relative
            hidden
            overflow-hidden
            px-6
            pb-16

            max-[900px]:flex
            max-[900px]:justify-center

            max-sm:px-4
            max-sm:pb-12
          "
        >
          <div
            className="
              relative
              aspect-square
              w-full
              max-w-[620px]
              overflow-hidden
              rounded-full
            "
            style={{
              borderRadius: "50%",
            }}
          >
            <img
              src={tratores}
              alt="Tratores trabalhando em uma área agrícola"
              className="
                block
                h-full
                w-full
                rounded-full
                object-cover
                object-[46%_50%]
              "
              style={{
                borderRadius: "50%",
              }}
            />

            {/* Círculo verde decorativo */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[-18%]
                left-[-13%]
                z-20
                aspect-square
                h-[48%]
                rounded-full
                bg-[#65B33B]/85
              "
              aria-hidden="true"
            />

            {/* Círculo azul decorativo */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[-24%]
                left-[17%]
                z-10
                aspect-square
                h-[42%]
                rounded-full
                bg-[#004A81]/20
              "
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
