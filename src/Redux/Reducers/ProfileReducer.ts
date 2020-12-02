import {createReducer} from "redux-smart-actions";
import {toggleIsEditing} from "../Actions/ProfileActions";
import ProfileState from "../States/ProfileState";

const defaultState: ProfileState = {
    isEditing: false,
    loading: false,
};

const profileReducer = createReducer({
    // @ts-ignore
    [toggleIsEditing]: (state) => ({
        ...state,
        isEditing: !state.isEditing
    })
}, defaultState);

export default profileReducer;
