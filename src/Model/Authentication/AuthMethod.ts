import {Credentials} from "react-redux-firebase";
import {SignInTypes} from "./SignInTypes";
import {Providers} from "./Providers";


class AuthMethod {
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

    static TWITTER(type?: SignInTypes): Credentials {
        return {
            provider: Providers.TWITTER,
            type: type ? type : SignInTypes.POP_UP,
        }
    }
}

export default AuthMethod;
