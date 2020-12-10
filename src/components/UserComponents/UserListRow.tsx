import * as React from 'react';
import { User } from "../../model/User/User";
import { Button, Col, Row } from "reactstrap";
import { withRouter } from "react-router-dom";
import { isThisTypeNode } from 'typescript';

export interface Props {
    user: User;
    onDeleteClicked: (id: string) => void;
}

export interface State {

}

class UserListRow extends React.Component<Props, State> {

    private DeleteButton = () => (
        <Button
            className="btn btn-danger btn-md col-auto m-1"
            onClick={() => {
                this.props.onDeleteClicked(this.props.user.id);
            }}
        >
            Delete User
        </Button>
    );

    render() {
        return (
            <Row className="p-1 m-1 align-items-center">
                <Col >{this.props.user.userName}</Col>
                <Col >{this.props.user.firstName}</Col>
                <Col >{this.props.user.lastName} </Col>
                <Col >{this.props.user.phoneNumber} </Col>
                <Col >{this.props.user.email}</Col>
                <Col><this.DeleteButton /></Col>
            </Row>
        );
    }
}

export default UserListRow;