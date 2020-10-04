import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Languages from "../Model/Languages";

i18n
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        detection: {
            order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag'],
        },

        // lng: Languages.ENGLISH,
        fallbackLng: Languages.ENGLISH,
        whitelist: [Languages.ENGLISH],

        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
