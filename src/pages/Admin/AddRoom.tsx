import { RoomDetailedModel } from "../../model/Room/RoomDetailedModel";
import { RoomListModel } from "../../model/Room/RoomListModel";
import * as React from 'react';
import AddRoomComponent from "../../components/RoomComponents/AddRoomComponent";
import { AddRoomModel } from "../../model/Room/RoomToAdd";
import { postRoom } from "../../api/RoomData";
import { User, UserRoles } from "../../model/User/User";
import { Container, Row } from "reactstrap";
import { ApplicationState } from "../../redux/Store";
import { connect } from "react-redux";

export interface Props {
    currentUser: User;
}

export interface State {

}

class AddRoom extends React.Component<Props, State> {

    private async handleAddRoomClick(room: RoomDetailedModel): Promise<RoomDetailedModel> {
        return await postRoom(room);
    }

    render() {
        if (this.props.currentUser.role !== UserRoles.Admin) {
            return (
                <Container>
                    <Row>
                        <h1>You have to be an admin to add new rooms!</h1>
                    </Row>
                </Container>
            );
        } else {
            return (
                <div>
                    <AddRoomComponent onSubmitRoom={this.handleAddRoomClick} />
                </div>
            );
        }

    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        currentUser: store.users.currentUser || undefined
    };
};

export default connect(
    mapStateToProps,
    null
)(AddRoom);