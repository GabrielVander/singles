import AppState from './AppState';
import ProfileState from './ProfileState';

interface RootState {
    app: AppState;
    profile: ProfileState;
}

export default RootState;
