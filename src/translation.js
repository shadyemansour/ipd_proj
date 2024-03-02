import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// If you still need to load translations over the network, replace XHR with i18next-http-backend
// import HttpBackend from "i18next-http-backend";

import translationEn from "./locales/en/translation.json";
import translationEs from "./locales/es/translation.json";

i18n
  // .use(HttpBackend) // Uncomment and configure if you're loading translations over the network
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false, // Indicates that keys should not be split into multiple keys
    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    },

    resources: {
      en: {
        translations: translationEn,
      },
      es: {
        translations: translationEs,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",

    // If you're using http-backend, you might need additional configuration here
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    // },
  });

export default i18n;
