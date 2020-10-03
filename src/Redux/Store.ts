import {createStore} from "redux";
import rootReducer from "./Reducers";

class Store {
    static INITIAL_GLOBAL_STATE = {};
    static store = createStore(rootReducer, Store.INITIAL_GLOBAL_STATE);
}

export default Store;
