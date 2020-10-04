// @ts-ignore
module.exports = {
    createOldCatalogs: true,
    defaultNamespace: 'translation',
    defaultValue: '',
    keepRemoved: false,
    indentation: 4,
    lexers: {
        js: ['JsxLexer'],
        ts: ['JsxLexer'],
        jsx: ['JsxLexer'],
        tsx: ['JsxLexer'],

        default: ['JsxLexer'],
    },
    locales: ['en'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    input: ['../**/*.{js,jsx,ts,tsx}'],
    verbose: true,
};
