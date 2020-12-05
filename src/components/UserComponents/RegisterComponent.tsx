import * as React from 'react';
import { Button, Col, Container, Form, FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap';
import { RegisterModel } from '../../model/User/RegisterModel';

export interface Props {
    onRegisterClick: (registerModel: RegisterModel) => void
}

export interface State {
    registerModel: RegisterModel
}

class RegisterComponent extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
        this.state = {
            registerModel: {
                userName: "",
                email: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                password: "",
                confirmPassword: "",
            }
        };
    }

    private handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        var result = await this.props.onRegisterClick(this.state.registerModel);
        return false;
    }

    private handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            registerModel: {
                ...state.registerModel,
                email: e.target.value
            }
        }));
    }

    private handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            registerModel: {
                ...state.registerModel,
                password: e.target.value
            }
        }));
    }

    private handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            registerModel: {
                ...state.registerModel,
                confirmPassword: e.target.value
            }
        }));
    }

    private handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            registerModel: {
                ...state.registerModel,
                userName: e.target.value
            }
        }));
    }

    private handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            registerModel: {
                ...state.registerModel,
                phoneNumber: e.target.value
            }
        }));
    }

    private handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            registerModel: {
                ...state.registerModel,
                firstName: e.target.value
            }
        }));
    }

    private handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            registerModel: {
                ...state.registerModel,
                lastName: e.target.value
            }
        }));
    }

    render() {
        return (
            <div>
                <Container center>
                    <Form validated={true}
                        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                            this.handleRegister(e)
                        }>
                        <Label className="h2">Register</Label>
                        <FormGroup row>
                            <Label sm={2}>E-mail address:</Label>
                            <Col sm={4}>
                                <Input
                                    required
                                    placeholder="example@example.com"
                                    onChange={e => this.handleEmailChange(e)}
                                    type="email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Username:</Label>
                            <Col sm={4}>
                                <Input
                                    required
                                    placeholder="Username"
                                    onChange={e => this.handleUserNameChange(e)}
                                    type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>First name:</Label>
                            <Col sm={4}>
                                <Input
                                    required
                                    placeholder="First name"
                                    onChange={e => this.handleFirstNameChange(e)}
                                    type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Last name:</Label>
                            <Col sm={4}>
                                <Input
                                    required
                                    placeholder="Last name"
                                    onChange={e => this.handleLastNameChange(e)}
                                    type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Phone number:</Label>
                            <Col sm={4}>
                                <Input
                                    required
                                    placeholder="+36123456789"
                                    pattern="^[+]{1}(?=.*[0-9]).{8,}$"
                                    onChange={e => this.handlePhoneChange(e)}
                                    type="text" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Password:</Label>
                            <Col sm={4}>
                                <Input
                                    required
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={this.state.registerModel.password}
                                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}.*$"
                                    onChange={e => this.handlePasswordChange(e)}>
                                </Input>
                                <FormFeedback >Password is not fit for the requirements!</FormFeedback>
                                <FormText>Password must be 8 characters long and cointain 1 uppercase, 1 lowercase, 1 number and 1 special characters!</FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Confirm password:</Label>
                            <Col sm={4}>
                                <Input
                                    type="password"
                                    required
                                    invalid={this.state.registerModel.password !== this.state.registerModel.confirmPassword}
                                    id="confirm_password"
                                    onChange={e => this.handleConfirmPasswordChange(e)}>
                                </Input>
                                <FormFeedback invalid>Passwords don't match!</FormFeedback>
                            </Col>
                        </FormGroup>
                        <Button
                            type="submit"
                            title="Register"
                            color="primary"
                        >Register
                    </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default RegisterComponent;