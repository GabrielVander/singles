import React, {useState} from "react";
import {Form, Formik, FormikValues} from "formik";
import {Box, Button, DateInput, FormField, RangeInput, Select, Text, TextArea, TextInput} from "grommet";
import * as Yup from "yup";
import {string} from "yup";
import Gender from "../../../Model/Gender";
import UserDetails from "../../../Model/Authentication/UserDetails";
import Loader from "react-loader-spinner";
import {useTranslation} from "react-i18next";

function Userinfo({userDetails}: { userDetails: UserDetails }) {
    const {t} = useTranslation(['defaultApp'])

    const [saving, setSaving] = useState(false);
    const genderOptions = Gender.getOptions.map(value => ({
        code: value.getCode,
        value: t(`defaultApp:${value.getCode}`)
    }));

    const {getData: getLanguageData} = require('language-list')();
    const languagesList = getLanguageData();

    const {getData: getCountryData} = require('country-list');
    const countries = getCountryData();

    const profileSchema = Yup.object({
        fullName: Yup
            .string()
            .required('Name is required'),
        birthday: Yup
            .date()
            .required('Birthday is required'),
        country: Yup
            .object({code: string(), language: string()})
            .required('Country is required'),
        gender: Yup
            .object({code: string(), value: string()})
            .required('Gender is required'),
        children: Yup
            .number()
            .default(0)
            .required(),
        languages: Yup
            .array()
            .required('Languages are required')
            .nullable(),
        description: Yup
            .object()
            .optional()
            .nullable()
    });

    function saveProfile(values: FormikValues) {
        console.debug(values)
        setSaving(true)
        return undefined;
    }

    return (
        <Formik
            initialValues={{
                fullName: userDetails.fullName || undefined,
                birthday: userDetails.dateOfBirth || undefined,
                country: userDetails.country || undefined,
                gender: userDetails.gender || undefined,
                languages: userDetails.spokenLanguages?.map((language: string) => ({code: language})) || undefined,
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
                                    label={'Full name'}>
                                    <TextInput
                                        placeholder={'Your full name'}
                                        onChange={handleChange}
                                        value={values.fullName}
                                        onBlur={handleBlur}
                                        name="fullName"/>
                                </FormField>
                                <FormField
                                    error={errors.birthday}
                                    label={'Birthday'}>
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
                                    label={'How many children?'}>
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
                                    label={'Country'}>
                                    <Select
                                        placeholder={'Your current country'}
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
                                    label={'Gender'}>
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
                                    label={'Languages you speak'}>
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
                            <Box direction="column">
                                <FormField
                                    error={errors.description}
                                    label={'Description'}>
                                    <TextArea
                                        value={values.description}
                                        onChange={handleChange}
                                        name="description"
                                        placeholder={"Brief summary"}/>
                                </FormField>
                            </Box>
                        </Box>
                        <Box
                            direction="row"
                            justify="center"
                            margin="medium"
                        >
                            <Button
                                type="submit"
                                disabled={saving}
                                primary
                                label={'Save'}
                                icon={
                                    saving
                                        ? <Loader type="TailSpin" color="#00BFFF" width={25} height={25}/>
                                        : undefined
                                }/>
                        </Box>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default Userinfo;
