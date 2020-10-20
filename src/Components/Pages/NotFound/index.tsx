import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {HOME} from "../../../Routes/AppRoutes";
import {Box, Button, Heading, Image, Main} from "grommet";
import notFound from "../../../Assets/page-not-found.svg";

function NotFound() {
    const {t} = useTranslation(['notFound']);

    return (
        <Main align="center" justify="center">
            <Box direction="column" gap="large" align="center" justify="around" pad="medium">
                <Box align="center" animation="pulse" justify="center" width="medium" height="medium"
                     style={{fontSize: "10vw"}}>
                    <Image fit="contain" style={{width: '100%', height: "100%"}} src={notFound}
                           a11yTitle={"404 illustration"}/>
                </Box>
                <Box gap="small">
                    <Heading level="3">
                        Oops, it seems this page doesn't exist
                    </Heading>
                    <Box align="center">
                        <Link to={HOME.path}>
                            <Button primary label="Go to home page"/>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Main>
    );
}

export default NotFound;
