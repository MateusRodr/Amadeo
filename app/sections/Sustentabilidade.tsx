import {
  Leaf,
  RefreshCw,
  Sprout,
  TimerReset,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import forest from "../assets/images/forest.jpg";

export default function Sustentabilidade() {
  const { t } = useTranslation("landing");
  const sustainabilityItems = [
    {
      title: t("sustainability.items.resources.title"),
      description: t("sustainability.items.resources.description"),
      icon: Leaf,
    },
    {
      title: t("sustainability.items.efficiency.title"),
      description: t("sustainability.items.efficiency.description"),
      icon: TimerReset,
    },
    {
      title: t("sustainability.items.conservation.title"),
      description: t("sustainability.items.conservation.description"),
      icon: RefreshCw,
    },
    {
      title: t("sustainability.items.development.title"),
      description: t("sustainability.items.development.description"),
      icon: Sprout,
    },
  ];

  return (
    <section
      id="sustentabilidade"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Parte azul */}
      <div className="bg-[#004A81]">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1180px]
            grid-cols-1
            gap-12
            px-6
            py-16

            md:px-8
            md:py-20

            lg:grid-cols-[1fr_1fr]
            lg:gap-20
            lg:px-12
            lg:pb-28
          "
        >
          {/* Introdução */}
          <div
            className="
              text-center

              lg:text-left
            "
          >
            <span
              className="
                text-[16px]
                font-semibold
                text-[#65B33B]
              "
            >
              {t("sustainability.eyebrow")}
            </span>

            <h2
              className="
                mx-auto
                mt-3
                max-w-[580px]
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.02em]
                text-white

                sm:text-[44px]

                lg:mx-0
                lg:text-[46px]
              "
            >
              {t("sustainability.titleStart")}{" "}
              <span className="text-[#65B33B]">
                {t("sustainability.titleHighlight")}
              </span>{" "}
              {t("sustainability.titleEnd")}
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[560px]
                text-[16px]
                leading-[1.4]
                text-white/95

                lg:mx-0
              "
            >
              {t("sustainability.description")}
            </p>
          </div>

          {/* Itens */}
          <div className="flex flex-col gap-8 lg:gap-6">
            {sustainabilityItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="
                    flex
                    flex-col
                    items-center
                    text-center

                    lg:flex-row
                    lg:items-start
                    lg:text-left
                  "
                >
                  <span
                    className="
                      mb-4
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#65B33B]
                      text-[#004A81]

                      lg:mb-0
                      lg:mr-4
                    "
                  >
                    <Icon size={21} strokeWidth={2} />
                  </span>

                  <div>
                    <h3
                      className="
                        text-[17px]
                        font-semibold
                        leading-tight
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mx-auto
                        mt-2
                        max-w-[390px]
                        text-[15px]
                        leading-[1.35]
                        text-white/95

                        lg:mx-0
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="bg-white">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1180px]
            grid-cols-1
            gap-10
            px-6
            pb-16

            md:px-8
            md:pb-24

            lg:grid-cols-2
            lg:items-center
            lg:gap-20
            lg:px-12
          "
        >
          {/* Imagem */}
          <div
            className="
              relative
              mt-10
              overflow-hidden
              rounded-[30px]

              lg:-mt-20
            "
          >
            <img
              src={forest}
              alt={t("sustainability.practice.imageAlt")}
              className="
                h-[420px]
                w-full
                object-cover

                sm:h-[520px]
                lg:h-[570px]
              "
            />
          </div>

          {/* Sustentabilidade na prática */}
          <div className="pb-4 lg:pt-10">
            <span
              className="
                text-[15px]
                font-semibold
                text-[#65B33B]
              "
            >
              {t("sustainability.practice.eyebrow")}
            </span>

            <h2
              className="
                mt-2
                max-w-[520px]
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.02em]
                text-[#004A81]

                sm:text-[42px]
              "
            >
              {t("sustainability.practice.title")}
            </h2>

            <p
              className="
                mt-6
                max-w-[560px]
                text-[16px]
                leading-[1.45]
                text-[#555555]
              "
            >
              {t("sustainability.practice.description")}
            </p>

            <a
              href="#contato"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#65B33B]
                px-6
                py-3
                text-[15px]
                font-semibold
                text-white
                transition
                duration-300

                hover:-translate-y-0.5
                hover:brightness-95
                hover:shadow-md
              "
            >
              {t("sustainability.practice.contactAction")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
