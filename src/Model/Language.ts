class Language {
    public static ENGLISH = new Language('en');
    public static GERMAN = new Language('ge');
    public static PORTUGUESE = new Language('pt');
    public static OTHER = new Language('other');

    constructor(private readonly _code: string) {
        this._code = _code;
    }

    static get options(): Language[] {
        return [this.ENGLISH, this.GERMAN, this.PORTUGUESE, this.OTHER];
    }

    get code(): string {
        return this._code;
    }
}

export default Language;
