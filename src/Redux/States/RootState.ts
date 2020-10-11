import {FirebaseReducer, FirestoreReducer} from "react-redux-firebase";
import AppState from "./AppState";

interface Profile {
    id: string
    name: string
    email: string
}

interface RootState {
    firebase: FirebaseReducer.Reducer<Profile>;
    firestore: FirestoreReducer.Reducer;
    app: AppState;
}

export default RootState;
