// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import TranslationEN from "./en.json";
import TranslationAR from "./ar.json";

const resources = {
  en: {
    translation: TranslationEN,
  },
  ar: {
    translation: TranslationAR,
  },
};

i18n
  // .use(LanguageDetector) // كشف لغة المتصفح
  .use(initReactI18next) // دمج i18n مع React
  .init({
    resources,
    fallbackLng: "ar", // اللغة الاحتياطية
    interpolation: {
      escapeValue: false, // الترجمة لا تحتاج إلى هروب خاص بـ React
    },
  });

export default i18n;
