import * as React from 'react';
import { Route, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import AddReservationComponents from "../../components/ReservationComponents/AddReservationsComponents";
import { ReservationDetailedModel } from "../../model/Reservation/ReservationDetailedModel";
import { getAllByRoomAction } from "../../redux/Reservations/ReservationActions";
import { addAvailableReservations } from "../../api/ReservationData";
import { ApplicationState } from "../../redux/Store";
import { getRoomDetailed } from '../../redux/Rooms/RoomsActions';
import { RoomDetailedModel } from '../../model/Room/RoomDetailedModel';
import { User, UserRoles } from '../../model/User/User';
import { Container, Row } from 'reactstrap';



export interface Props extends RouteComponentProps<{ id: string }> {
    room?: RoomDetailedModel
    reservationsByRoom: ReservationDetailedModel[];
    currentUser: User;
    getAllByRoomAction: typeof getAllByRoomAction;
    getRoomDetailed: typeof getRoomDetailed;
}

export interface State {

}

class NewReservations extends React.Component<Props, State> {

    componentDidMount() {
        this.props.getAllByRoomAction(parseInt(this.props.match.params.id, 10));
        this.props.getRoomDetailed(parseInt(this.props.match.params.id, 10));
    }

    private async handleSubmitReservations(roomId: number, quantity: number, fromDateTime: string): Promise<ReservationDetailedModel[]> {
        var result = await addAvailableReservations(roomId, quantity, fromDateTime);
        return result;
    }

    render() {
        if (this.props.currentUser.role !== UserRoles.Admin) {
            return (
                <Container>
                    <Row>
                        <h1>You have to be logged in as an admin to add new reservations!</h1>
                    </Row>
                </Container>
            );
        } else {
            if (this.props.room !== undefined) {
                return (
                    <div>
                        <AddReservationComponents
                            key={this.props.room.id}
                            room={this.props.room}
                            onSubmitReservations={this.handleSubmitReservations} />
                    </div>
                );
            } else {
                return (
                    <div></div>
                );
            }
        }
    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        reservationsByRoom: store.reservations.reservationsByRoom,
        room: store.rooms.detailedRoom || undefined,
        currentUser: store.users.currentUser || undefined
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllByRoomAction: (id: number) => dispatch(getAllByRoomAction(id)),
        getRoomDetailed: (id: number) => dispatch(getRoomDetailed(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewReservations);