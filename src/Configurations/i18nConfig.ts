import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import Languages from "../Model/Languages";

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        debug: true,

        lng: Languages.ENGLISH,
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
