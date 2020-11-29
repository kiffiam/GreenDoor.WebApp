import * as React from 'react';
import { updateRoom } from '../../api/RoomData';
import EditRoomComponent from '../../components/RoomComponents/EditRoomComponent'
import { RoomDetailedModel } from '../../model/Room/RoomDetailedModel';
import { getRoomDetailed } from '../../redux/Rooms/RoomsActions';
import { connect } from "react-redux";
import { ApplicationState } from "../../redux/Store";
import { RouteComponentProps } from 'react-router-dom';
import { User, UserRoles } from '../../model/User/User';
import { Container, Row } from 'reactstrap';

export interface Props extends RouteComponentProps<{ id: string }> {
    room?: RoomDetailedModel
    getRoomDetailed: typeof getRoomDetailed
    currentUser: User;
}

export interface State {

}



class EditRoom extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRoomDetailed(parseInt(this.props.match.params.id, 10));
    }

    private async handleEditRoomClick(id: number, room: RoomDetailedModel): Promise<RoomDetailedModel> {
        var result = await updateRoom(id, room);
        return result;
    }

    render() {
        if (this.props.currentUser.role !== UserRoles.Admin) {
            return (
                <Container>
                    <Row>
                        <h1>You have to be logged in as an admin to edit rooms!</h1>
                    </Row>
                </Container>
            );
        } else {
            if (this.props.room !== undefined) {
                return (
                    <div>
                        <EditRoomComponent
                            key={this.props.room.id}
                            room={this.props.room}
                            onSubmitRoom={(id: number, room: RoomDetailedModel) => this.handleEditRoomClick(id, room)} />
                    </div>
                );
            } else {
                return (
                    <div>
                        <h1>There is no existing room with the id of {this.props.match.params.id}</h1>
                    </div>
                );
            }
        }
    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        room: store.rooms.detailedRoom || undefined,
        currentUser: store.users.currentUser || undefined
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getRoomDetailed: (id: number) => dispatch(getRoomDetailed(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditRoom);