import {useTranslation} from "react-i18next";
import React from "react";
import {Button, Col, Form, Input, Row} from "antd";
import "./styles.css";
import OAuth from "../../../../Commom/OAuth";

interface SignupFormProps {
    signInWithEmailAndPassword: (email: string, password: string) => void;
}

function SignupForm(props: SignupFormProps) {
    const {t} = useTranslation(['signupForm']);
    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            name="register"
            onFinish={(values) => props.signInWithEmailAndPassword(values.email!, values.password!)}
            scrollToFirstError
            labelAlign="left"
        >
            <Row justify="space-around" align="middle">
                <Col>
                    <h1 className="signup-title">Signup</h1>
                </Col>
            </Row>
            <Row align="middle">
                <Col flex="auto">
                    <Form.Item
                        name="email"
                        label={t('signupForm:emailLabel')}
                        rules={[
                            {
                                type: 'email',
                                message: t('signupForm:emailInvalid'),
                            },
                            {
                                required: true,
                                message: t('signupForm:emailRequired'),
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row align="middle">
                <Col flex="auto">
                    <Form.Item
                        name="password"
                        label={t('signupForm:passwordLabel')}
                        rules={[
                            {
                                required: true,
                                message: t('signupForm:passwordRequired'),
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password/>
                    </Form.Item>
                </Col>
            </Row>
            <Row align="middle">
                <Col flex="auto">
                    <Form.Item
                        name="confirm"
                        label={t('signupForm:passwordConfirmLabel')}
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: t('signupForm:passwordConfirmRequired'),
                            },
                            ({getFieldValue}) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(t('signupForm:passwordsDontMatch'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="space-around" align="middle">
                <Col>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {t('signupForm:registerButton')}
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
            <OAuth
                sectionTitle={t('signupForm:oauthSubdivision')}
            />
        </Form>
    );
}

export default SignupForm;
