import * as React from 'react';
import { getRoomById } from '../api/RoomData';
import { RoomDetailedModel } from '../model/Room/RoomDetailedModel';
import { getRoomDetailed } from '../redux/Rooms/RoomsActions';
import { connect } from "react-redux";
import { ApplicationState } from "../redux/Store";
import { RouteComponentProps } from 'react-router-dom';
import ReservationListRow from "../components/ReservationComponents/ReservationListRow";
import { Col, Container, Label, Row, Alert, Card, CardBody, CardText } from 'reactstrap';
import { bookReservations } from '../api/ReservationData';
import { User, UserRoles } from '../model/User/User';
import { ReviewViewModel } from '../model/Review/ReviewViewModel';
import { getReviewsByRoomAction } from '../redux/Reviews/ReviewActions';
import ReviewContainer from './ReviewContainer';

export interface Props extends RouteComponentProps<{ id: string }> {
    room?: RoomDetailedModel;
    getRoomDetailed: typeof getRoomDetailed;
    getReviewsByRoomAction: typeof getReviewsByRoomAction
    reviewsByRoom: ReviewViewModel[];
    currentUser: User;
}

export interface State {
    alertVisible: boolean;
}

class RoomDetailedContainer extends React.Component<Props, State> {

    private async handleOnBookClick(id: number) {
        if (this.props.currentUser.role === UserRoles.Anon) {
            this.setState({ alertVisible: true });
            return false;
        }
        if (this.props.currentUser.role === UserRoles.User) {
            this.setState({ alertVisible: true });
        }
        var result = await bookReservations(id);
        this.props.getRoomDetailed(parseInt(this.props.match.params.id, 10));
        return result;
    }

    public constructor(props: Props) {
        super(props);
        this.state = { alertVisible: false }
    }

    componentDidMount() {
        this.props.getRoomDetailed(parseInt(this.props.match.params.id, 10));
        this.props.getReviewsByRoomAction(parseInt(this.props.match.params.id, 10));
    }

    render() {
        if (this.props.room != undefined) {
            return (
                <Container>
                    <Row>
                        <Col className="col-12"></Col>
                        <Col className="col-8">
                            <Row>
                                <Col className="col-12"></Col>
                                <Col className="col-4">
                                    <Row>
                                        <Label className="h1">{this.props.room.name}</Label>
                                    </Row>
                                    <Row>
                                        <Label className="h5 mt-3">Difficulty: {this.props.room.difficulty}</Label>
                                    </Row>
                                    <Row>
                                        <Label className="h6 mt-3">
                                            Approx. playtime:
                                        </Label>
                                        <p>{this.props.room.minTime} - {this.props.room.maxTime}</p>
                                    </Row>
                                    <Row>
                                        <Label className="h6 mt-3">
                                            Record escape from this room:
                                        </Label>
                                        <p>{this.props.room.recordTime}</p>
                                    </Row>

                                </Col>
                                <Col className="col-8">
                                    <Card>
                                        <CardBody>
                                            <CardText className="p">
                                                {this.props.room.description}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Label className="h5 mt-3">Available times:</Label>

                            {this.props.currentUser.role === UserRoles.User &&
                                <Alert color="success"
                                    isOpen={this.state.alertVisible}
                                    toggle={() => this.setState({ alertVisible: false })}>
                                    You have booked!
                                        </Alert>
                            }

                            {this.props.currentUser.role === UserRoles.Anon &&
                                <Alert color="danger"
                                    isOpen={this.state.alertVisible}
                                    toggle={() => this.setState({ alertVisible: false })}>
                                    Login to book this time!
                                        </Alert>
                            }
                            {this.props.room.availableReservations.map(res => (
                                <ReservationListRow key={res.id}
                                    reservation={res}
                                    onBookClick={() => this.handleOnBookClick(res.id)}
                                />
                            ))}
                        </Col>
                        <Col className="col-4">
                            <div className="text-center"><Label className=" h5 ">Reviews about room</Label></div>
                            <ReviewContainer key={this.props.room.id}
                                reviews={this.props.reviewsByRoom} />
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return (
                <div>
                    <h1>Room Not Found!</h1>
                </div>
            );
        }

    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        room: store.rooms.detailedRoom || undefined,
        currentUser: store.users.currentUser || undefined,
        reviewsByRoom: store.reviews.reviewsByRoom
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getRoomDetailed: (id: number) => dispatch(getRoomDetailed(id)),
        getReviewsByRoomAction: (id: number) => dispatch(getReviewsByRoomAction(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomDetailedContainer);

