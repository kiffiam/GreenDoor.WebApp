import * as React from 'react';
import { RoomListModel } from "../../model/Room/RoomListModel";
import { deleteRoom } from "../../api/RoomData";
import { getRooms } from "../../redux/Rooms/RoomsActions";
import { User, UserRoles } from '../../model/User/User';
import { ApplicationState } from '../../redux/Store';
import { connect } from 'react-redux';
import { Row, Container } from 'reactstrap';
import AdminRoomCard from '../../components/RoomComponents/AdminRoomCard';

export interface Props {
    currentUser: User;
    rooms: RoomListModel[];
    getRooms: typeof getRooms;
}

export interface State {

}

class AdminRooms extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    private handleDeleteClick = async (id: number) => {
        await deleteRoom(id);
        this.props.getRooms();
    }

    componentDidMount() {
        this.props.getRooms();
    }

    render() {
        if (this.props.currentUser.role !== UserRoles.Admin) {
            return (
                <Container>
                    <Row>
                        <h1>STOP! YOU HAVE VIOLATED THE LAW!!</h1>
                    </Row>
                </Container>
            );
        } else {
            return (
                <Container>
                    <Row className="row m-0">
                        {this.props.rooms.map(rm => (
                            <AdminRoomCard key={rm.id}
                                room={rm}
                                onDeleteClicked={this.handleDeleteClick}
                            />
                        ))}
                    </Row>
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


const mapDispatchToProps = (dispatch: any) => {
    return {
        getRooms: () => dispatch(getRooms())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminRooms);