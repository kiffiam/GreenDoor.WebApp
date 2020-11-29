import * as React from 'react';
import { ReservationDetailedModel } from '../../model/Reservation/ReservationDetailedModel';
import { Button, Row, Col, Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { User, UserRoles } from '../../model/User/User';
import DateTimeFormatComponent from '../common/DateTimeFormatComponent';


export interface Props {
    reservation: ReservationDetailedModel
    currentUser: User;
    onUnBookClicked: (id: number) => void;
    onDeleteClicked: (id: number) => void;
}
export interface State {

}

class ReservationDetailedRow extends React.Component<Props> {

    private BookButton = withRouter(({ history }) => {
        return (
            <Button className="btn btn-md col-auto m-1"
                color={this.props.reservation.isBooked ? "danger" : "success"}
                onClick={() => this.props.onUnBookClicked(this.props.reservation.id)}
            >
                {this.props.reservation.isBooked ? "Unbook" : "Book"}
            </Button>
        );
    })

    private DeleteButton = () => (
        <Button
            className="btn btn-danger btn-md col-auto m-1"
            onClick={() => {
                this.props.onDeleteClicked(this.props.reservation.id);
            }}
        >
            Delete
        </Button>
    );

    render() {
        if (this.props.currentUser.role !== UserRoles.Admin) {
            return (
                <Row className="p-1 m-1 align-items-center">
                    <Col > <DateTimeFormatComponent date={this.props.reservation.reservationDateTime} /> </Col>
                    <Col >{this.props.reservation.isBooked ? "Booked" : "Free"}</Col>
                    <Col >{this.props.reservation.roomName ? this.props.reservation.roomName : "N/A"} </Col>
                    <Col >{this.props.reservation.userName} </Col>
                    <Col ><this.BookButton /></Col>
                </Row>
            );
        } else {
            return (
                <Row className="p-0 m-1 align-items-center">
                    <Col ><DateTimeFormatComponent date={this.props.reservation.reservationDateTime} /></Col>
                    <Col >{this.props.reservation.isBooked ? "Booked" : "Free"}</Col>
                    <Col >{this.props.reservation.roomName ? this.props.reservation.roomName : "N/A"}</Col>
                    <Col >{this.props.reservation.userName ? this.props.reservation.userName : "N/A"}</Col>
                    <Col >{this.props.reservation.userPhoneNumber ? this.props.reservation.userPhoneNumber : "N/A"}</Col>
                    <Col ><this.DeleteButton /></Col>
                </Row>
            );
        }
    }
}

export default ReservationDetailedRow;