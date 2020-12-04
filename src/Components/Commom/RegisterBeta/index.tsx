import React, {ReactElement, useState} from 'react';
import {Box, Button, Text, TextInput} from 'grommet';
import {useTranslation} from 'react-i18next';
import {useAnalytics, useFirestore} from 'reactfire';
import firebase from 'firebase/app';
import {toast} from 'react-toastify';

const RegisterBeta = (): ReactElement => {
    const {t} = useTranslation(['registerBeta']);
    const firestore = useFirestore();
    const analytics = useAnalytics();

    const [email, setEmail] = useState<string>('');
    const [savingEmail, setSavingEmail] = useState<boolean>(false);
    const [hasFocus, setHasFocus] = useState<boolean>(false);

    async function applyForBeta(): Promise<void> {
        setSavingEmail(() => true);

        if (!email || email.length === 0) {
            setSavingEmail(() => false);
            return;
        }

        if (!emailIsValid()) {
            setSavingEmail(() => false);
            toast.error(t('registerBeta:invalidEmail'));
            return;
        }

        const collection = firestore.collection('betaApplications');

        if (await emailExists(collection)) {
            setSavingEmail(() => false);
            toast.info(t('registerBeta:emailExists'));
            return;
        }

        collection
            .add({
                email,
                addedAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then((value) => {
                analytics.logEvent('appliedForBeta', {
                    email,
                    id: value.id,
                });
                setSavingEmail(() => false);
                toast.success(t('registerBeta:emailSaved'));
            })
            .catch((reason) => {
                setSavingEmail(() => false);
                toast.error(t('registerBeta:error', {reason}));
            });
    }

    function emailIsValid(): boolean {
        return new RegExp('\\S+@\\S+\\.\\S+').test(email);
    }

    async function emailExists(collection: firebase.firestore.CollectionReference): Promise<boolean> {
        const querySnapshot = await collection.where('email', '==', email).get();

        return !querySnapshot.empty;
    }

    // noinspection HtmlUnknownTarget
    return (
        <Box direction="row" width="large" justify="center">
            <Box
                direction="row"
                align="center"
                width="medium"
                border={{
                    side: 'bottom',
                    color: hasFocus ? 'focus' : 'brand',
                }}
            >
                <TextInput
                    plain
                    placeholder={<Text size="small">{t('registerBeta:emailPlaceholder')}</Text>}
                    value={email}
                    disabled={savingEmail}
                    onChange={(event): void => setEmail(event.target.value)}
                    onFocus={(): void => setHasFocus(true)}
                    onBlur={(): void => setHasFocus(false)}
                />
            </Box>
            <Button disabled={savingEmail} onClick={applyForBeta}>
                <Box
                    round="xlarge"
                    background="accent-1"
                    pad={{
                        vertical: 'small',
                        horizontal: 'medium',
                    }}
                >
                    <Text size="small" color="brand" weight="bold" textAlign="center">
                        {t('registerBeta:applyButton')}
                    </Text>
                </Box>
            </Button>
        </Box>
    );
};

export default RegisterBeta;
