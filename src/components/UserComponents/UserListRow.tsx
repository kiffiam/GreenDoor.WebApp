import * as React from 'react';
import { User } from "../../model/User/User";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { isThisTypeNode } from 'typescript';

export interface Props {
    user: User;
    onDeleteClicked: (id: string) => void;
}

export interface State {

}

class UserListRow extends React.Component<Props, State> {

    private UserReservationsButton = withRouter(({ history }) => {
        return (
            <Button
                onClick={() => { history.push('/Reservation/' + this.props.user.id); }}
            >
                User's reservations
            </Button>
        );
    })

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
            <div>
                <p>{this.props.user.userName}</p>
                <p>{this.props.user.firstName}</p>
                <p>{this.props.user.lastName}</p>
                <p>{this.props.user.phone}</p>
                <p>{this.props.user.email}</p>
                <this.DeleteButton />
                <this.UserReservationsButton />
            </div>
        );
    }
}

export default UserListRow;