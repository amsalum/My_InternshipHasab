import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import frTranslation from './locales/am.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    am: {
        translation: frTranslation,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // Set the default language here
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;