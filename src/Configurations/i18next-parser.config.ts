// @ts-ignore
module.exports = {
    createOldCatalogs: false,
    defaultNamespace: 'translation',
    defaultValue: '',
    keepRemoved: false,
    indentation: 2,
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
