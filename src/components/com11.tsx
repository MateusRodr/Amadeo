import React from "react";

import logo from "/home/mateus/Amadeo/Amadeo/src/assets/amadeo-horizontal.png";
import tractorImage from "/home/mateus/Amadeo/Amadeo/src/assets/Pasted-image.png";

const GREEN = "#65B33BE5";
const TEXT_COLOR = "#FFFFFF";

/* ---------- Ícones ---------- */

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#144A7C" />
    <path
      d="M16 7.5c-4.7 0-8.5 3.8-8.5 8.5 0 1.5.4 2.9 1.1 4.1L7.5 24.5l4.6-1.2c1.2.6 2.5 1 3.9 1 4.7 0 8.5-3.8 8.5-8.5S20.7 7.5 16 7.5Z"
      fill={GREEN}
    />
    <path
      d="M12.9 11.6c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.8.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.2-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1 .2-.2.4-.2.6-.1l1.7.8c.2.1.4.2.4.3.1.5.1 1-.1 1.4-.2.5-1.1 1-1.6 1.1-.4.1-.9.1-1.5-.1-.3-.1-.8-.3-1.4-.5-2.4-1-4-3.1-4.2-3.4-.2-.3-1-1.3-1-2.5 0-1.2.6-1.7.8-2Z"
      fill="#FFFFFF"
    />
  </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.5"
      y="4.5"
      width="19"
      height="15"
      rx="2"
      stroke="#FFFFFF"
      strokeWidth="1.6"
    />
    <path
      d="M3.5 6.5 12 13l8.5-6.5"
      stroke="#FFFFFF"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PhoneContactProps {
  label: string;
  phone: string;
}

const PhoneContact: React.FC<PhoneContactProps> = ({ label, phone }) => (
  <div className="flex items-center gap-2">
    <WhatsAppIcon className="h-6 w-6 flex-shrink-0" />
    <div className="text-left">
      <p className="text-[11px] leading-none" style={{ color: TEXT_COLOR }}>
        {label}
      </p>
      <p
        className="text-sm font-semibold leading-tight"
        style={{ color: TEXT_COLOR }}
      >
        {phone}
      </p>
    </div>
  </div>
);

interface EmailContactProps {
  email: string;
}

const EmailContact: React.FC<EmailContactProps> = ({ email }) => (
  <div className="flex items-center gap-2">
    <MailIcon className="h-4 w-4 flex-shrink-0" />
    <p className="text-xs sm:text-sm" style={{ color: TEXT_COLOR }}>
      {email}
    </p>
  </div>
);

const AmadeoContactCard: React.FC = () => {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black">
      {/* Foto de fundo */}
      <img
        src={tractorImage}
        alt="Trator em campo agrícola"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Painel verde com recorte curvo à esquerda - CORRIGIDO AQUI */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M100,0 L100,100 L35,100 Q5,50 35,0 Z" fill={GREEN} />
      </svg>

      {/* Conteúdo sobre o painel verde */}
      <div className="absolute inset-y-0 right-0 flex w-[62%] flex-col items-center justify-center gap-4 px-6 py-8 text-center sm:w-[58%] sm:px-10">
        <img
          src={logo}
          alt="Amadeo Serviços Agroflorestais"
          className="h-18 w-auto object-contain sm:h-20"
        />

        <div>
          <h2
            className="text-sm font-bold tracking-wide sm:text-base"
            style={{ color: TEXT_COLOR }}
          >
            AMADEO SERVIÇOS AGROFLORESTAIS
          </h2>
          <p className="text-xs sm:text-sm" style={{ color: TEXT_COLOR }}>
            CNPJ: 28.958.531/0001-00
          </p>
        </div>

        <div className="flex w-full items-center justify-center gap-10">
          <PhoneContact label="Karen" phone="67 9832-9788" />
          <PhoneContact label="Amadeo" phone="67 9956-9985" />
        </div>

        <div className="flex w-full flex-col items-center gap-1.5 border-t border-white/30 pt-3 sm:flex-row sm:justify-center sm:gap-8">
          <EmailContact email="amadeo@amadeoagroflorestal.com.br" />
          <EmailContact email="karen@amadeoagroflorestal.com.br" />
        </div>
      </div>
    </div>
  );
};

export default AmadeoContactCard;
