import {createStore} from "redux";
import rootReducer from "./Reducers";

class Store {
    static INITIAL_GLOBAL_STATE = {};
    // @ts-ignore
    static store = createStore(rootReducer, Store.INITIAL_GLOBAL_STATE, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default Store;
