import * as React from 'react';
import { ReservationDetailedModel } from "../model/Reservation/ReservationDetailedModel";
import { getAllReservationsAction } from "../redux/Reservations/ReservationActions";
import { ReservationActions } from "../redux/Reservations/ReservationActionTypes"
import ReservationDetailedRow from "../components/ReservationComponents/ReservationDetailedRow";
import { Button, Row, Col, Container, Alert } from "reactstrap";
import { User, UserRoles } from '../model/User/User';



export interface Props {
    reservations: ReservationDetailedModel[];
    currentUser: User;
    onUnBookClicked: (id: number) => void;
    onDeleteClicked: (id: number) => void;
}

export interface State {

}

class ReservationsContainer extends React.Component<Props, State> {

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
                    {this.props.currentUser.role === UserRoles.Admin &&
                        <Col >Phone Number</Col>
                    }
                    {this.props.currentUser.role === UserRoles.Admin &&
                        <Col ></Col>
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