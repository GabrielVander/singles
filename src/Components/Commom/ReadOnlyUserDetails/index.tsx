import UserDetails from "../../../Model/Authentication/UserDetails";
import {Box, Button, DateInput, FormField, RangeInput, Text, TextInput} from "grommet";
import React from "react";
import {toggleIsEditing} from "../../../Redux/Actions/ProfileActions";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

interface ReadOnlyUserDetailsProps {
    userDetails: UserDetails;
}

function ReadOnlyUserDetails({userDetails}: ReadOnlyUserDetailsProps) {
    const {t} = useTranslation(['gender', 'profile']);
    const dispatch = useDispatch();

    const {getName: getCountryByCode} = require('country-list');
    const {getLanguageName: getLanguageByCode} = require('language-list')();

    const isProfileOwner = true;

    const gender: string = t(`gender:${userDetails.gender}`);
    const languages = userDetails
        .spokenLanguages?.map((language: string) => getLanguageByCode(language))
        .reduce((accumulator, value) => `${accumulator}, ${value}`);

    return (
        <Box>
            <Box direction="row-responsive" justify="center" gap="medium">
                <Box direction="column" width="medium">
                    <FormField label={t('profile:fullNameLabel')}>
                        <TextInput placeholder={t('profile:unspecifiedLabel')} readOnly
                                   value={userDetails.fullName || undefined}/>
                    </FormField>
                </Box>
                <Box direction="column" width="medium">
                    <FormField label={t('profile:countryLabel')}>
                        <TextInput placeholder={t('profile:unspecifiedLabel')} readOnly
                                   value={getCountryByCode(userDetails.country) || undefined}/>
                    </FormField>
                </Box>
            </Box>
            <Box direction="row-responsive" align="center" gap="medium">
                <Box direction="column" width="medium">
                    <FormField label={t('profile:genderLabel')}>
                        <TextInput placeholder={t('profile:unspecifiedLabel')} readOnly value={gender || undefined}/>
                    </FormField>
                </Box>
                <Box direction="column" width="medium">
                    <FormField label={t('profile:birthdayLabel')}>
                        <DateInput
                            calendarProps={{
                                size: "small",
                                style: {
                                    display: "none"
                                }
                            }}
                            buttonProps={{
                                disabled: true
                            }}
                            inputProps={{
                                readOnly: true
                            }}
                            format={"mm/dd/yyyy"}
                            value={userDetails.dateOfBirth}/>
                    </FormField>
                </Box>
            </Box>
            <Box direction="row-responsive" align="center" gap="medium">
                <Box direction="column" width="medium">
                    <FormField readOnly label={t('profile:childrenLabel')}>
                        <Box>
                            <RangeInput
                                disabled
                                min={0}
                                max={20}
                                defaultValue={userDetails.children}
                            />
                            <Box align="center">
                                <Text>{userDetails.children || t('profile:unspecifiedLabel')}</Text>
                            </Box>
                        </Box>
                    </FormField>
                </Box>
                <Box direction="column" width="medium">
                    <FormField label={t('profile:languageLabel')}>
                        <TextInput
                            placeholder={t('profile:unspecifiedLabel')}
                            readOnly
                            value={languages}/>
                    </FormField>
                </Box>
            </Box>
            {isProfileOwner && (
                <Box
                    direction="row-responsive"
                    margin="medium"
                    justify="center">
                    <Button primary label={t('profile:editButtonLabel')} onClick={() => dispatch(toggleIsEditing())}/>
                </Box>
            )}
        </Box>
    );
}

export default ReadOnlyUserDetails;
