import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import logo from "../assets/images/logo-amadeo-dark-bg.png";

export default function Navbar() {
  const { t } = useTranslation("landing");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { label: t("navbar.links.about"), href: "#sobre" },
    { label: t("navbar.links.services"), href: "#servicos" },
    { label: t("navbar.links.workSafety"), href: "#seguranca" },
    { label: t("navbar.links.differentials"), href: "#diferenciais" },
    { label: t("navbar.links.sustainability"), href: "#sustentabilidade" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1280px]
          items-center
          justify-between
          px-6
          py-6
          md:px-8
          lg:px-12
        "
      >
        <a href="/" aria-label={t("navbar.homeAriaLabel")}>
          <img
            src={logo}
            alt={t("brand.logoAlt", { ns: "common" })}
            className="w-[150px] md:w-[170px]"
          />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                text-sm
                font-medium
                text-white
                transition-opacity
                hover:opacity-70
              "
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contato"
            className="
              rounded-full
              bg-[#65B33B]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:brightness-95
            "
          >
            {t("navbar.contact")}
          </a>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          className="
            relative
            z-50
            flex
            items-center
            justify-center
            text-white
            md:hidden
          "
          aria-label={
            isMenuOpen
              ? t("navbar.closeMenuAriaLabel")
              : t("navbar.openMenuAriaLabel")
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div
            className="
              absolute
              left-4
              right-4
              top-[88px]
              z-40
              flex
              flex-col
              gap-2
              rounded-2xl
              bg-[#004A81]
              p-5
              shadow-xl
              md:hidden
            "
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-base
                  font-medium
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contato"
              onClick={closeMenu}
              className="
                mt-2
                flex
                items-center
                justify-center
                rounded-full
                bg-[#65B33B]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:brightness-95
              "
            >
              {t("navbar.contact")}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
