import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/performance';
import 'firebase/auth';
import 'firebase/firestore';
import EnvironmentVariables from './EnvironmentVariables';

class FirebaseConfig {
    public static config = {
        apiKey: 'AIzaSyC0DUjj-QV0rJIndPbilcf4YO3hq8JRJRw',
        authDomain: 'singles-7aa8b.firebaseapp.com',
        databaseURL: EnvironmentVariables.developmentMode
            ? 'http://localhost:8080'
            : 'https://singles-7aa8b.firebaseio.com',
        projectId: 'singles-7aa8b',
        storageBucket: 'singles-7aa8b.appspot.com',
        messagingSenderId: '259214220861',
        appId: '1:259214220861:web:297e04e24700cc05515454',
        measurementId: 'G-ESVCNFV5MH',
    };

    static initialize = (): void => {
        firebase.initializeApp(FirebaseConfig.config);
        firebase.analytics();
        firebase.performance();
        const auth = firebase.auth();
        const firestore = firebase.firestore();
        if (EnvironmentVariables.developmentMode) {
            auth.useEmulator('http://localhost:9099/');
            firestore.settings({host: 'localhost:8080', ssl: false});
        }
    };
}

export default FirebaseConfig;
