import { useState } from "react";
import { BrushCleaning, Sprout, Trees, Tractor, Shovel, Wheat } from "lucide-react";
import { useTranslation } from "react-i18next";

import tratorone from "../assets/images/tratorone.png";
import trator from "../assets/images/trator.png";
import forest from "../assets/images/forest.jpg"
import manejoFlorestal from "../assets/images/manejo-florestal.jpg";
import limpeza from "../assets/images/limpeza-de-area.png"
import agricola from "../assets/images/11-agricola-servicos.png"

export default function AtuacaoAltaPerformance() {
  const { t } = useTranslation("landing");
  const services = [
    {
      id: "limpeza",
      name: t("services.items.clearing.name"),
      subtitle: t("services.items.clearing.subtitle"),
      title: t("services.items.clearing.title"),
      description: t("services.items.clearing.description"),
      image: limpeza,
      icon: BrushCleaning,
    },
    {
      id: "preparo",
      name: t("services.items.soilPreparation.name"),
      subtitle: t("services.items.soilPreparation.subtitle"),
      title: t("services.items.soilPreparation.title"),
      description: t("services.items.soilPreparation.description"),
      image: tratorone,
      icon: Shovel,
    },
    {
      id: "plantio",
      name: t("services.items.planting.name"),
      subtitle: t("services.items.planting.subtitle"),
      title: t("services.items.planting.title"),
      description: t("services.items.planting.description"),
      image: forest,
      icon: Sprout,
    },
    {
      id: "manejo-florestal",
      name: t("services.items.forestryManagement.name"),
      subtitle: t("services.items.forestryManagement.subtitle"),
      title: t("services.items.forestryManagement.title"),
      description: t("services.items.forestryManagement.description"),
      image: manejoFlorestal,
      icon: Trees,
    },
    {
      id: "manejo-agricola",
      name: t("services.items.agriculturalManagement.name"),
      subtitle: t("services.items.agriculturalManagement.subtitle"),
      title: t("services.items.agriculturalManagement.title"),
      description: t("services.items.agriculturalManagement.description"),
      image: agricola,
      icon: Wheat,
    },
    {
      id:"Locação de frota",
      name: t("services.items.fleetLeasing.name"),
      subtitle: t("services.items.fleetLeasing.subtitle"),
      title: t("services.items.fleetLeasing.title"),
      description: t("services.items.fleetLeasing.description"),
      image: trator,
      icon: Tractor,
    }
  ];
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const activeService =
    services.find((service) => service.id === activeServiceId) ?? services[0];

  return (
    <section
      id="servicos"
      className="w-full bg-[#F4F8EF] px-6 py-16 md:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold text-[#65B33B]">
            {t("services.eyebrow")}
          </span>

          <h2 className="mt-2 text-3xl font-bold text-[#004A81] md:text-4xl">
            {t("services.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-[850px] text-sm leading-relaxed text-[#555555] md:text-base">
            {t("services.description")}
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[280px_1fr] ">
          {/* Serviços */}
          <div className="flex flex-col gap-2">
            {services.map((service) => {
              const isActive = activeServiceId === service.id;
              const Icon = service.icon;

              return (
                <button
                  key={service.id}
                  type="button"
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onFocus={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`
                    group
                    flex
                    w-full
                    items-center
                    gap-4
                    rounded-xl
                    px-4
                    py-4
                    text-left
                    transition-all
                    duration-300
                    ease-out
                    cursor-pointer

                    ${
                      isActive
                        ? "scale-[1.03] bg-[#004A81] shadow-lg"
                        : "hover:scale-[1.02] hover:bg-white/70"
                    }
                  `}
                >
                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      transition-colors
                      duration-300

                      ${
                        isActive
                          ? "bg-[#65B33B] text-white"
                          : "bg-[#65B33B]/15 text-[#65B33B]"
                      }
                    `}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </span>

                  <span>
                    <strong
                      className={`
                        block
                        text-sm
                        font-semibold
                        transition-colors
                        duration-300

                        ${isActive ? "text-white" : "text-[#444444]"}
                      `}
                    >
                      {service.name}
                    </strong>

                    <span
                      className={`
                        mt-0.5
                        block
                        text-xs
                        transition-colors
                        duration-300

                        ${isActive ? "text-white/75" : "text-[#777777]"}
                      `}
                    >
                      {service.subtitle}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Card principal */}
          <div
            key={activeService.id}
            className="
              group
              relative
              min-h-[430px]
              overflow-hidden
              rounded-[28px]
              bg-[#004A81]

              md:min-h-[500px]

              cursor-pointer
            "
          >
            <img
              src={activeService.image}
              alt={activeService.name}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out

                group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#004A81]/95
                via-[#004A81]/45
                to-transparent
              "
            />

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                p-6
                text-white

                md:p-10
              "
            >
              <span className="text-sm font-medium text-white/80">
                {activeService.name}
              </span>

              <h3
                className="
                  mt-2
                  max-w-[650px]
                  text-2xl
                  font-bold
                  leading-tight

                  md:text-4xl
                "
              >
                {activeService.title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-[760px]
                  text-sm
                  leading-relaxed
                  text-white/90

                  md:text-base
                "
              >
                {activeService.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
