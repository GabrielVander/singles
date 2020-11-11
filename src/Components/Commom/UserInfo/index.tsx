import React, {useState} from "react";
import {Form, Formik} from "formik";
import {Box, DateInput, FormField, RangeInput, Select, Text, TextInput} from "grommet";
import * as Yup from "yup";
import Gender from "../../../Model/Gender";

function Userinfo() {
    const countries = ['Brazil', 'United States'];
    const genderOptions = Object
        .keys(Gender)
        .filter(key => typeof Gender[key as any] === "number")
        .map(key => key.charAt(0) + key.slice(1).toLowerCase());

    const [children, setChildren] = useState(0);

    const profileSchema = Yup.object({
        fullName: Yup
            .string()
            .required('Name is required'),
        birthday: Yup
            .date()
            .required('Birthday is required'),
        country: Yup
            .string()
            .optional()
            .oneOf(countries),
        gender: Yup
            .string()
            .optional()
            .oneOf(genderOptions),
        children: Yup
            .number()
            .default(0)
            .required()
    });

    return (
        <Formik
            initialValues={{
                fullName: '',
                birthday: '01/01/2000',
                country: '',
                gender: '',
                languages: '',
                children: children
            }}
            onSubmit={() => console.log('Submitted')}
            validationSchema={profileSchema}>
            {({
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit
              }) => {
                return (
                    <Form
                        onSubmit={event => {
                            event.preventDefault();
                            handleSubmit();
                        }}>
                        <Box direction="row-responsive" fill="horizontal" gap="medium">
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
                                        <Text>{children}</Text>
                                    </Box>
                                    <RangeInput
                                        name="children"
                                        value={children}
                                        min={0}
                                        max={20}
                                        onChange={event => setChildren(Number(event.target.value))}
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
                            </Box>
                        </Box>

                        {/*<Box*/}
                        {/*    direction="row"*/}
                        {/*    gap="medium"*/}
                        {/*    justify="center"*/}
                        {/*    margin="medium"*/}
                        {/*>*/}
                        {/*    <Button type="submit" primary label={t('register:registerButtonLabel')}/>*/}
                        {/*</Box>*/}
                        {/*<Box*/}
                        {/*    direction="row"*/}
                        {/*    justify="center"*/}
                        {/*    align="center"*/}
                        {/*    margin="small"*/}
                        {/*>*/}
                        {/*    <Paragraph margin="none">*/}
                        {/*        {t('register:registerVia')}*/}
                        {/*    </Paragraph>*/}
                        {/*</Box>*/}
                        {/*<Box*/}
                        {/*    direction="row"*/}
                        {/*    justify="around"*/}
                        {/*>*/}
                        {/*    <Button*/}
                        {/*        onClick={registerWithGoogle}*/}
                        {/*        icon={<Google color="plain"/>}/>*/}
                        {/*    <Button*/}
                        {/*        onClick={registerWithFacebook}*/}
                        {/*        icon={<Facebook color="plain"/>}/>*/}
                        {/*    <Button*/}
                        {/*        onClick={registerWithTwitter}*/}
                        {/*        icon={<Twitter color="plain"/>}/>*/}
                        {/*</Box>*/}
                        {/*<Box margin="small" align="center">*/}
                        {/*    <Paragraph margin="none" textAlign="center">*/}
                        {/*        <Trans i18nKey="register:register">*/}
                        {/*            Already have an account? <Link to={LOGIN.path}>Login</Link>*/}
                        {/*        </Trans>*/}
                        {/*    </Paragraph>*/}
                        {/*</Box>*/}
                    </Form>
                );
            }}
        </Formik>
    );
}

export default Userinfo;
