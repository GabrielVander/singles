import React, {useState} from "react";
import {Box, Button, Form, FormField, Main, Paragraph, TextInput} from "grommet";
import logo from "../../../Assets/logoWithText.svg";
import {Facebook, Google, Twitter} from "grommet-icons";
import {Link} from "react-router-dom";
import {REGISTER} from "../../../Routes/AppRoutes";

function Login() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    function loginWithEmailAndPassword() {

    }

    function loginWithGoogle() {

    }

    function loginWithFacebook() {

    }

    function loginWithTwitter() {

    }

    return (
        <>
            <Main justify="center">
                <Box align="center" justify="around" pad="large">
                    <Box
                        justify="center"
                        align="center"
                        width="small"
                        height="small"
                    >
                        <img src={logo} alt="App's logo"/>
                    </Box>
                    <Box>
                        <Form
                            value={{
                                email,
                                password
                            }}
                            onReset={() => {
                                setEmail(undefined);
                                setPassword(undefined);
                            }}
                            onSubmit={loginWithEmailAndPassword}
                        >
                            <FormField
                                name="email"
                                // @ts-ignore
                                htmlfor="email-input-id"
                                label="Email">
                                <TextInput
                                    id="email-input-id"
                                    autoFocus={true}
                                    type="email"
                                    placeholder="Type your email address"
                                    onChange={event => setEmail(event.target.value)}
                                    name="email"/>
                            </FormField>
                            <FormField
                                name="password"
                                value={password}
                                // @ts-ignore
                                htmlfor="password-input-id"
                                label="Password">
                                <TextInput
                                    id="password-input-id"
                                    type="password"
                                    autoFocus={true}
                                    placeholder="Type your password"
                                    onChange={event => setPassword(event.target.value)}
                                    name="password"/>
                            </FormField>
                            <Box
                                direction="row"
                                gap="medium"
                                justify="center"
                                margin="medium"
                            >
                                <Button type="submit" primary label="Login"/>
                            </Box>
                            <Box
                                direction="row"
                                justify="center"
                                align="center"
                                margin="small"
                            >
                                <Paragraph margin="none">
                                    Or login via
                                </Paragraph>
                            </Box>
                            <Box
                                direction="row"
                                justify="around"
                            >
                                <Button
                                    onClick={loginWithGoogle}
                                    icon={<Google color="plain"/>}/>
                                <Button
                                    onClick={loginWithFacebook}
                                    icon={<Facebook color="plain"/>}/>
                                <Button
                                    onClick={loginWithTwitter}
                                    icon={<Twitter color="plain"/>}/>
                            </Box>
                            <Box
                                direction="row"
                                margin="small">
                                <Paragraph margin="none">
                                    Don't have an account? <Link to={REGISTER.path}>Register now</Link>
                                </Paragraph>
                            </Box>
                        </Form>
                    </Box>
                </Box>
            </Main>
        </>
    );
}

export default Login;
