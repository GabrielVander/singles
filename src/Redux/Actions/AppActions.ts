export enum AppActions {
    TOGGLE_LOADING
}

interface ActionToggleLoading {
    type: AppActions.TOGGLE_LOADING;
}

export function toggleLoading() {
    return {
        type: AppActions.TOGGLE_LOADING
    }
}

export type AppActionTypes = ActionToggleLoading
