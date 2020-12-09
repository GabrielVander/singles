import { createStore } from 'redux';
import rootReducer from './Reducers';

class Store {
    static INITIAL_GLOBAL_STATE = {};

    static store = createStore(
        rootReducer,
        Store.INITIAL_GLOBAL_STATE,
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
}

export default Store;
