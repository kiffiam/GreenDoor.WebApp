import * as React from 'react';
import { connect } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Alert, Container, Row } from 'reactstrap';
import UserListRow from '../../components/UserComponents/UserListRow';
import { User, UserRoles } from '../../model/User/User';
import { ApplicationState } from '../../redux/Store';
import UsersContrainer from "../../containers/UsersContainer"
import { getUsers } from "../../redux/Users/UserActions"
import { deleteUser } from "../../api/UserData"

export interface Props {
    users: User[]
    currentUser: User;
    getUsers: typeof getUsers;
}

export interface State {
    userLoggedIn: boolean;
}

class UserList extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
        this.state = {
            userLoggedIn: false
        }
    }

    private handleDeleteClick = async (id: string) => {
        var result = await deleteUser(id);
        if (result === false) {
            this.setState({ userLoggedIn: true })
        } else {
            this.props.getUsers();
        }

    }

    componentDidMount() {
        if (this.props.currentUser.role === UserRoles.Admin) {
            this.props.getUsers();
        }
    }

    render() {
        if (this.props.currentUser.role !== UserRoles.Admin) {
            return (
                <Container>
                    <Row>
                        <h1>You have to be logged in as an admin see the list of users!</h1>
                    </Row>
                </Container>
            );
        } else {
            return (
                <div>
                    {this.state.userLoggedIn &&
                        <Alert
                            isOpen={this.state.userLoggedIn}
                            toggle={() => this.setState({ userLoggedIn: false })}>
                            The user is currently logged in!
                    </Alert>}
                    <UsersContrainer
                        currentUser={this.props.currentUser}
                        users={this.props.users}
                        getUsers={this.props.getUsers}
                        onDeleteClicked={this.handleDeleteClick}
                    />
                </div>
            );
        }
    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        users: store.users.users,
        currentUser: store.users.currentUser || undefined
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUsers: () => dispatch(getUsers())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)