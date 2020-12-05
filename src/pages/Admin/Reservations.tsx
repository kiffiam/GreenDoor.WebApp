import * as React from 'react';
import { ReservationDetailedModel } from '../../model/Reservation/ReservationDetailedModel';
import { getAllReservationsAction } from "../../redux/Reservations/ReservationActions";
import ReservationContainer from "../../containers/ReservationsContainer";
import { deleteReservation, bookReservations, unBookReservations } from '../../api/ReservationData';
import { connect } from "react-redux";
import { ApplicationState } from "../../redux/Store";
import { Container, Row } from 'reactstrap';
import { User, UserRoles } from '../../model/User/User';


export interface Props {
    reservations: ReservationDetailedModel[];
    currentUser: User;
    getAllReservationsAction: typeof getAllReservationsAction;
}

export interface State {

}

class Reservations extends React.Component<Props, State> {

    private handleUnBookClick = async (idp: number) => {
        if (this.props.reservations.find(({ id }) => id === idp)?.isBooked) {
            await unBookReservations(idp);
        } else {
            await bookReservations(idp);
        }

        this.props.getAllReservationsAction();
    }

    private handleDeleteClick = async (id: number) => {
        await deleteReservation(id);
        this.props.getAllReservationsAction();
    }

    componentDidMount() {
        this.props.getAllReservationsAction();
    }

    render() {
        if (this.props.currentUser.role !== UserRoles.Admin) {
            return (
                <Container>
                    <Row>
                        <h1>You are not supposed to be here!</h1>
                    </Row>
                </Container>
            );
        } else {
            return (
                <Container>
                    <ReservationContainer
                        reservations={this.props.reservations}
                        currentUser={this.props.currentUser}
                        onUnBookClicked={this.handleUnBookClick}
                        onDeleteClicked={this.handleDeleteClick}

                    />
                </Container>
            );
        }
    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        reservations: store.reservations.reservations,
        currentUser: store.users.currentUser || undefined
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllReservationsAction: () => dispatch((getAllReservationsAction()))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reservations);
