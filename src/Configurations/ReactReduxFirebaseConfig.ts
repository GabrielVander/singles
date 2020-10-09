class ReactReduxFirebaseConfig {
    static config = {
        userProfile: "users",
        useFirestoreForProfile: true,
        profileFactory: (userData: any, profileData: any, firebase: any) => { // how profiles are stored in database

            firebase
                .firestore()
                .collection('users')
                .doc(userData.uid)
                .set({
                    displayName: userData.displayName,
                    email: userData.email,
                    emailVerified: userData.emailVerified,
                    photoURL: userData.photoURL,
                    phoneNumber: userData.phoneNumber,
                    lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
                    providerData: [{
                        uid: profileData.providerData[0].uid,
                        displayName: profileData.providerData[0].displayName,
                        photoURL: profileData.providerData[0].photoURL,
                        email: profileData.providerData[0].email,
                        phoneNumber: profileData.providerData[0].phoneNumber,
                        providerId: profileData.providerData[0].providerId,
                    }]
                });
        }
    };
}

export default ReactReduxFirebaseConfig;
