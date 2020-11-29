import React, {useState} from "react";
import {Form, Formik, FormikValues} from "formik";
import {Box, Button, DateInput, FormField, RangeInput, Select, Text, TextArea, TextInput} from "grommet";
import * as Yup from "yup";
import {string} from "yup";
import Gender from "../../../Model/Gender";
import UserDetails from "../../../Model/Authentication/UserDetails";
import Loader from "react-loader-spinner";
import {useTranslation} from "react-i18next";
import firebase from "firebase";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {toggleIsEditing} from "../../../Redux/Actions/ProfileActions";

function Userinfo({userDetails, userDetailsRef}: { userDetails: UserDetails, userDetailsRef: firebase.firestore.DocumentReference }) {
    const {t} = useTranslation(['gender', 'profile']);
    const dispatch = useDispatch();

    const [saving, setSaving] = useState(false);
    const genderOptions = Gender.getOptions.map(value => ({
        code: value.getCode,
        value: t(`gender:${value.getCode}`)
    }));

    const {getData: getLanguageData, getLanguageName: getLanguageByCode} = require('language-list')();
    const languagesList = getLanguageData();

    const {getData: getCountryData, getName: getCountryByCode} = require('country-list');
    const countries = getCountryData();

    const profileSchema = Yup.object({
        fullName: Yup
            .string()
            .required(t('profile:nameIsRequired')),
        birthday: Yup
            .date()
            .required(t('profile:birthdayIsRequired')),
        country: Yup
            .object({code: string(), language: string()})
            .required(t('profile:countryIsRequired')),
        gender: Yup
            .object({code: string(), value: string()})
            .required(t('profile:genderIsRequired')),
        children: Yup
            .number()
            .default(0)
            .required(),
        languages: Yup
            .array()
            .required(t('profile:languageIsRequired'))
            .nullable(),
        description: Yup
            .object()
            .optional()
            .nullable()
    });

    function saveProfile(values: FormikValues) {
        setSaving(true)
        const {
            fullName,
            birthday,
            country,
            gender,
            children,
            languages,
            description
        } = values;

        userDetailsRef.update({
            fullName,
            dateOfBirth: birthday,
            country: country.code,
            gender: gender.code,
            children,
            spokenLanguages: languages.map((language: { code: string; }) => language.code),
            description,
            finishedSetup: true
        })
            .then(() => setSaving(false))
            .catch(reason => toast.error(reason));
    }

    function cancelEdition() {
        dispatch(toggleIsEditing());
    }

    return (
        <Formik
            initialValues={{
                fullName: userDetails.fullName || undefined,
                birthday: userDetails.dateOfBirth || undefined,
                country: {code: userDetails.country, country: getCountryByCode(userDetails.country)} || undefined,
                gender: {code: userDetails.gender, value: t(`gender:${userDetails.gender}`)} || undefined,
                languages: userDetails.spokenLanguages?.map((language: string) => ({
                    code: language,
                    language: getLanguageByCode(language)
                })) || undefined,
                children: userDetails.children || undefined,
                description: userDetails.description || undefined
            }}
            onSubmit={(values) => saveProfile(values)}
            validationSchema={profileSchema}>
            {({
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values
              }) => {
                return (
                    <Form
                        onSubmit={event => {
                            event.preventDefault();
                            handleSubmit();
                        }}>
                        <Box direction="row-responsive" justify="center" fill="horizontal" gap="medium" margin="medium">
                            <Box direction="column">
                                <FormField
                                    error={errors.fullName}
                                    label={t('profile:fullNameLabel')}>
                                    <TextInput
                                        placeholder={t('profile:fullNamePlaceholder')}
                                        onChange={handleChange}
                                        value={values.fullName}
                                        onBlur={handleBlur}
                                        name="fullName"/>
                                </FormField>
                                <FormField
                                    error={errors.birthday}
                                    label={t('profile:birthdayLabel')}>
                                    <DateInput
                                        onChange={(value) => handleChange({
                                            target: {
                                                name: 'birthday',
                                                // @ts-ignore
                                                value: value.value
                                            }
                                        })}
                                        value={values.birthday}
                                        format="dd/mm/yyyy"
                                        name="birthday"/>
                                </FormField>
                                <FormField
                                    error={errors.children}
                                    label={t('profile:childrenLabel')}>
                                    <Box align="center">
                                        <Text>{values.children}</Text>
                                    </Box>
                                    <RangeInput
                                        name="children"
                                        min={0}
                                        max={20}
                                        value={values.children}
                                        onChange={handleChange}
                                    />
                                </FormField>
                            </Box>
                            <Box direction="column">
                                <FormField
                                    error={errors.country}
                                    label={t('profile:countryLabel')}>
                                    <Select
                                        placeholder={t('profile:countryPlaceholder')}
                                        value={values.country}
                                        onChange={({option}) => handleChange({
                                            target: {
                                                name: 'country',
                                                value: option
                                            }
                                        })}
                                        name="country"
                                        labelKey="name"
                                        valueKey="code"
                                        options={countries}/>
                                </FormField>
                                <FormField
                                    error={errors.gender}
                                    label={t('profile:genderLabel')}>
                                    <Select
                                        name="gender"
                                        value={values.gender}
                                        labelKey="value"
                                        valueKey="code"
                                        onChange={({option}) => handleChange({
                                            target: {
                                                name: 'gender',
                                                value: option
                                            }
                                        })}
                                        options={genderOptions}/>
                                </FormField>
                                <FormField
                                    error={errors.languages}
                                    label={t('profile:languageLabel')}>
                                    <Select
                                        name="languages"
                                        multiple
                                        onChange={({value}) => handleChange({
                                            target: {
                                                name: 'languages',
                                                value: value
                                            }
                                        })}
                                        labelKey="language"
                                        valueKey="code"
                                        value={values.languages}
                                        options={languagesList}/>
                                </FormField>
                            </Box>
                        </Box>
                        <Box direction="row-responsive" justify="center" fill="horizontal" gap="medium" margin="medium">
                            <FormField
                                error={errors.description}
                                label={t('profile:descriptionLabel')}>
                                <TextArea
                                    value={values.description}
                                    onChange={handleChange}
                                    fill
                                    size='large'
                                    name="description"
                                    placeholder={t('profile:descriptionPlaceholder')}/>
                            </FormField>
                        </Box>
                        <Box
                            direction="row"
                            justify="center"
                            margin="medium"
                            gap='medium'
                        >
                            <Button
                                type="submit"
                                disabled={saving}
                                primary
                                label={t('profile:saveButtonLabel')}
                                icon={
                                    saving
                                        ? <Loader type="TailSpin" color="#00BFFF" width={25} height={25}/>
                                        : undefined
                                }/>

                            <Button
                                disabled={saving}
                                label={t('profile:cancelButtonLabel')}
                                onClick={cancelEdition}
                                secondary/>
                        </Box>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default Userinfo;
