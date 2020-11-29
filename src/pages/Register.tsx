import * as React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../api/UserData';
import { RegisterModel } from '../model/User/RegisterModel';
import { ApplicationState } from '../redux/Store';
import { registerUserAction } from "../redux/Users/UserActions"
import RegisterComponent from "../components/UserComponents/RegisterComponent";
import { User } from '../model/User/User';
import { Redirect } from 'react-router-dom';

export interface Props {
    currentUser?: User;
    registerUserAction: typeof registerUserAction;
}

export interface State {
    redirect: boolean
}

class Register extends React.Component<Props, State> {

    private handleRegister = (registerModel: RegisterModel) => {
        this.props.registerUserAction(registerModel);
    }

    render() {
        return (
            <div>
                <RegisterComponent onRegisterClick={this.handleRegister} />
                {this.props.currentUser?.email !== "" &&
                    <Redirect to="/" />}
            </div>
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
        registerUserAction: (registerModel: RegisterModel) => dispatch(registerUserAction(registerModel))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);