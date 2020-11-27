class Gender {

    public static MALE = new Gender('ma');
    public static FEMALE = new Gender('fe');
    public static UNDEFINED = new Gender('un');

    constructor(private code: string) {
    }

    public static get getOptions(): Gender[] {
        return [this.MALE, this.FEMALE, this.UNDEFINED]
    }

    public get getCode(): string {
        return this.code;
    }

}

export default Gender;
