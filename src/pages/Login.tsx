import * as React from 'react';
import LoginComponent from "../components/UserComponents/LoginComponent";
import { loginUser } from "../api/UserData";
import { LoginModel } from '../model/User/LoginModel';
import { loginUserAction } from "../redux/Users/UserActions";
import { connect } from 'react-redux';
import { ApplicationState } from '../redux/Store';
import { User } from '../model/User/User';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

export interface Props {
    currentUser?: User;
    loginUserAction: typeof loginUserAction;
}

export interface State {
    redirect: boolean;
}

class Login extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    private handleLogin = (loginModel: LoginModel) => {
        this.props.loginUserAction(loginModel);
        /*if(this.props.currentUser !== undefined)
        {
            this.setState({redirect: true})
        }*/
    }


    render() {
        return (
            <Container >
                <LoginComponent onLoginClick={this.handleLogin} />
                {this.props.currentUser?.email !== "" &&
                    <Redirect to="/" />}

            </Container>
        );
    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        currentUser: store.users.currentUser
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        loginUserAction: (loginModel: LoginModel) => dispatch(loginUserAction(loginModel))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);