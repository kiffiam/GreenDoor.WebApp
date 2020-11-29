import * as React from 'react';
import RoomList from '../containers/RoomListContainer';
import { RoomListModel } from "../model/Room/RoomListModel";
import { getRooms, deleteRoomAction } from "../redux/Rooms/RoomsActions";

export interface Props {
    rooms: RoomListModel[];
    getRooms: typeof getRooms;
}

export interface State {

}

class Rooms extends React.Component<Props, State> {

    public constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RoomList />
            </div>
        );
    }
}

export default Rooms;