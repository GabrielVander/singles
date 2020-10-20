import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp();

export const saveUserToFirestore = functions
    .auth
    .user()
    .onCreate((user) => {
            functions.logger.info(`Saving user ${user.uid} to Firestore...`);
            admin
                .firestore()
                .collection('users')
                .doc(user.uid)
                .set({
                        displayName: user.displayName,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        photoURL: user.photoURL,
                        phoneNumber: user.phoneNumber,
                        lastLogin: admin.firestore.ServerValue.TIMESTAMP,
                        disabled: user.disabled
                })
                .then(() => functions.logger.info(`User ${user.uid} saved successfully`))
                .catch((reason: any) => functions.logger.error(`Error while attempting to save user ${user.uid} to Firestore:\n${reason}`));
    });
