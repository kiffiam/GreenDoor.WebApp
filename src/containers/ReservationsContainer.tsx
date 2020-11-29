import * as React from 'react';
import { ReservationDetailedModel } from "../model/Reservation/ReservationDetailedModel";
import { connect } from "react-redux";
import { ApplicationState } from "../redux/Store";
import { getAllReservationsAction } from "../redux/Reservations/ReservationActions";
import { ReservationActions } from "../redux/Reservations/ReservationActionTypes"
import ReservationDetailedRow from "../components/ReservationComponents/ReservationDetailedRow";
import { ReservationActionTypes } from '../redux/Reservations/ReservationActionTypes';
import { Action, ActionCreator, ActionFromReducer, bindActionCreators } from 'redux';
import { unBookReservations } from '../api/ReservationData';
import { Button, Row, Col, Container, Alert } from "reactstrap";
import { User, UserRoles } from '../model/User/User';



export interface Props {
    reservations: ReservationDetailedModel[];
    currentUser: User;
    onUnBookClicked: (id: number) => void;
    /*getAllReservationsAction: typeof getAllReservationsAction*/
    onDeleteClicked: (id: number) => void;
}

export interface State {

}

class ReservationsContainer extends React.Component<Props, State> {

    /*componentDidMount() {
        this.props.getAllReservationsAction();
    }*/

    public constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Row className="p-1 m-1 align-items-center">
                    <Col >Date and time</Col>
                    <Col >Status</Col>
                    <Col >Room name</Col>
                    <Col >User Name</Col>
                    {this.props.currentUser.role !== UserRoles.User &&
                        <Col >Phone Number</Col>
                    }
                    <Col ></Col>
                </Row>


                {this.props.reservations.map(res => (
                    <ReservationDetailedRow key={res.id}
                        reservation={res}
                        currentUser={this.props.currentUser}
                        onUnBookClicked={this.props.onUnBookClicked}
                        onDeleteClicked={this.props.onDeleteClicked}
                    />
                ))}
            </Container>
        );
    }
}

export default ReservationsContainer;