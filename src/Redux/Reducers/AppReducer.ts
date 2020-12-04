import AppState from '../States/AppState';
import {AppActions, AppActionTypes} from '../Actions/AppActions';

const initialState: AppState = {
    loading: false,
};

function appReducer(state = initialState, action: AppActionTypes) {
    switch (action.type) {
        case AppActions.TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading,
            };
        default:
            return state;
    }
}

export default appReducer;
