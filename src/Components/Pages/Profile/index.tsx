import React from "react";
import {Avatar, Box, Button, Heading, Main, Nav, Paragraph, Sidebar, Tab, Tabs} from "grommet";
import {Logout} from "grommet-icons";
import Userinfo from "../../Commom/UserInfo";

function Profile() {
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
                            <Userinfo/>
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
