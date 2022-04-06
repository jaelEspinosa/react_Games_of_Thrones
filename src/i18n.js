import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          title: "Game of thrones",
          characters: "CHARACTERS",
          houses: "HOUSES",
          cronology: "CRONOLOGY",
          find: "Find",
          return: "Return",
          house: "HOUSE",
          allegiances: "ALLIANCES",
          appearances: "APPEARANCES",
          father: "FATHER",
          related: "RELATED",
          titles: "TITLES",
          seat: "SEAT",
          religion: "RELIGIONS",
          region: "REGION",
          words: "CATCHPHRASE",
          fundation: "FUNDATION",
        },
      },
      es: {
        translation: {
          title: "Juego de tronos",
          characters: "PERSONAJES",
          houses: "CASAS",
          cronology: "CRONOLOGIA",
          find: "Buscar",
          return: "Volver",
          house: "CASA",
          allegiances: "ALIANZAS",
          appearances: "APARICIONES",
          father: "PADRE",
          related: "CONSANGUINEO",
          titles: "TITULOS",
          seat: "sede",
          religion: "RELIGIONES",
          region: "REGION",
          words: "LEMA",
          fundation: "FUNDACION",
        },
      },
    },
  });

export default i18n;
