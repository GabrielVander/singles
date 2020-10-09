import {combineReducers} from "redux";
import {FirebaseReducer, firebaseReducer, FirestoreReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

interface Profile {
    id: string
    name: string
    email: string
}

export interface RootState {
    firebase: FirebaseReducer.Reducer<Profile>;
    firestore: FirestoreReducer.Reducer;
}

const rootReducer = combineReducers<RootState>({
    firebase: firebaseReducer,
    // @ts-ignore
    firestore: firestoreReducer,
});

export default rootReducer;
