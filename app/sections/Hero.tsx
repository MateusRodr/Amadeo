import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import tractorImg from "../assets/images/Pasted-image.png";

export default function AmadeoHero() {
  const { t } = useTranslation("landing");

  const whatsappUrl =
    "https://wa.me/556798329788?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es";

  return (
    <section
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
      "
    >
      <img
        src={tractorImg}
        alt={t("hero.imageAlt")}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[62%_center]

          md:object-[68%_center]
        "
      />

      <div className="absolute inset-0 bg-[#004A81]/70" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#004A81]
          via-[#004A81]/80
          to-[#004A81]/15
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1280px]
          items-center

          px-6
          pb-12
          pt-32

          md:px-8
          md:pt-28

          lg:px-12
        "
      >
        <div className="w-full max-w-[580px]">
          <h1
            className="
              max-w-[370px]
              text-[30px]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-white

              sm:text-[36px]

              md:max-w-[560px]
              md:text-[48px]

              lg:text-[52px]
            "
          >
            {t("hero.titleStart")}{" "}
            <span className="text-[#65B33B]">{t("hero.titleHighlight")}</span>{" "}
            {t("hero.titleEnd")}
          </h1>

          <div
            className="
              my-8
              h-[3px]
              w-[150px]
              bg-[#65B33B]

              md:my-7
            "
          />

          <p
            className="
              max-w-[380px]
              text-[17px]
              leading-[1.3]
              text-white

              md:max-w-[500px]
              md:text-[18px]
            "
          >
            {t("hero.description")}
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              items-start
              gap-4

              sm:flex-row
              sm:items-center
            "
          >
            <a
              href="#servicos"
              className="
                rounded-full
                bg-[#65B33B]
                px-6
                py-3
                text-[15px]
                font-semibold
                text-white
                transition
                hover:brightness-95
              "
            >
              {t("hero.servicesAction")}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border-2
                border-white
                px-6
                py-[10px]
                text-[15px]
                font-semibold
                text-white
                transition
                hover:bg-white
                hover:text-[#004A81]
              "
            >
              {t("hero.contactAction")}
              <FaWhatsapp size={17} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
