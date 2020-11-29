import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Label, Row } from 'reactstrap';
import { User, UserRoles } from '../../model/User/User';
import { ApplicationState } from "../../redux/Store"
import AddReviewComponent from "../../components/ReviewComponents/AddReviewComponent";
import { ReviewModel } from '../../model/Review/ReviewModel';
import { ReviewViewModel } from '../../model/Review/ReviewViewModel';
import { addReview } from "../../api/ReviewData";
import { RouteComponentProps } from 'react-router-dom';
import { RoomDetailedModel } from '../../model/Room/RoomDetailedModel';
import RedirectLogRegComponent from "../../components/common/RedirectLogRegComponent";

export interface Props extends RouteComponentProps<{ id: string }> {
    currentUser: User;
    rooms: RoomDetailedModel[];

}

export interface State {
    roomName?: string;
}

class AddReview extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
        this.state = {
            roomName: this.props.rooms.find(({ id }) => id === parseInt(this.props.match.params.id, 10))?.name,
        }
    }

    private async handleSubmitReview(review: ReviewModel, roomId: number): Promise<ReviewViewModel> {
        var result = await addReview(review, roomId);
        return result;
    }

    render() {
        if (this.props.currentUser.role !== UserRoles.User) {
            return (
                <Container>
                    <Row className="justify-content-center">
                        <Label className="h2 text-center">Register or login to leave a review for this room!</Label>
                    </Row>
                    <RedirectLogRegComponent></RedirectLogRegComponent>
                </Container>
            );
        } else {
            return (
                <Container>
                    <AddReviewComponent currentUser={this.props.currentUser}
                        handleSubmitReview={this.handleSubmitReview}
                        roomName={this.state.roomName!}
                        roomId={parseInt(this.props.match.params.id, 10)}
                    />
                </Container>
            );
        }
    }
}


const mapStateToProps = (store: ApplicationState) => {
    return {
        currentUser: store.users.currentUser || undefined,
        rooms: store.rooms.rooms
    };
};

export default connect(
    mapStateToProps,
    null
)(AddReview);