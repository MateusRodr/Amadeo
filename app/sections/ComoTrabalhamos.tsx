import { useTranslation } from "react-i18next";

export default function ComoTrabalhamos() {
  const { t } = useTranslation("landing");
  const steps = [
    {
      number: 1,
      title: t("workProcess.steps.diagnosis.title"),
      description: t("workProcess.steps.diagnosis.description"),
    },
    {
      number: 2,
      title: t("workProcess.steps.planning.title"),
      description: t("workProcess.steps.planning.description"),
    },
    {
      number: 3,
      title: t("workProcess.steps.execution.title"),
      description: t("workProcess.steps.execution.description"),
    },
    {
      number: 4,
      title: t("workProcess.steps.monitoring.title"),
      description: t("workProcess.steps.monitoring.description"),
    },
  ];

  return (
    <section id="como-trabalhamos" className="w-full">
      {/* Processo */}
      <div className="bg-[#F4F8EF]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1180px]
            px-6
            py-16

            md:px-8
            md:py-20

            lg:px-12
            lg:py-24
          "
        >
          {/* Cabeçalho */}
          <div className="mx-auto max-w-[850px] text-center">
            <span
              className="
                text-[15px]
                font-semibold
                text-[#65B33B]
              "
            >
              {t("workProcess.eyebrow")}
            </span>

            <h2
              className="
                mt-2
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.02em]
                text-[#004A81]

                sm:text-[42px]
                lg:text-[44px]
              "
            >
              {t("workProcess.title")}
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-[780px]
                text-[16px]
                leading-[1.4]
                text-[#555555]
              "
            >
              {t("workProcess.description")}
            </p>
          </div>

          {/* Desktop */}
          <div
            className="
              mt-14
              hidden
              grid-cols-4
              gap-10

              md:grid
            "
          >
            {steps.map((step, index) => (
              <article key={step.number} className="relative">
                {/* Número + linha */}
                <div className="mb-7 flex items-center">
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#65B33B]
                      text-[16px]
                      font-semibold
                      text-white
                    "
                  >
                    {step.number}
                  </span>

                  {index < steps.length - 1 && (
                    <div
                      className="
                        relative
                        ml-5
                        h-px
                        flex-1
                        bg-[#004A81]
                      "
                    >
                      <span
                        className="
                          absolute
                          right-0
                          top-1/2
                          h-2
                          w-2
                          -translate-y-1/2
                          rounded-full
                          bg-[#004A81]
                        "
                      />
                    </div>
                  )}
                </div>

                <h3
                  className="
                    text-[17px]
                    font-semibold
                    text-[#555555]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[210px]
                    text-[14px]
                    leading-[1.4]
                    text-[#555555]
                  "
                >
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          {/* Mobile */}
          <div className="mt-12 flex flex-col md:hidden">
            {steps.map((step, index) => (
              <article key={step.number} className="relative pb-14 pl-0">
                <div className="relative">
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#65B33B]
                      text-[17px]
                      font-semibold
                      text-white
                    "
                  >
                    {step.number}
                  </span>

                  {index < steps.length - 1 && (
                    <div
                      className="
                        absolute
                        left-[21px]
                        top-[55px]
                        h-[calc(100%+105px)]
                        w-px
                        bg-[#004A81]
                      "
                    >
                      <span
                        className="
                          absolute
                          bottom-0
                          left-1/2
                          h-3
                          w-3
                          -translate-x-1/2
                          rounded-full
                          bg-[#004A81]
                        "
                      />
                    </div>
                  )}
                </div>

                <div className="mt-9">
                  <h3
                    className="
                      text-[18px]
                      font-semibold
                      text-[#555555]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-8
                      max-w-[330px]
                      text-[16px]
                      leading-[1.4]
                      text-[#555555]
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="
          relative
          overflow-hidden
          bg-[#004A81]
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[#004A81]/80
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1180px]
            flex-col
            gap-8
            px-6
            py-14

            md:flex-row
            md:items-center
            md:justify-between
            md:px-8

            lg:px-12
            lg:py-16
          "
        >
          <div>
            <h2
              className="
                max-w-[520px]
                text-[32px]
                font-bold
                leading-[1.1]
                text-white

                md:text-[38px]
              "
            >
              {t("workProcess.cta.title")}
            </h2>

            <p
              className="
                mt-5
                max-w-[550px]
                text-[15px]
                leading-[1.4]
                text-white/90
              "
            >
              {t("workProcess.cta.description")}
            </p>
          </div>

          <a
            href="#contato"
            className="
              inline-flex
              w-fit
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#65B33B]
              px-7
              py-3
              text-[14px]
              font-semibold
              text-white
              transition
              duration-300

              hover:-translate-y-0.5
              hover:brightness-95
              hover:shadow-lg
            "
          >
            {t("workProcess.cta.action")}
          </a>
        </div>
      </div>
    </section>
  );
}
