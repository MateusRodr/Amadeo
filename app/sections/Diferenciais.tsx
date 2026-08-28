import { ChartNoAxesCombined, Sprout, Truck, UsersRound } from "lucide-react";
import { useTranslation } from "react-i18next";

import imageOne from "../assets/images/15-diferenciais.png";
import imageTwo from "../assets/images/16-diferenciais1.png";
import imageThree from "../assets/images/17-diferenciais.png";

export default function Diferenciais() {
  const { t } = useTranslation("landing");
  const differentials = [
    {
      title: t("differentials.items.performance.title"),
      description: t("differentials.items.performance.description"),
      icon: ChartNoAxesCombined,
    },
    {
      title: t("differentials.items.team.title"),
      description: t("differentials.items.team.description"),
      icon: UsersRound,
    },
    {
      title: t("differentials.items.equipment.title"),
      description: t("differentials.items.equipment.description"),
      icon: Truck,
    },
    {
      title: t("differentials.items.sustainability.title"),
      description: t("differentials.items.sustainability.description"),
      icon: Sprout,
    },
  ];
  const images = [
    {
      src: imageOne,
      alt: t("differentials.images.equipmentOperationAlt"),
    },
    {
      src: imageTwo,
      alt: t("differentials.images.soilPreparationAlt"),
    },
    {
      src: imageThree,
      alt: t("differentials.images.agriculturalEquipmentAlt"),
    },
  ];

  return (
    <section
      id="diferenciais"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-6
        pt-16
        md:px-8
        md:pt-24
        lg:px-12
      "
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div
          className="
            mb-14
            grid
            grid-cols-1
            gap-6

            lg:grid-cols-2
            lg:items-end
            lg:gap-16
          "
        >
          <div>
            <span
              className="
                text-[15px]
                font-semibold
                text-[#65B33B]
              "
            >
              {t("differentials.eyebrow")}
            </span>

            <h2
              className="
                mt-2
                max-w-[430px]
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.02em]
                text-[#004A81]

                sm:text-[42px]
                lg:text-[44px]
              "
            >
              {t("differentials.title")}
            </h2>
          </div>

          <p
            className="
              max-w-[540px]
              text-[16px]
              leading-[1.4]
              text-[#555555]

              lg:ml-auto
              lg:text-right
            "
          >
            {t("differentials.description")}
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            gap-8

            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-10
          "
        >
          {differentials.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title}>
                <span
                  className="
                    mb-4
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#65B33B]
                    text-white
                  "
                >
                  <Icon size={21} strokeWidth={1.8} />
                </span>

                <h3
                  className="
                    text-[18px]
                    font-semibold
                    text-[#555555]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[250px]
                    text-[15px]
                    leading-[1.4]
                    text-[#555555]
                  "
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div
          className="
            relative
            z-10
            mt-14
            grid
            grid-cols-1
            gap-5

            md:grid-cols-3
            cursor-pointer
          "
        >
          {images.map((image) => (
            <div
              key={image.alt}
              className="
                group
                h-[300px]
                overflow-hidden
                rounded-[24px]

                md:h-[280px]
              "
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-8 md:h-10" />
    </section>
  );
}
