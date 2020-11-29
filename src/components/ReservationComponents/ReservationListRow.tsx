import * as React from 'react';
import { ReservationShortModel } from '../../model/Reservation/ReservationShortModel';
import { Button, Row, Col } from "reactstrap";
import { withRouter } from "react-router-dom";
import { User } from '../../model/User/User';
import DateTimeFormatComponent from "../common/DateTimeFormatComponent";


export interface Props {
    reservation: ReservationShortModel
    onBookClick: () => Promise<boolean>;
}

export interface State {

}

class ReservationListRow extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    }


    private BookButton = () => {
        return (
            <Button
                disabled={this.props.reservation.isBooked}
                active={!this.props.reservation.isBooked}
                color="success"
                block
                onClick={this.props.onBookClick}
            >
                Book
            </Button>
        );
    }

    render() {
        return (
            <Row className="p-1 m-1 align-items-center">
                <Col className="col-4">
                    <DateTimeFormatComponent date={this.props.reservation.reservationDateTime} />
                </Col>
                <Col className="col-2">{this.props.reservation.isBooked ? "Booked" : "Free"}</Col>
                <Col ><this.BookButton /></Col>
            </Row>
        );
    }
}

export default ReservationListRow;