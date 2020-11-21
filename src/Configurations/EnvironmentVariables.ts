import process from "process";

class EnvironmentVariables {

    public static developmentMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

}

export default EnvironmentVariables;
