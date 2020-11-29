import { RoomListModel } from "../../model/Room/RoomListModel";
import * as React from 'react';
import { Button, Card, Row } from "reactstrap";
import { withRouter } from "react-router-dom";

export interface Props {
    room: RoomListModel
    //currentUser: User;
    onDeleteClicked: (id: number) => void;
}

export interface State {

}

class AdminRoomCard extends React.Component<Props, State> {

    private DetailsButton = withRouter(({ history }) => (
        <Button
            className="btn btn-md col-auto m-1"
            color="primary"
            onClick={() => {
                history.push('/Rooms/' + this.props.room.id);
            }}
        >
            Details and Booking
        </Button>
    ))

    private EditButton = withRouter(({ history }) => (
        <Button
            className="btn btn-md col-auto m-1"
            color="warning"
            onClick={() => {
                history.push('/Admin/Rooms/' + this.props.room.id + '/Edit/');
            }}
        >
            Edit Room
        </Button>
    ))

    private DeleteButton = () => (
        <Button
            className="btn btn-danger btn-md col-auto m-1"
            onClick={() => {
                this.props.onDeleteClicked(this.props.room.id);
            }}
        >
            Delete
        </Button>
    );

    private NewReservationsButton = withRouter(({ history }) => (
        <Button
            className="btn btn-md col-auto m-1"
            color="primary"
            onClick={() => {
                history.push('/Admin/Rooms/' + this.props.room.id + '/AddReservations/');
            }}
        >
            Add reservations
        </Button>
    ))

    render() {
        return (
            <div className="col-sm-4 col-md-3 col-lg-3">
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.room.name}</h5>
                        <p className="card-text">Time: {this.props.room.minTime} - {this.props.room.maxTime}</p>
                        <p className="card-text">Difficulty: {this.props.room.difficulty}</p>
                        <Row><this.DetailsButton /></Row>
                        <Row><this.NewReservationsButton /></Row>
                        <Row><this.EditButton /></Row>
                        <Row><this.DeleteButton /></Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminRoomCard;