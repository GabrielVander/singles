interface User {
    uid: string,
    displayName: string,
    email: string,
    emailVerified: boolean,
    photoURL: string,
    phoneNumber: string,
    lastLogin: string,
    disabled: boolean,
    backgroundImageURL: string,
    finishedSetup: boolean,
    fullName: string,
    dateOfBirth: string,
    children: number,
    gender: string,
    description: string,
    country: string,
    spokenLanguages: string[]
}

export default User;
