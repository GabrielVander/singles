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

async function getRandomBackgroundImage() {
    functions.logger.info('Fetching background images from Storage...');

    try {
        const bucket = admin.storage().bucket();
        const filesResult = await bucket.getFiles({directory: "background-images"});
        const files = filesResult[0];
        functions.logger.info(`Fetched ${files.length} images`);

        const randomFile = files[(Math.floor(Math.random() * files.length))];
        const [file] = await bucket.file(randomFile.name).makePublic();
        return `${
            file
                .selfLink
                .split('/acl')[0]
                .replace('www.googleapis.com/storage', 'www.googleapis.com/download/storage')
        }?generation=${file.generation}&alt=media`;
    } catch (e) {
        functions.logger.error(`Something went wrong while attempting to fetch Storage resources:\n${e.message}`);
        return null;
    }

}

export const saveUserToFirestore = functions
    .auth
    .user()
    .onCreate(async (user) => {
        functions.logger.info(`Saving user ${user.uid} to Firestore...`);

        const backgroundImage = await getRandomBackgroundImage();

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
                lastLogin: admin.firestore.FieldValue.serverTimestamp(),
                disabled: user.disabled,
                backgroundImageURL: backgroundImage
            })
            .then(() => functions.logger.info(`User ${user.uid} saved successfully`))
            .catch((reason: any) => functions.logger.error(`Error while attempting to save user ${user.uid} to Firestore:\n${reason}`));
    });
