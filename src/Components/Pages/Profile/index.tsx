import React from "react";
import {Avatar, Box, Card, CardBody, CardHeader, Heading, Main, Paragraph} from "grommet";
import Userinfo from "../../Commom/UserInfo";
import {Article, Like, UserExpert} from "grommet-icons";

function Profile() {
    // noinspection HtmlUnknownTarget
    return (
        <Main pad="large" align="center" gap="medium" flex="grow">
            <Box direction="row-responsive" gap="medium">
                <Box direction="column" gap="small" flex="grow">
                    <Box direction="row-responsive" justify="center" align="center" gap="medium" fill="horizontal"
                         flex="grow">
                        <Card background="light-1" align="center" fill="vertical" pad="small">
                            <CardBody align="center" justify="center">
                                <Box width="small" height="small" align="center" justify="center">
                                    <Avatar size="large"
                                            src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"/>
                                </Box>
                                <Heading level="3">
                                    Username
                                </Heading>
                            </CardBody>
                        </Card>
                        <Card pad="medium" fill="vertical" background="light-1">
                            <CardHeader>
                                <Heading>
                                    About me
                                </Heading>
                            </CardHeader>
                            <CardBody fill="vertical">
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nunc pharetra sed quam eleifend tincidunt.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                    turpis
                                    egestas.
                                    Vestibulum mollis et quam eget pharetra.
                                    Vivamus malesuada imperdiet felis non luctus.
                                    Nam non tempor diam. Nulla facilisi.
                                    Vestibulum lorem felis, egestas nec tincidunt ut, pellentesque vel nunc.
                                    Aenean ultricies accumsan magna sed suscipit. Cras tincidunt lectus at eros
                                    pulvinar,
                                    vitae
                                    pretium metus blandit.
                                    Fusce pharetra mauris eget eros ullamcorper ultrices. Mauris ante elit,
                                    tincidunt quis
                                    tincidunt
                                    eget, iaculis in nulla.
                                    Pellentesque iaculis, nunc eget fermentum accumsan, est nulla convallis turpis,
                                    quis
                                    iaculis
                                    tellus sem sit amet justo.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box direction="row" flex="grow">
                        <Card background="light-1" fill="vertical" pad="medium">
                            <CardHeader>
                                <Heading>
                                    Info
                                </Heading>
                            </CardHeader>
                            <CardBody flex="grow">
                                <Userinfo/>
                            </CardBody>
                        </Card>
                    </Box>
                </Box>
                <Box direction="column">
                    <Box gap="medium" flex="grow">
                        <Card background="light-1" pad="medium">
                            <CardHeader justify="center">
                                <Heading>
                                    Likes
                                </Heading>
                            </CardHeader>
                            <CardBody flex="grow" align="center">
                                <Box animation="pulse">
                                    <Like color="brand" size="large"/>
                                </Box>
                                <Heading>
                                    127
                                </Heading>
                            </CardBody>
                        </Card>
                        <Card background="light-1" pad="medium">
                            <CardHeader justify="center">
                                <Heading>
                                    Posts
                                </Heading>
                            </CardHeader>
                            <CardBody flex="grow" align="center">
                                <Box animation="pulse">
                                    <Article color="brand" size="large"/>
                                </Box>
                                <Heading>
                                    5
                                </Heading>
                            </CardBody>
                        </Card>
                        <Card background="light-1" pad="medium">
                            <CardHeader justify="center">
                                <Heading>
                                    Followers
                                </Heading>
                            </CardHeader>
                            <CardBody flex="grow" align="center">
                                <Box animation="pulse">
                                    <UserExpert color="brand" size="large"/>
                                </Box>
                                <Heading>
                                    13
                                </Heading>
                            </CardBody>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Main>
    );
}

export default Profile;
