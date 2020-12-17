import { combineReducers } from 'redux';
import appReducer from './AppReducer';
import profileReducer from './ProfileReducer';
import postReducer from './PostReducer';

const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    post: postReducer,
});

export default rootReducer;
