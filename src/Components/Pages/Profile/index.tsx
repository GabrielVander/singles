import React from "react";
import {Avatar, Box, Card, CardBody, CardHeader, FormField, Heading, Image, Paragraph, TextInput} from "grommet";
import {Article, Like, UserExpert} from "grommet-icons";

function Profile() {
    // noinspection HtmlUnknownTarget
    return (
        <>
            <Card>
                <CardHeader pad='none' basis='small'>
                    <Box style={{position: 'relative'}} height='small' width='full'>
                        <Image
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '100%',
                            }}
                            fit='cover'
                            src="https://picsum.photos/650/200/?image=1"
                        />
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
                            src="https://picsum.photos/g/200/200?image=99"
                            round='full'
                        />
                    </Box>
                </CardHeader>
                <CardBody responsive={false} pad={{top: 'large', bottom: 'medium'}}>
                    <Box align='center' pad='large' gap='medium'>
                        <Heading margin='none'>
                            {"John Wick"}
                        </Heading>
                        <Paragraph size="large" textAlign='center' margin='none'>
                            {"Lorem ipsum dolor sit amet,\n" +
                            "  consectetur adipiscing elit,\n" +
                            "  sed do eiusmod tempor incididunt ut\n" +
                            "  labore et dolore magna aliqua."}
                        </Paragraph>
                        <Box direction="row-responsive">
                            <FormField label={"Full name"}>
                                <TextInput readOnly value="ajdiowahdwaoidowai"/>
                            </FormField>
                            <FormField label={"Full name"}>
                                <TextInput readOnly value="ajdiowahdwaoidowai"/>
                            </FormField>
                        </Box>
                    </Box>
                    <Box direction="row-responsive" align='center' justify="evenly" fill='horizontal'>
                        <Card background="light-1" pad="medium" width="small">
                            <CardHeader justify="center">
                                <Heading level="3">
                                    Likes
                                </Heading>
                            </CardHeader>
                            <CardBody flex="grow" align="center">
                                <Like color="brand" size="large"/>
                                <Box animation="pulse">
                                    <Heading>
                                        127
                                    </Heading>
                                </Box>
                            </CardBody>
                        </Card>
                        <Card background="light-1" pad="medium" width="small">
                            <CardHeader justify="center">
                                <Heading level="3">
                                    Posts
                                </Heading>
                            </CardHeader>
                            <CardBody flex="grow" align="center">
                                <Article color="brand" size="large"/>
                                <Box animation="pulse">
                                    <Heading>
                                        5
                                    </Heading>
                                </Box>
                            </CardBody>
                        </Card>
                        <Card background="light-1" pad="medium" width="small">
                            <CardHeader justify="center">
                                <Heading level="3">
                                    Followers
                                </Heading>
                            </CardHeader>
                            <CardBody flex="grow" align="center">
                                <UserExpert color="brand" size="large"/>
                                <Box animation="pulse">
                                    <Heading>
                                        13
                                    </Heading>
                                </Box>
                            </CardBody>
                        </Card>
                    </Box>
                </CardBody>
            </Card>
            {/*<Userinfo/>*/}
            {/*<Form*/}
            {/*    // object={object}*/}
            {/*    // basis='large'*/}
            {/*    // focusFirstChild={false}*/}
            {/*    onSubmit={f => alert(JSON.stringify(f))}*/}
            {/*>*/}
            {/*    <Box direction='row' gap='medium'>*/}
            {/*        <Box basis='1/3'>*/}
            {/*            <FormFie*/}
            {/*            <TextInput title='Company' name='company'/>*/}
            {/*        </Box>*/}
            {/*        <Box basis='1/3'>*/}
            {/*            <TextInput*/}
            {/*                title='User name'*/}
            {/*                name='username'*/}
            {/*                // validation={[validators.required()]}*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*        <Box basis='1/3'>*/}
            {/*            <TextInput*/}
            {/*                type="email"*/}
            {/*                title='Email'*/}
            {/*                name='email'*/}
            {/*                // validation={[validators.required(), validators.email()]}*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*    <Box direction='row' gap='medium'>*/}
            {/*        <Box basis='1/2'>*/}
            {/*            <TextInput title='First name' name='first_name'/>*/}
            {/*        </Box>*/}
            {/*        <Box basis='1/2'>*/}
            {/*            <TextInput title='Last name' name='last_name'/>*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*    <TextInput title='Address' name='address'/>*/}
            {/*    <Box direction='row' gap='medium'>*/}
            {/*        <Box basis='1/3'>*/}
            {/*            <TextInput*/}
            {/*                title='City'*/}
            {/*                name='city'*/}
            {/*                // validation={[validators.required()]}*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*        <Box basis='1/3'>*/}
            {/*            <TextInput*/}
            {/*                title='Zip code'*/}
            {/*                name='zip_code'*/}
            {/*                // validation={[validators.required(), validators.numeric(), validators.minLength(5)]}*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*        <Box basis='1/3'>*/}
            {/*            <Select*/}
            {/*                name='country'*/}
            {/*                options={['USA', 'England', 'France']}*/}
            {/*                // validation={[validators.required()]}*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*    <TextArea rows={6} title='Short bio' name='bio'/>*/}
            {/*    <Box pad={{vertical: 'medium'}} align='end'>*/}
            {/*        <Button hoverIndicator='background' primary={true} type='submit' title='Save profile'/>*/}
            {/*    </Box>*/}
            {/*</Form>*/}
        </>
//
        // <Main pad="large" align="center" gap="medium" flex="grow">
        // <Box direction="row-responsive" gap="medium">
        // <Box direction="column" gap="small" flex="grow">
        // <Box direction="row-responsive" justify="center" align="center" gap="medium" fill="horizontal"
        //                  flex="grow">
        //                 <Card background="light-1" align="center" fill="vertical" pad="small">
        //                     <CardBody align="center" justify="center">
        //                         <Box width="small" height="small" align="center" justify="center">
        //                             <Avatar size="large"
        //                                     src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"/>
        //                         </Box>
        //                         <Heading level="3">
        //                             Username
        //                         </Heading>
        //                     </CardBody>
        //                 </Card>
        //                 <Card pad="medium" fill="vertical" background="light-1">
        //                     <CardHeader>
        //                         <Heading>
        //                             About me
        //                         </Heading>
        //                     </CardHeader>
        //                     <CardBody fill="vertical">
        //                         <Paragraph>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                             Nunc pharetra sed quam eleifend tincidunt.
        //                             Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        //                             turpis
        //                             egestas.
        //                             Vestibulum mollis et quam eget pharetra.
        //                             Vivamus malesuada imperdiet felis non luctus.
        //                             Nam non tempor diam. Nulla facilisi.
        //                             Vestibulum lorem felis, egestas nec tincidunt ut, pellentesque vel nunc.
        //                             Aenean ultricies accumsan magna sed suscipit. Cras tincidunt lectus at eros
        //                             pulvinar,
        //                             vitae
        //                             pretium metus blandit.
        //                             Fusce pharetra mauris eget eros ullamcorper ultrices. Mauris ante elit,
        //                             tincidunt quis
        //                             tincidunt
        //                             eget, iaculis in nulla.
        //                             Pellentesque iaculis, nunc eget fermentum accumsan, est nulla convallis turpis,
        //                             quis
        //                             iaculis
        //                             tellus sem sit amet justo.
        //                         </Paragraph>
        //                     </CardBody>
        //                 </Card>
        //             </Box>
        //             <Box direction="row" flex="grow">
        //                 <Card background="light-1" fill="vertical" pad="medium">
        //                     <CardHeader>
        //                         <Heading>
        //                             Info
        //                         </Heading>
        //                     </CardHeader>
        //                     <CardBody flex="grow">
        //                         <Userinfo/>
        //                     </CardBody>
        //                 </Card>
        //             </Box>
        //         </Box>
        //         <Box direction="column">
        //             <Box gap="medium" flex="grow">
        //                 <Card background="light-1" pad="medium">
        //                     <CardHeader justify="center">
        //                         <Heading>
        //                             Likes
        //                         </Heading>
        //                     </CardHeader>
        //                     <CardBody flex="grow" align="center">
        //                         <Box animation="pulse">
        //                             <Like color="brand" size="large"/>
        //                         </Box>
        //                         <Heading>
        //                             127
        //                         </Heading>
        //                     </CardBody>
        //                 </Card>
        //                 <Card background="light-1" pad="medium">
        //                     <CardHeader justify="center">
        //                         <Heading>
        //                             Posts
        //                         </Heading>
        //                     </CardHeader>
        //                     <CardBody flex="grow" align="center">
        //                         <Box animation="pulse">
        //                             <Article color="brand" size="large"/>
        //                         </Box>
        //                         <Heading>
        //                             5
        //                         </Heading>
        //                     </CardBody>
        //                 </Card>
        //                 <Card background="light-1" pad="medium">
        //                     <CardHeader justify="center">
        //                         <Heading>
        //                             Followers
        //                         </Heading>
        //                     </CardHeader>
        //                     <CardBody flex="grow" align="center">
        //                         <Box animation="pulse">
        //                             <UserExpert color="brand" size="large"/>
        //                         </Box>
        //                         <Heading>
        //                             13
        //                         </Heading>
        //                     </CardBody>
        //                 </Card>
        //             </Box>
        //         </Box>
        //     </Box>
        // </Main>
    );
}

export default Profile;
