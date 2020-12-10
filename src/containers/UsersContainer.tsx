import * as React from 'react';
import { Button, Row, Col, Container, Alert } from "reactstrap";
import { User, UserRoles } from '../model/User/User';
import UserListRow from '../components/UserComponents/UserListRow';
import { getUsers } from "../redux/Users/UserActions"
import { deleteUser } from "../api/UserData"



export interface Props {
    users: User[];
    currentUser: User;
    onDeleteClicked: (id: string) => void;
    getUsers: typeof getUsers;
}

export interface State {

}

class UsersContainer extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Row className="p-1 m-1 align-items-center">
                    <Col >UserName</Col>
                    <Col >First Name</Col>
                    <Col >Last name</Col>
                    <Col >Phone Number</Col>
                    <Col >Email</Col>
                    <Col ></Col>
                </Row>

                {this.props.users.map(us => (
                    <UserListRow key={us.id}
                        user={us}
                        onDeleteClicked={this.props.onDeleteClicked}
                    />
                ))}
            </Container>
        );
    }
}

export default UsersContainer;