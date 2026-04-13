import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import mr from './mr.json';
import ur from './ur.json';

export const languages = {
  en: {
    label: 'English',
    shortLabel: 'EN',
    dir: 'ltr',
    fontClass: 'font-english',
  },
  ur: {
    label: 'اردو',
    shortLabel: 'UR',
    dir: 'rtl',
    fontClass: 'font-urdu',
  },
  mr: {
    label: 'मराठी',
    shortLabel: 'MR',
    dir: 'ltr',
    fontClass: 'font-marathi',
  },
};

const storedLanguage = localStorage.getItem('school-language');
const initialLanguage = languages[storedLanguage] ? storedLanguage : 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ur: { translation: ur },
    mr: { translation: mr },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
