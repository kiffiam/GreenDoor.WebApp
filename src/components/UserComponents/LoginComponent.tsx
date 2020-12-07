import * as React from 'react';
import { LoginModel } from '../../model/User/LoginModel';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from "reactstrap";
import Axios from 'axios';

export interface Props {
    onLoginClick: (loginModel: LoginModel) => void;
}

export interface State {
    email?: string;
    password?: string;
    userNotExist: boolean;
}

class LoginComponent extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            userNotExist: false
        }
    }

    private handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        let result = await this.props.onLoginClick({ email: this.state.email!, password: this.state.password! });
        /*if (result == null) {
            this.setState({
                ...this.state,
                userNotExist: true
            })
        }*/
        return false;
    }

    private handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value });
    }

    private handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <Container>

                <Form validated={true}
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        this.handleLogin(e)
                    }>

                    <h2>Login</h2>
                    <FormGroup row>
                        <Label sm={2}>E-mail address:</Label>
                        <Col sm={4}>
                            <Input
                                required
                                value={this.state.email}
                                placeholder="E-mail address"
                                onChange={e => this.handleEmailChange(e)}
                                type="email">
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Password:</Label>
                        <Col sm={4}>
                            <Input
                                required
                                type="password"
                                value={this.state.password}
                                onChange={e => this.handlePasswordChange(e)}>
                            </Input>
                        </Col>
                    </FormGroup>
                    <Button type="submit"
                        title="Login"
                        color="primary"
                    >Login
                    </Button>

                </Form>

            </Container>
        );
    }
}

export default LoginComponent;