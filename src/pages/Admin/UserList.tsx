import * as React from 'react';
import { connect } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import UserListRow from '../../components/UserComponents/UserListRow';
import { User, UserRoles } from '../../model/User/User';
import { ApplicationState } from '../../redux/Store';

export interface Props {
    users: User[]
    currentUser: User;
}

export interface State {

}

class UserList extends React.Component<Props, State> {

    private handleDeleteClick = async (id: string) => {
        //await deletUser(id); //TODO
        //this.props.getUsers(); //TODO

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
                    {this.props.users.map(u => (
                        <UserListRow key={u.id}
                            user={u}
                            onDeleteClicked={this.handleDeleteClick}
                        />
                    ))}
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

export default connect(
    mapStateToProps,
    null
)(UserList)