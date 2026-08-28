import { useState } from "react";
import { House, Lightbulb, Sprout } from "lucide-react";
import { useTranslation } from "react-i18next";
import start from "../assets/images/05-comeco-nossa-historia.png";
import historia from "../assets/images/2013.png";
import grow from "../assets/images/06-crescecmos-nossa-historia.png";

export default function NossaHistoria() {
  const { t } = useTranslation("landing");
  const [activeIndex, setActiveIndex] = useState(0);

  const historyItems = [
    {
      title: t("history.items.foundation.title"),
      description: t("history.items.foundation.description"),
      image: historia,
      icon: Lightbulb,
    },
    {
      title: t("history.items.beginning.title"),
      description: t("history.items.beginning.description"),
      image: start,
      icon: Sprout,
    },
    {
      title: t("history.items.growth.title"),
      description: t("history.items.growth.description"),
      image: grow,
      icon: House,
    },
  ];

  return (
    <section
      id="historia"
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-16
        md:px-8
        md:py-24
        lg:px-12
      "
    >
      <div className="mx-auto w-full max-w-[1180px] cursor-pointer">
        <div className="mb-12 text-center md:mb-10">
          <span
            className="
              text-[16px]
              font-semibold
              text-[#65B33B]
            "
          >
            {t("history.eyebrow")}
          </span>

          <h2
            className="
              mx-auto
              mt-2
              max-w-[820px]
              text-[40px]
              font-bold
              leading-[1.08]
              tracking-[-0.02em]
              text-[#004A81]

              md:text-[44px]
              lg:text-[46px]
            "
          >
            {t("history.title")}
          </h2>
        </div>

        <div
          className="
              flex
              gap-5
              overflow-x-auto
              pb-4
              snap-x
              snap-mandatory

              md:h-[330px]
              md:overflow-visible
              md:pb-0
            "
        >
          {historyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
                className={`
                      group
                      relative
                      min-h-[370px]
                      w-[315px]
                      shrink-0
                      snap-start
                      overflow-hidden
                      rounded-[24px]
                      bg-[#111111]
                      cursor-pointer
                      outline-none

                      transition-all
                      duration-700
                      ease-in-out

                      md:min-h-[330px]
                      md:w-auto

    ${activeIndex === index ? "md:flex-[1.65]" : "md:flex-[0.75]"}

    hover:-translate-y-1
    hover:shadow-2xl
  `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-in-out

    ${activeIndex === index ? "md:scale-110" : "md:scale-100"}
  `}
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/40
                    to-black/10
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    min-h-[370px]
                    flex-col
                    justify-end
                    p-6

                    md:min-h-[330px]
                  "
                >
                  <span
                    className="
                      mb-4
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

                  <h3
                    className="
                      text-[23px]
                      font-semibold
                      leading-[1.1]
                      text-white

                      md:text-[20px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`
                    mt-5
                    text-[15px]
                    leading-[1.35]
                    text-white/95

                    transition-all
                    duration-500
                    ease-out

                    ${
                      activeIndex === index
                        ? "md:max-h-[220px] md:translate-y-0 md:opacity-100"
                        : "md:max-h-0 md:translate-y-3 md:overflow-hidden md:opacity-0"
                    }
                  `}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
