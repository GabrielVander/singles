class Country {
    public static UNITED_STATES = new Country('us');
    public static UNITED_KINGDOM = new Country('uk');
    public static GERMANY = new Country('ge');
    public static BRAZIL = new Country('br');
    public static OTHER = new Country('other');

    constructor(private readonly _code: string) {
        this._code = _code;
    }

    static get options(): Country[] {
        return [this.UNITED_STATES, this.UNITED_KINGDOM, this.GERMANY, this.BRAZIL, this.OTHER];
    }

    get code(): string {
        return this._code;
    }
}

export default Country;
