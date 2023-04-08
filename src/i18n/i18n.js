import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { spanish } from './spanish';

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          Personal2: 'Personal'
        }
      },
      es: {
        translation: spanish
      }
    }
  });
