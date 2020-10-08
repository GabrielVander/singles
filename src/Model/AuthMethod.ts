import {Credentials} from "react-redux-firebase";

enum Providers {
    GOOGLE = 'google',
    FACEBOOK = 'facebook',
}

enum SignInTypes {
    POP_UP = 'popup',
    REDIRECT = 'redirect',
}

class AuthMethod {

    static EMAIL_AND_PASSWORD(email: string, password: string): Credentials {
        return {
            email,
            password,
        };
    }

    static GOOGLE(type?: SignInTypes): Credentials {
        return {
            provider: Providers.GOOGLE,
            type: type ? type : SignInTypes.POP_UP,
        }
    }

    static FACEBOOK(type?: SignInTypes): Credentials {
        return {
            provider: Providers.GOOGLE,
            type: type ? type : SignInTypes.POP_UP,
        }
    }
}

export default AuthMethod;
