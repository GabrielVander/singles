import AppState from './AppState';
import ProfileState from './ProfileState';
import PostState from './PostState';

interface RootState {
    app: AppState;
    profile: ProfileState;
    post: PostState;
}

export default RootState;
