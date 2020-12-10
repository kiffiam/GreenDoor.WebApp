import * as React from 'react';
import RoomCard from "../components/RoomComponents/RoomCard";
import { deleteRoom } from "../api/RoomData";
import { getRooms, deleteRoomAction } from "../redux/Rooms/RoomsActions";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import { RoomListModel } from '../model/Room/RoomListModel';
import { ApplicationState } from "../redux/Store";
import { User } from '../model/User/User';

export interface Props {
    rooms: RoomListModel[];
    getRooms: typeof getRooms;
    deleteRoomAction: typeof deleteRoomAction;
    currentUser: User
}

export interface State {

}

class RoomList extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

    }

    private handleDeleteClick = async (id: number) => {
        await deleteRoom(id);
        this.props.getRooms();
    }

    componentDidMount() {
        this.props.getRooms();
    }

    render() {
        return (
            <Container>
                <Row className="row m-0">
                    {this.props.rooms.map(rm => (
                        <RoomCard key={rm.id}
                            room={rm}
                            onDeleteClicked={this.handleDeleteClick}
                        />
                    ))}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        rooms: store.rooms.rooms,
        currentUser: store.users.currentUser || undefined
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getRooms: () => dispatch(getRooms()),
        deleteRoomAction: (id: number) => dispatch(deleteRoomAction(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomList);
