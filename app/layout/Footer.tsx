import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

import logo from "../assets/images/amadeo-horizontal.png";

export default function Footer() {
  const { t } = useTranslation("landing");

  return (
    <footer
      className="
        w-full
        bg-[#004A81]
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-6
          py-10

          md:px-8
          lg:px-12
        "
      >
        {/* Parte superior */}
        <div
          className="
            flex
            flex-col
            gap-10

            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt={t("brand.logoAlt", { ns: "common" })}
              className="w-[170px]"
            />
          </div>

          {/* Botões */}
          <div
            className="
              flex
              flex-wrap
              gap-3

              lg:justify-end
            "
          >
            <a
              href="#contato"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#65B33B]
                px-6
                py-3
                text-[14px]
                font-semibold
                text-white
                transition
                duration-300

                hover:-translate-y-0.5
                hover:brightness-95
              "
            >
              {t("footer.contactAction")}
            </a>

            <a
              href="#projetos"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white
                px-6
                py-3
                text-[14px]
                font-semibold
                text-white
                transition
                duration-300

                hover:bg-white
                hover:text-[#004A81]
              "
            >
              {t("footer.projectsAction")}
            </a>
          </div>
        </div>

        {/* Informações */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-7

            md:grid-cols-2
            lg:grid-cols-[1fr_1fr_1.2fr]
            lg:gap-10
          "
        >
          <div className="flex flex-col gap-3">
            <a
              href="tel:+5567999569985"
              className="
                flex
                items-center
                gap-3
                text-[13px]
                transition-opacity
                hover:opacity-70
              "
            >
              <Phone size={16} strokeWidth={1.8} className="text-[#65B33B]" />
              67 99956-9985
            </a>

            <a
              href="mailto:amadeo@amadeoagroflorestal.com.br"
              className="
                flex
                items-center
                gap-3
                text-[13px]
                transition-opacity
                hover:opacity-70
              "
            >
              <Mail size={16} strokeWidth={1.8} className="text-[#65B33B]" />
              amadeo@amadeoagroflorestal.com.br
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="tel:+5567998329788"
              className="
                flex
                items-center
                gap-3
                text-[13px]
                transition-opacity
                hover:opacity-70
              "
            >
              <Phone size={16} strokeWidth={1.8} className="text-[#65B33B]" />
              67 99832-9788
            </a>

            <a
              href="mailto:karen@amadeoagroflorestal.com.br"
              className="
                flex
                items-center
                gap-3
                text-[13px]
                transition-opacity
                hover:opacity-70
              "
            >
              <Mail size={16} strokeWidth={1.8} className="text-[#65B33B]" />
              karen@amadeoagroflorestal.com.br
            </a>
          </div>

          <div
            className="
              flex
              items-start
              gap-3

              lg:justify-self-end
            "
          >
            <MapPin
              size={17}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-[#65B33B]"
            />

            <p
              className="
                max-w-[280px]
                text-[13px]
                leading-[1.4]
              "
            >
              {t("footer.address")}
            </p>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div className="border-t border-white/20">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1180px]
            flex-col
            gap-5
            px-6
            py-7

            sm:flex-row
            sm:items-center
            sm:justify-between

            md:px-8
            lg:px-12
          "
        >
          <p className="text-[12px] text-white/90">
            {t("footer.copyright")}
          </p>

          <a
            href="https://instagram.com/amadeo_servicosagroflorestais"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
              text-[12px]
              text-white
              transition-opacity
              hover:opacity-70
            "
          >
            <FaInstagram size={16} strokeWidth={1.8} />
            amadeo_servicosagroflorestais
          </a>
        </div>
      </div>
    </footer>
  );
}
