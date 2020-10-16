import React, {useState} from "react";
import {Box, Button, Form, FormField, Main, TextInput} from "grommet";
import logo from "../../../Assets/logo.svg";

function Login() {
    const [email, setEmail] = useState<string>();

    return (
        <>
            <Main>
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
                            value={email}
                            // @ts-ignore
                            onChange={nextValue => setEmail(nextValue)}
                            onReset={() => setEmail(undefined)}
                            onSubmit={() => {
                            }}
                        >
                            <FormField
                                name="email"
                                // @ts-ignore
                                htmlfor="email-input-id"
                                label="Email">
                                <TextInput
                                    id="email-input-id"
                                    autoFocus={true}
                                    placeholder="Type your email address"
                                    name="email"/>
                            </FormField>
                            <FormField
                                name="password"
                                // @ts-ignore
                                htmlfor="password-input-id"
                                label="Password">
                                <TextInput
                                    id="password-input-id"
                                    autoFocus={true}
                                    placeholder="Type your password"
                                    name="password"/>
                            </FormField>
                            <Box
                                direction="row"
                                gap="medium"
                                justify="center"
                            >
                                <Button type="submit" primary label="Login"/>
                            </Box>
                        </Form>
                    </Box>
                </Box>
            </Main>
        </>
    );
}

export default Login;
