import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import userTableTurkish from '/../../../public/locales/tr.json';
import userTableEnglish from '/../../../public/locales/en.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getSystemLanguage } from './languageUtils.js';

i18n
  .use(Backend) 
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        usertable: userTableEnglish,
      },
      tr: {
        usertable: userTableTurkish,
      },
    },
    interpolation: { escapeValue: false },
    fallbackNS: 'usertable',
    lng: getSystemLanguage(),
    whitelist: ['en', 'tr'],
  });

document.documentElement.setAttribute('lang', getSystemLanguage());

export default i18n;
