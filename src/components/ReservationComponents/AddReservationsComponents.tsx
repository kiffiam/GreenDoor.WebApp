import * as React from 'react';
import { ReservationDetailedModel } from "../../model/Reservation/ReservationDetailedModel";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from "reactstrap";
import { RoomDetailedModel } from '../../model/Room/RoomDetailedModel';
import Datetime from 'react-datetime';
import moment, { Moment, MomentInput } from "moment";
import "react-datetime/css/react-datetime.css"
import 'moment/locale/hu';


export interface Props {
    room: RoomDetailedModel;
    onSubmitReservations: (roomId: number, quantity: number, fromDateTime: string) => void;
}

export interface State {
    quantity: number;
    fromDateTime?: Date;
    roomId: number;
    roomName: string;
}

class AddReservationsComponent extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            quantity: 0,
            fromDateTime: new Date(),
            roomId: this.props.room.id,
            roomName: this.props.room.name
        }
    }

    private handleSubmitClick = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        var fromDateTimestring = moment(this.state.fromDateTime).format('YYYY-MM-DDTHH:mm:ss');
        var result = await this.props.onSubmitReservations(this.state.roomId, this.state.quantity, fromDateTimestring);

        return false;
    }

    private handleFromDateTimeChange = (e: MomentInput) => {
        this.setState({
            fromDateTime: moment(e).toDate()
        });
    }

    private handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            quantity: parseInt(e.target.value, 10)
        }));
    }



    render() {
        return (
            <Container>
                <Form validated={true}
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        this.handleSubmitClick(e)
                    }>
                    <h2>Add new reservations for {this.state.roomName} room.</h2>
                    <FormGroup row>
                        <Label sm={3}>Number of new reservations:</Label>
                        <Col sm={1}>
                            <Input
                                min={1}
                                step={1}
                                value={this.state.quantity}
                                type="number"
                                placeholder="Number of reservations"
                                onChange={e => this.handleQuantityChange(e)}
                            >
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>First reservation's date:</Label>
                        <Col sm="auto">
                            <Datetime
                                value={this.state.fromDateTime}
                                dateFormat="YYYY-MM-DD"
                                timeFormat="HH:mm:ss"
                                onChange={e => this.handleFromDateTimeChange(e)}
                                locale="hu"
                            />
                        </Col>
                    </FormGroup>
                    <Button type="submit"
                        title="EditRoom"
                        color="primary"
                    >Add new reservations
                    </Button>
                </Form>
            </Container >
        );
    }
}

export default AddReservationsComponent;