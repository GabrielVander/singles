import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";
import "firebase/auth";
import "firebase/firestore";

class FirebaseConfig {

    public static config = {
        apiKey: "AIzaSyC0DUjj-QV0rJIndPbilcf4YO3hq8JRJRw",
        authDomain: "singles-7aa8b.firebaseapp.com",
        databaseURL: "https://singles-7aa8b.firebaseio.com",
        projectId: "singles-7aa8b",
        storageBucket: "singles-7aa8b.appspot.com",
        messagingSenderId: "259214220861",
        appId: "1:259214220861:web:297e04e24700cc05515454",
        measurementId: "G-ESVCNFV5MH"
    };

    static initialize = () => {
        firebase.initializeApp(FirebaseConfig.config);
        firebase.analytics();
        firebase.performance();
        firebase.auth();
        firebase.firestore();
    }
}

export default FirebaseConfig;
