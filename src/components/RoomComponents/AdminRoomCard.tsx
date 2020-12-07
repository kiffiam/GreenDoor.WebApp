import { RoomListModel } from "../../model/Room/RoomListModel";
import * as React from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Row } from "reactstrap";
import { withRouter } from "react-router-dom";

export interface Props {
    room: RoomListModel
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
                    <CardBody >
                        <CardTitle className="h5">{this.props.room.name}</CardTitle>
                        <CardText >Time: {this.props.room.minTime} - {this.props.room.maxTime}</CardText>
                        <CardText >Difficulty: {this.props.room.difficulty}</CardText>
                        <Row><this.DetailsButton /></Row>
                        <Row><this.NewReservationsButton /></Row>
                        <Row><this.EditButton /></Row>
                        <Row><this.DeleteButton /></Row>
                    </CardBody>
                </div>
            </div>
        );
    }
}

export default AdminRoomCard;