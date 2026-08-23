import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contato() {
  const { t } = useTranslation("landing");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "required" | null>(
    null,
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      setStatus("required");
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus(null);

      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const contacts = [
    {
      label: t("contact.labels.phone"),
      value: "67 99956-9985",
      href: "tel:+5567999569985",
      icon: Phone,
    },
    {
      label: t("contact.labels.email"),
      value: "amadeo@amadeoagroflorestal.com.br",
      href: "mailto:amadeo@amadeoagroflorestal.com.br",
      icon: Mail,
    },
    {
      label: t("contact.labels.phone"),
      value: "67 99832-9788",
      href: "tel:+5567998329788",
      icon: Phone,
    },
    {
      label: t("contact.labels.email"),
      value: "karen@amadeoagroflorestal.com.br",
      href: "mailto:karen@amadeoagroflorestal.com.br",
      icon: Mail,
    },
  ];

  return (
    <section
      id="contato"
      className="
        w-full
        bg-white
        px-6
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
          max-w-[1180px]
          grid-cols-1
          gap-14

          lg:grid-cols-2
          lg:items-start
          lg:gap-24
        "
      >
        {/* Informações */}
        <div>
          <span
            className="
              text-[15px]
              font-semibold
              text-[#65B33B]
            "
          >
            {t("contact.eyebrow")}
          </span>

          <h2
            className="
              mt-2
              max-w-[470px]
              text-[38px]
              font-bold
              leading-[1.08]
              tracking-[-0.02em]
              text-[#004A81]

              sm:text-[42px]
              lg:text-[44px]
            "
          >
            {t("contact.title")}
          </h2>

          <p
            className="
              mt-6
              max-w-[500px]
              text-[15px]
              leading-[1.45]
              text-[#555555]

              sm:text-[16px]
            "
          >
            {t("contact.description")}
          </p>

          {/* Contatos */}
          <div className="mt-10 flex flex-col gap-5">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;

              return (
                <a
                  key={`${contact.label}-${index}`}
                  href={contact.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-4
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#65B33B]
                      text-white
                      transition
                      duration-300

                      group-hover:scale-105
                    "
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </span>

                  <span>
                    <strong
                      className="
                        block
                        text-[14px]
                        font-semibold
                        text-[#555555]
                      "
                    >
                      {contact.label}
                    </strong>

                    <span
                      className="
                        mt-0.5
                        block
                        break-all
                        text-[13px]
                        text-[#555555]

                        sm:break-normal
                      "
                    >
                      {contact.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Instagram */}
          <a
            href="https://instagram.com/amadeo_servicosagroflorestais"
            target="_blank"
            rel="noreferrer"
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              text-[14px]
              font-medium
              text-[#65B33B]
              transition-opacity
              hover:opacity-70
            "
          >
            <FaInstagram size={18} strokeWidth={1.8} />
            amadeo_servicosagroflorestais
          </a>
        </div>

        {/* Formulário */}
        <div
          className="
            rounded-[18px]
            bg-white
            p-6
            shadow-[0_15px_45px_rgba(0,0,0,0.10)]

            sm:p-8
            lg:p-10
          "
        >
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="
                  mb-2
                  block
                  text-[14px]
                  font-medium
                  text-[#444444]
                "
              >
                {t("contact.form.name")}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                className="
                  h-12
                  w-full
                  rounded-xl
                  border-0
                  bg-[#ECECEC]
                  px-4
                  text-[#333333]
                  outline-none
                  transition

                  focus:ring-2
                  focus:ring-[#65B33B]/50
                "
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="
                  mb-2
                  block
                  text-[14px]
                  font-medium
                  text-[#444444]
                "
              >
                {t("contact.form.email")}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                className="
                  h-12
                  w-full
                  rounded-xl
                  border-0
                  bg-[#ECECEC]
                  px-4
                  text-[#333333]
                  outline-none
                  transition

                  focus:ring-2
                  focus:ring-[#65B33B]/50
                "
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="
                  mb-2
                  block
                  text-[14px]
                  font-medium
                  text-[#444444]
                "
              >
                {t("contact.form.phone")}
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="
                  h-12
                  w-full
                  rounded-xl
                  border-0
                  bg-[#ECECEC]
                  px-4
                  text-[#333333]
                  outline-none
                  transition

                  focus:ring-2
                  focus:ring-[#65B33B]/50
                "
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="
                  mb-2
                  block
                  text-[14px]
                  font-medium
                  text-[#444444]
                "
              >
                {t("contact.form.message")}
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border-0
                  bg-[#ECECEC]
                  px-4
                  py-3
                  text-[#333333]
                  outline-none
                  transition

                  focus:ring-2
                  focus:ring-[#65B33B]/50
                "
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-fit
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
                hover:shadow-md

                disabled:cursor-not-allowed
                disabled:opacity-60

                cursor-pointer
              "
            >
              {isSubmitting
                ? t("contact.form.sending")
                : t("contact.form.submit")}
            </button>
            {status === "success" && (
              <p className="text-sm font-medium text-[#65B33B]">
                {t("contact.form.success")}
              </p>
            )}
            {status === "required" && (
              <p className="text-sm font-medium text-red-600">
                {t("contact.form.required")}
              </p>
            )}

            {status === "error" && (
              <p className="text-sm font-medium text-red-600">
                {t("contact.form.error")}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
