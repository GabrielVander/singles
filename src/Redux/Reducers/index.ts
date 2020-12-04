import { combineReducers } from 'redux';
import appReducer from './AppReducer';
import profileReducer from './ProfileReducer';

const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
});

export default rootReducer;
