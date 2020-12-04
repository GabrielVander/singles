import React, {useState} from 'react';
import {Form, Formik, FormikValues} from 'formik';
import {Box, Button, DateInput, FormField, RangeInput, Select, Text, TextArea, TextInput} from 'grommet';
import * as Yup from 'yup';
import {string} from 'yup';
import Loader from 'react-loader-spinner';
import {useTranslation} from 'react-i18next';
import firebase from 'firebase';
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';

import {toggleIsEditing} from '../../../Redux/Actions/ProfileActions';

import UserDetails from '../../../Model/Authentication/UserDetails';
import Gender from '../../../Model/Gender';
import Language from '../../../Model/Language';
import Country from '../../../Model/Country';

interface UserInfoProps {
    userDetails: UserDetails;
    userDetailsRef: firebase.firestore.DocumentReference;
}

function Userinfo({ userDetails, userDetailsRef }: UserInfoProps) {
    const { t } = useTranslation(['gender', 'profile', 'accessibility', 'country', 'language']);
    const dispatch = useDispatch();

    const [saving, setSaving] = useState(false);
    const genderOptions = Gender.options.map((value) => ({
        code: value.getCode,
        value: t(`gender:${value.getCode}`),
    }));

    const languageOptions = Language.options.map((language) => ({
        code: language.code,
        language: t(`language:${language.code}`),
    }));
    const countryOptions = Country.options.map((country) => ({
        code: country.code,
        country: t(`country:${country.code}`),
    }));

    const profileSchema = Yup.object({
        fullName: Yup.string().required(t('profile:nameIsRequired')),
        birthday: Yup.date().required(t('profile:birthdayIsRequired')),
        country: Yup.object({ code: string(), language: string() }).required(t('profile:countryIsRequired')),
        gender: Yup.object({ code: string(), value: string() }).required(t('profile:genderIsRequired')),
        children: Yup.number().default(0).required(),
        languages: Yup.array().required(t('profile:languageIsRequired')).nullable(),
        description: Yup.object().optional().nullable(),
    });

    function saveProfile(values: FormikValues) {
        setSaving(true);
        const { fullName, birthday, country, gender, children, languages, description } = values;

        userDetailsRef
            .update({
                fullName: fullName || null,
                dateOfBirth: birthday || null,
                country: country?.code || null,
                gender: gender?.code || null,
                children: children || null,
                spokenLanguages: languages?.map((language: { code: string }) => language?.code) || null,
                description: description || null,
                finishedSetup: true,
            })
            .then(() => {
                setSaving(false);
                toast.success(t('profile:updateSuccess'));
            })
            .catch((reason) => toast.error(reason));
    }

    function cancelEdition() {
        dispatch(toggleIsEditing());
    }

    return (
        <Formik
            initialValues={{
                fullName: userDetails.fullName || undefined,
                birthday: userDetails.dateOfBirth || undefined,
                country: userDetails.country
                    ? {
                          code: userDetails.country,
                          country: t(`country:${userDetails.country}`),
                      }
                    : undefined,
                gender: userDetails.gender
                    ? {
                          code: userDetails.gender,
                          value: t(`gender:${userDetails.gender}`),
                      }
                    : undefined,
                languages:
                    userDetails.spokenLanguages?.map((language: string) => ({
                        code: language,
                        language: t(`language:${userDetails.gender}`),
                    })) || undefined,
                children: userDetails.children || undefined,
                description: userDetails.description || undefined,
            }}
            onSubmit={(values) => saveProfile(values)}
            validationSchema={profileSchema}
        >
            {({ errors, handleChange, handleBlur, handleSubmit, values }) => {
                return (
                    <Form
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <Box direction="row-responsive" justify="center" fill="horizontal" gap="medium" margin="medium">
                            <Box direction="column">
                                <FormField error={errors.fullName} label={t('profile:fullNameLabel')}>
                                    <TextInput
                                        placeholder={t('profile:fullNamePlaceholder')}
                                        onChange={handleChange}
                                        value={values.fullName}
                                        onBlur={handleBlur}
                                        name="fullName"
                                    />
                                </FormField>
                                <FormField error={errors.birthday} label={t('profile:birthdayLabel')}>
                                    <DateInput
                                        onChange={(value) =>
                                            handleChange({
                                                target: {
                                                    name: 'birthday',
                                                    // @ts-ignore
                                                    value: value.value,
                                                },
                                            })
                                        }
                                        value={values.birthday}
                                        format="dd/mm/yyyy"
                                        name="birthday"
                                    />
                                </FormField>
                                <FormField error={errors.children} label={t('profile:childrenLabel')}>
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
                                <FormField error={errors.country} label={t('profile:countryLabel')}>
                                    <Select
                                        a11yTitle={t('accessibility:profile.countryLabel')}
                                        placeholder={t('profile:countryPlaceholder')}
                                        value={values.country}
                                        onChange={({ option }) =>
                                            handleChange({
                                                target: {
                                                    name: 'country',
                                                    value: option,
                                                },
                                            })
                                        }
                                        name="country"
                                        labelKey="country"
                                        valueKey="code"
                                        options={countryOptions}
                                    />
                                </FormField>
                                <FormField error={errors.gender} label={t('profile:genderLabel')}>
                                    <Select
                                        name="gender"
                                        value={values.gender}
                                        labelKey="value"
                                        valueKey="code"
                                        onChange={({ option }) =>
                                            handleChange({
                                                target: {
                                                    name: 'gender',
                                                    value: option,
                                                },
                                            })
                                        }
                                        options={genderOptions}
                                    />
                                </FormField>
                                <FormField error={errors.languages} label={t('profile:languageLabel')}>
                                    <Select
                                        name="languages"
                                        multiple
                                        onChange={({ value }) =>
                                            handleChange({
                                                target: {
                                                    name: 'languages',
                                                    value: value,
                                                },
                                            })
                                        }
                                        labelKey="language"
                                        valueKey="code"
                                        value={values.languages}
                                        options={languageOptions}
                                    />
                                </FormField>
                            </Box>
                        </Box>
                        <Box direction="row-responsive" justify="center" fill="horizontal" gap="medium" margin="medium">
                            <FormField error={errors.description} label={t('profile:descriptionLabel')}>
                                <TextArea
                                    value={values.description}
                                    onChange={handleChange}
                                    a11yTitle={t('accessibility:profile.descriptionLabel')}
                                    fill
                                    size="large"
                                    name="description"
                                    placeholder={t('profile:descriptionPlaceholder')}
                                />
                            </FormField>
                        </Box>
                        <Box direction="row" justify="center" margin="medium" gap="medium">
                            <Button
                                type="submit"
                                disabled={saving}
                                primary
                                label={t('profile:saveButtonLabel')}
                                icon={
                                    saving ? (
                                        <Loader type="TailSpin" color="#00BFFF" width={25} height={25} />
                                    ) : undefined
                                }
                            />

                            <Button
                                disabled={saving}
                                label={t('profile:cancelButtonLabel')}
                                onClick={cancelEdition}
                                secondary
                            />
                        </Box>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default Userinfo;
