
import * as React from 'react';
import { RoomDetailedModel } from "../../model/Room/RoomDetailedModel";
import { AddRoomModel } from '../../model/Room/RoomToAdd';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from "reactstrap";
import TimeField from 'react-simple-timefield';
import { ReservationDetailedModel } from '../../model/Reservation/ReservationDetailedModel';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router'

export interface Props {
    onSubmitRoom: (room: RoomDetailedModel) => Promise<RoomDetailedModel>;
}

export interface State {
    room: RoomDetailedModel;
    error?: boolean;
}

class AddRoomComponent extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            room: {
                id: 0,
                name: "",
                difficulty: 0,
                minTime: "00:00:00",
                maxTime: "00:00:00",
                recordTime: "00:00:00",
                intervalTime: "00:00:00",
                description: "",
                availableReservations: []
            },
            //error: false
        }
    }

    private handleSubmitClick = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        var result = await this.props.onSubmitRoom(this.state.room);
        this.setState(state => ({
            room: {
                ...state.room,
                id: result.id
            }
        }));
        return false;
    }

    private handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            room: {
                ...state.room,
                name: e.target.value
            }
        }));
    }

    private handleDifficultyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            room: {
                ...state.room,
                difficulty: parseInt(e.target.value, 10)
                //difficulty: e.target.valueAsNumber
            }
        }));
    }

    private handleMinTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            room: {
                ...state.room,
                minTime: e.target.value
            }
        }));
    }

    private handleMaxTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            room: {
                ...state.room,
                maxTime: e.target.value
            }
        }));
    }

    private handleRecordTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            room: {
                ...state.room,
                recordTime: e.target.value
            }
        }));
    }

    private handleIntervalTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            room: {
                ...state.room,
                intervalTime: e.target.value
            }
        }));
    }

    private handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(state => ({
            room: {
                ...state.room,
                description: e.target.value
            }
        }));
    }

    render() {
        if (this.state.room.id) {
            return <Redirect to={'/Rooms/' + this.state.room.id} />
        }
        return (
            <Container>
                <Form validated={true}
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        this.handleSubmitClick(e)
                    }>
                    <h2>Create a new room</h2>
                    <FormGroup row>
                        <Label sm={2}>Room name:</Label>
                        <Col sm={7}>
                            <Input
                                value={this.state.room.name}
                                placeholder="Name of the room"
                                onChange={e => this.handleNameChange(e)}
                                type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Difficulty:</Label>
                        <Col sm={7}>
                            <Input type="select" name="difficulty" id="difficulty"
                                value={this.state.room.difficulty}
                                onChange={e => this.handleDifficultyChange(e)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Description:</Label>
                        <Col sm={7}>
                            <Input
                                type="textarea"
                                placeholder="Description of the room"
                                onChange={e => this.handleDescriptionChange(e)}
                            >
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Minimum Time:</Label>
                        <Col sm={2}>
                            <TimeField
                                input={<Input type="text" />}
                                value={this.state.room.minTime}
                                onChange={e => this.handleMinTimeChange(e)}
                                colon=":"
                                showSeconds={true}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Maximum Time:</Label>
                        <Col sm={2}>
                            <TimeField
                                input={<Input type="text" />}
                                value={this.state.room.maxTime}
                                onChange={e => this.handleMaxTimeChange(e)}
                                colon=":"
                                showSeconds={true}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Record Time:</Label>
                        <Col sm={2}>
                            <TimeField
                                input={<Input type="text" />}
                                value={this.state.room.recordTime}
                                onChange={e => this.handleRecordTimeChange(e)}
                                colon=":"
                                showSeconds={true}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Interval Time:</Label>
                        <Col sm={2}>
                            <TimeField
                                input={<Input type="text" />}
                                value={this.state.room.intervalTime}
                                onChange={e => this.handleIntervalTimeChange(e)}
                                colon=":"
                                showSeconds={true}
                            />
                        </Col>
                    </FormGroup>
                    <Button type="submit"
                        title="AddRoom"
                        color="primary"
                    >Add new room
                    </Button>
                </Form>

            </Container>
        );
    }
}

export default AddRoomComponent;