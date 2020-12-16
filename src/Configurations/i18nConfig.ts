import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Language from '../Models/Language';

i18n.use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: false,
        detection: {
            order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag'],
        },

        // lng: Languages.ENGLISH,
        fallbackLng: Language.ENGLISH.code,
        whitelist: [Language.ENGLISH.code],

        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    })
    .then(() => console.info('i18n initialized successfully'))
    .catch((reason) => console.error('Error occurred while attempting to initialize i18n', reason));
