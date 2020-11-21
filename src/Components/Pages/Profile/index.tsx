import React from "react";
import {
    Avatar,
    Box,
    Card,
    CardBody,
    CardHeader,
    DateInput,
    FormField,
    Heading,
    Main,
    Paragraph,
    RangeInput,
    Text,
    TextInput
} from "grommet";
import {useFirestore, useFirestoreDocData, useUser} from "reactfire";
import User from "../../../Model/Authentication/User";

function Profile() {
    const user = useUser<User>();
    const userDetailsRef = useFirestore()
        .collection('users')
        .doc(user.uid);
    const {
        backgroundImageURL,
        displayName,
        fullName,
        email,
        description,
        children,
        country,
        gender,
        photoURL,
        spokenLanguages
    } = useFirestoreDocData<User>(userDetailsRef);

    return (
        <Main pad="medium" flex="grow">
            <Card background={{
                image: `url(${backgroundImageURL})`,
            }} fill="vertical" pad="medium">
                <CardHeader pad='none' basis='small'>
                    <Box style={{position: 'relative'}} height='small' width='full'>
                        <Avatar
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                marginTop: '-48px',
                                marginLeft: '-48px',
                                width: '96px',
                                height: '96px',
                                border: '3px solid white',
                            }}
                            src={photoURL}
                            round='full'
                        />
                    </Box>
                </CardHeader>
                <CardBody round="medium" background={{
                    color: "light-1",
                    opacity: "strong"
                }} pad={{top: 'large', bottom: 'medium'}}>
                    <Box align='center' pad='large' gap='medium'>
                        <Heading margin='none'>
                            {displayName || email}
                        </Heading>
                        <Paragraph size="large" textAlign='center' margin='none'>
                            {description}
                        </Paragraph>
                        <Box gap="medium">
                            <Box direction="row-responsive" justify="center" gap="medium">
                                <Box direction="column" width="medium">
                                    <FormField label={"Full name"}>
                                        <TextInput placeholder={"Unspecified"} readOnly value={fullName}/>
                                    </FormField>
                                </Box>
                                <Box direction="column" width="medium">
                                    <FormField label={"Country"}>
                                        <TextInput placeholder={"Unspecified"} readOnly value={country}/>
                                    </FormField>
                                </Box>
                            </Box>
                            <Box direction="row-responsive" align="center" gap="medium">
                                <Box direction="column" width="medium">
                                    <FormField label={"Gender"}>
                                        <TextInput placeholder={"Unspecified"} readOnly value={gender}/>
                                    </FormField>
                                </Box>
                                <Box direction="column" width="medium">
                                    <FormField label={"Date of Birth"}>
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
                                            format={'mm/dd/yyyy'}
                                            value={country}/>
                                    </FormField>
                                </Box>
                            </Box>
                            <Box direction="row-responsive" align="center" gap="medium">
                                <Box direction="column" width="medium">
                                    <FormField readOnly label={"Children"}>
                                        <Box>
                                            <RangeInput
                                                disabled
                                                min={0}
                                                max={20}
                                                defaultValue={children}
                                            />
                                            <Box align="center">
                                                <Text>{children || "Unspecified"}</Text>
                                            </Box>
                                        </Box>
                                    </FormField>
                                </Box>
                                <Box direction="column" width="medium">
                                    <FormField label={"Languages"}>
                                        <TextInput placeholder={"Unspecified"} readOnly
                                                   value={spokenLanguages?.reduce((previousValue, currentValue) => `${previousValue}, ${currentValue}`)}/>
                                    </FormField>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </CardBody>
            </Card>
        </Main>
    );
}

export default Profile;
