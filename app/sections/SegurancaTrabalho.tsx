import { BriefcaseBusiness, UsersRound } from "lucide-react";

import security from "../assets/images/security.png";

const securityItems = [
  {
    title: "Processos e procedimentos",
    description:
      "Seguimos rigorosos processos e aplicamos boas práticas de segurança no campo.",
    icon: UsersRound,
    className: "bg-[#004A81]",
  },
  {
    title: "Equipamentos adequados",
    description:
      "Fornecemos EPIs e equipamentos de qualidade, específicos para cada tipo de atividade.",
    icon: BriefcaseBusiness,
    className: "bg-[#65B33B]",
  },
];

export default function SegurancaTrabalho() {
  return (
    <section
      id="seguranca"
      className="w-full bg-white px-6 py-16 md:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div
          className="
            grid
            grid-cols-1
            gap-10

            lg:grid-cols-[0.9fr_1.35fr]
            lg:items-center
            lg:gap-12
          "
        >
          {/* Imagem */}
          <div
            className="
              order-2
              overflow-hidden
              rounded-[28px]

              lg:order-1
              lg:row-span-2
            "
          >
            <img
              src={security}
              alt="Profissional da Amadeo em área florestal"
              className="
                h-[360px]
                w-full
                object-cover

                sm:h-[440px]
                lg:h-[500px]
                
                cursor-pointer
              "
            />
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <span className="text-[15px] font-semibold text-[#65B33B]">
              Segurança do trabalho
            </span>

            <h2
              className="
                mt-2
                max-w-[650px]
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.02em]
                text-[#004A81]

                sm:text-[42px]
                lg:text-[44px]
              "
            >
              Segurança presente em todas as etapas dos nossos serviços
            </h2>

            <p
              className="
                mt-6
                max-w-[650px]
                text-[15px]
                leading-[1.4]
                text-[#555555]

                sm:text-[16px]
              "
            >
              Acreditamos que trabalho seguro é trabalho bem feito! Buscamos
              garantir um ambiente seguro, saudável e em conformidade com as
              normas, protegendo o que temos de mais importante: nossa equipe.
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              order-3
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2
              lg:-ml-24
              lg:mt-2
            "
          >
            {securityItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`
                    rounded-[20px]
                    p-6
                    text-white
                    shadow-lg
                    ${item.className}
                  `}
                >
                  <span
                    className="
                      mb-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#65B33B]
                      text-white
                    "
                  >
                    <Icon size={19} strokeWidth={2} />
                  </span>

                  <h3 className="text-[16px] font-semibold">{item.title}</h3>

                  <p className="mt-2 text-[14px] leading-[1.35] text-white/95">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
