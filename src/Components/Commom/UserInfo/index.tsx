import React from "react";
import {Form, Formik} from "formik";
import {Box, Button, DateInput, FormField, RangeInput, Select, Text, TextArea, TextInput} from "grommet";
import * as Yup from "yup";
import Gender from "../../../Model/Gender";
import UserDetails from "../../../Model/Authentication/UserDetails";

function Userinfo({userDetails}: { userDetails: UserDetails }) {
    const genderOptions = Object
        .keys(Gender)
        .filter(key => typeof Gender[key as any] === "number")
        .map(key => key.charAt(0) + key.slice(1).toLowerCase());

    const languages = require('language-list')();
    const languagesList = languages.getData();

    const {getData} = require('country-list');
    const countries = getData();

    const profileSchema = Yup.object({
        fullName: Yup
            .string()
            .required('Name is required'),
        birthday: Yup
            .date()
            .required('Birthday is required'),
        country: Yup
            .string()
            .required('Country is required')
            .oneOf(countries.map((country: { code: string; }) => country.code)),
        gender: Yup
            .string()
            .required('Gender is required')
            .oneOf(genderOptions),
        children: Yup
            .number()
            .default(0)
            .required(),
        languages: Yup
            .object()
            .required('Languages are required')
            .nullable(),
        description: Yup
            .object()
            .optional()
            .nullable()
    });

    return (
        <Formik
            initialValues={{
                fullName: userDetails.fullName || undefined,
                birthday: userDetails.dateOfBirth || undefined,
                country: userDetails.country || undefined,
                gender: userDetails.gender || undefined,
                languages: userDetails.spokenLanguages?.reduce((previousValue, currentValue) => `${previousValue}, ${currentValue}`) || undefined,
                children: userDetails.children || undefined,
                description: userDetails.description || undefined
            }}
            onSubmit={(values) => console.log(values)}
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
                                        onBlur={handleBlur}
                                        name="fullName"/>
                                </FormField>
                                <FormField
                                    error={errors.birthday}
                                    label={'Birthday'}>
                                    <DateInput
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
                                        onChange={handleChange}
                                        name="passwordConfirmation"
                                        labelKey="name"
                                        valueKey="code"
                                        options={countries}/>
                                </FormField>
                                <FormField
                                    error={errors.gender}
                                    label={'Gender'}>
                                    <Select
                                        name="gender"
                                        onChange={handleChange}
                                        options={genderOptions}/>
                                </FormField>
                                <FormField
                                    error={errors.languages}
                                    label={'Languages you speak'}>
                                    <Select
                                        name="languages"
                                        multiple
                                        onChange={({value}) => {
                                            handleChange({
                                                target: {
                                                    name: 'languages',
                                                    value
                                                }
                                            });
                                        }}
                                        labelKey="language"
                                        valueKey="code"
                                        options={languagesList}/>
                                </FormField>
                            </Box>
                        </Box>
                        <Box direction="row-responsive" justify="center" fill="horizontal" gap="medium" margin="medium">
                            <Box direction="column">
                                <FormField
                                    error={errors.description}
                                    label={'Description'}>
                                    <TextArea value={values.description} placeholder={"Brief summary"}/>
                                </FormField>
                            </Box>
                        </Box>
                        <Box
                            direction="row"
                            justify="center"
                            margin="medium"
                        >
                            <Button type="submit" primary label={'Save'}/>
                        </Box>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default Userinfo;
