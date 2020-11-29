import * as React from 'react';
import { getUserReservationsAction } from "../../redux/Reservations/ReservationActions"
import { ReservationDetailedModel } from '../../model/Reservation/ReservationDetailedModel';
import { connect } from "react-redux";
import { ApplicationState } from "../../redux/Store";
import UserReservationsContainer from '../../containers/UserReservationsContainer';
import { deleteReservation, unBookReservations } from '../../api/ReservationData';
import { User, UserRoles } from '../../model/User/User';
import { Alert, Container, Label, Row } from 'reactstrap';
import ReservationsContainer from '../../containers/ReservationsContainer';
import RedirectLogRegComponent from '../../components/common/RedirectLogRegComponent';

export interface Props {
    userReservations: ReservationDetailedModel[];
    currentUser: User;
    getUserReservationsAction: typeof getUserReservationsAction;
}

export interface State {
    alertVisible: boolean;
}

class MyReservations extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
        this.state = { alertVisible: false }
    }

    componentDidMount() {
        if (this.props.currentUser.id !== "") {
            this.props.getUserReservationsAction(this.props.currentUser.id);
        }

    }

    private handleUnBookClick = async (id: number) => {
        await unBookReservations(id);
        this.setState({ alertVisible: true })
        this.props.getUserReservationsAction(this.props.currentUser.id);
    }

    private handleDeleteClick = async (id: number) => {
        await deleteReservation(id);
        //this.props.getUserReservationsAction();
    }

    render() {
        if (this.props.currentUser.id === "") {
            return (
                <Container>
                    <Row className="justify-content-center">
                        <Label className="h2 text-center">You need to be logged in to see your reservations!</Label>
                    </Row>
                    <RedirectLogRegComponent></RedirectLogRegComponent>
                </Container>
            );
        }
        return (
            <div>
                <Row className="justify-content-center">
                    {this.props.currentUser.role === UserRoles.User &&
                        <Alert color="success"
                            isOpen={this.state.alertVisible}
                            toggle={() => this.setState({ alertVisible: false })}>
                            You have unbooked your time!
                    </Alert>
                    }
                </Row>
                <ReservationsContainer
                    reservations={this.props.userReservations}
                    onUnBookClicked={this.handleUnBookClick}
                    currentUser={this.props.currentUser}
                    onDeleteClicked={this.handleDeleteClick}
                />
            </div>
        );
    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        userReservations: store.reservations.userReservations,
        currentUser: store.users.currentUser
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUserReservationsAction: (userId: string) => dispatch((getUserReservationsAction(userId)))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyReservations);