class ReactReduxFirebaseConfig {
    static config = {
        userProfile: 'users',
        presence: 'onlineUsers', // where list of online users is stored in database
        sessions: 'userSessions', // where list of user sessions is stored in database (presence must be enabled)
        useFirestoreForProfile: true,
        autoPopulateProfile: true,
        resetBeforeLogin: false,
        useFirestoreForStorageMeta: true,
    };
}

export default ReactReduxFirebaseConfig;
