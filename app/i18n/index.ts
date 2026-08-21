import i18n, {
  type BackendModule,
  type ReadCallback,
  type ResourceKey,
} from "i18next";
import { initReactI18next } from "react-i18next";

const localeDirectories: Record<string, string> = {
  "pt-BR": "pt",
};

const staticLocalesBackend: BackendModule = {
  type: "backend",
  init: () => undefined,
  read(language: string, namespace: string, callback: ReadCallback) {
    const localeDirectory = localeDirectories[language] ?? language;

    fetch(`/_static/locales/${localeDirectory}/${namespace}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not load ${language}/${namespace}`);
        }

        return response.json();
      })
      .then((translations: ResourceKey) => callback(null, translations))
      .catch((error: unknown) => callback(error as Error, null));
  },
};

const i18nReady = i18n
  .use(staticLocalesBackend)
  .use(initReactI18next)
  .init({
    lng: "pt-BR",
    fallbackLng: "pt-BR",
    supportedLngs: ["pt-BR"],
    ns: ["common", "landing"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18nReady;
