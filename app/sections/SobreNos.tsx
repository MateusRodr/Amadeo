import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import QuemSomos from "../assets/images/02-quem-somos.png";
import tratores from "../assets/images/tratores.jpg";

function getYearsOfExperience() {
  const foundedYear = 2013;
  const anniversaryMonth = 4;
  const anniversaryDay = 31;

  const today = new Date();

  let years = today.getFullYear() - foundedYear;

  const anniversaryHasPassed =
    today.getMonth() > anniversaryMonth ||
    (today.getMonth() === anniversaryMonth &&
      today.getDate() >= anniversaryDay);

  if (!anniversaryHasPassed) {
    years -= 1;
  }

  return years;
}

export default function SobreNos() {
  const { t } = useTranslation("landing");
  const yearsOfExperience = getYearsOfExperience();

  const highlights = [
    t("about.highlights.experience"),
    t("about.highlights.quality"),
    t("about.highlights.responsibility"),
  ];

  return (
    <section
      id="sobre"
      className="
        w-full
        bg-white
        px-3
        py-16
        md:px-8
        md:py-24
        lg:px-12
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1160px]
          grid-cols-1
          items-center
          gap-14

          lg:grid-cols-2
          lg:gap-24
        "
      >
        <div
          className="
            relative
            mx-auto
            h-[370px]
            w-full
            max-w-[370px]

            sm:h-[450px]
            sm:max-w-[460px]

            lg:h-[430px]
            lg:max-w-[500px]
          "
        >
          <div
            className="
              absolute
              bottom-[8%]
              left-[-18%]
              h-[210px]
              w-[210px]
              rounded-full
              bg-[#65B33B]

              sm:h-[250px]
              sm:w-[250px]

              lg:bottom-[5%]
              lg:left-[-10%]
            "
            aria-hidden="true"
          />

          <div
            className="
              absolute
              bottom-0
              right-0
              h-[260px]
              w-[72%]
              overflow-hidden
              rounded-[28px]

              sm:h-[330px]
              sm:w-[70%]

              lg:h-[310px]
            "
          >
            <img
              src={tratores}
              alt={t("about.largeImageAlt")}
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="
              absolute
              left-[3%]
              top-0
              z-20
              h-[175px]
              w-[155px]
              overflow-hidden
              rounded-[26px]

              sm:h-[210px]
              sm:w-[190px]

              lg:left-[5%]
            "
          >
            <img
              src={QuemSomos}
              alt={t("about.smallImageAlt")}
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="
              absolute
              right-[2%]
              top-[24px]
              z-30
              flex
              items-center
              gap-3

              sm:right-[4%]
              sm:top-[30px]

              lg:right-[-1%]
            "
          >
            <strong
              className="
                text-[38px]
                font-extrabold
                leading-none
                text-[#65B33B]

                sm:text-[48px]
              "
            >
              {String(yearsOfExperience).padStart(2, "0")}+
            </strong>

            <span
              className="
                max-w-[100px]
                text-[15px]
                font-semibold
                leading-[1.15]
                text-[#555555]

                sm:text-[17px]
              "
            >
              {t("about.experienceLabelStart")}
              <br />
              {t("about.experienceLabelEnd")}
            </span>
          </div>
        </div>

        <div className="w-full">
          <span
            className="
              mb-3
              block
              text-[16px]
              font-semibold
              text-[#65B33B]
            "
          >
            {t("about.eyebrow")}
          </span>

          <h2
            className="
              max-w-[520px]
              text-[40px]
              font-bold
              leading-[1.08]
              tracking-[-0.02em]
              text-[#004A81]

              sm:text-[46px]
              lg:text-[48px]
            "
          >
            {t("about.title")}
          </h2>

          <p
            className="
              mt-7
              max-w-[550px]
              text-[16px]
              leading-[1.35]
              text-[#555555]

              sm:text-[17px]
            "
          >
            {t("about.description")}
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="
                  flex
                  items-center
                  gap-3
                  text-[16px]
                  text-[#555555]
                "
              >
                <span
                  className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#65B33B]
                    text-white
                  "
                >
                  <Check size={14} strokeWidth={3} />
                </span>

                {highlight}
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="
              mt-10
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
            {t("about.contactAction")}
          </a>
        </div>
      </div>
    </section>
  );
}
