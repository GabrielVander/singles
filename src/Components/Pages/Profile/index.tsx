import React from "react";
import {
    Avatar,
    Box,
    Button,
    DateInput,
    FormField,
    Heading,
    Main,
    Nav,
    Paragraph,
    Select,
    Sidebar,
    Tab,
    Tabs,
    TextInput
} from "grommet";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import Gender from "../../../Model/Gender";
import {Logout} from "grommet-icons";

function Profile() {
    const countries = ['Brazil', 'United States'];
    const genderOptions = Object
        .keys(Gender)
        .filter(key => typeof Gender[key as any] === "number")
        .map(key => key.charAt(0) + key.slice(1).toLowerCase());

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
            .oneOf(genderOptions)
    });

    return (
        <Box direction="row" fill>
            <Sidebar
                align="center"
                width="xsmall"
                pad={{bottom: "medium", top: "medium"}}
                background="brand"
                header={
                    <Button hoverIndicator>
                        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"/>
                    </Button>
                }
                footer={<Button hoverIndicator icon={<Logout/>}/>}
            >
                <Nav gap="small">
                </Nav>
            </Sidebar>
            <Main pad="large" align="center" gap="medium">
                <Box background={{color: "light-1"}} align="center" pad="small">
                    <Box width="small" height="small" align="center" justify="center">
                        <Avatar size="large" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"/>
                    </Box>
                    <Heading level="3">
                        Username
                    </Heading>
                </Box>
                <Tabs>
                    <Tab title="About me">
                        <Box fill="vertical" background={{color: "light-1"}} pad="medium">
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc pharetra sed quam eleifend tincidunt.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                egestas.
                                Vestibulum mollis et quam eget pharetra.
                                Vivamus malesuada imperdiet felis non luctus.
                                Nam non tempor diam. Nulla facilisi.
                                Vestibulum lorem felis, egestas nec tincidunt ut, pellentesque vel nunc.
                                Aenean ultricies accumsan magna sed suscipit. Cras tincidunt lectus at eros pulvinar,
                                vitae
                                pretium metus blandit.
                                Fusce pharetra mauris eget eros ullamcorper ultrices. Mauris ante elit, tincidunt quis
                                tincidunt
                                eget, iaculis in nulla.
                                Pellentesque iaculis, nunc eget fermentum accumsan, est nulla convallis turpis, quis
                                iaculis
                                tellus sem sit amet justo.
                            </Paragraph>
                        </Box>
                    </Tab>
                    <Tab title={"Info"}>
                        <Box fill="vertical" pad="medium" background={{color: "light-1"}}>
                            <Formik
                                initialValues={{
                                    fullName: '',
                                    birthday: '01/01/2000',
                                    country: '',
                                    gender: '',
                                    languages: '',
                                    children: ''
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
                        </Box>
                    </Tab>
                    {/*<Tab title="Overview">*/}
                    {/*    <Box background={{color: "light-1"}} pad="medium">*/}
                    {/*        <Distribution values={[{*/}
                    {/*            value: 52*/}
                    {/*        }]}>*/}
                    {/*            */}
                    {/*        </Distribution>*/}
                    {/*    </Box>*/}
                    {/*</Tab>*/}
                </Tabs>
            </Main>
        </Box>
    );
}

export default Profile;
