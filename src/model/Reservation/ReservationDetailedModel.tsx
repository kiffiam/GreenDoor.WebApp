import * as React from 'react';
import { RoomListModel } from "../Room/RoomListModel"

export class ReservationDetailedModel {
    id: number = 0;
    //numberOfPlayer: number = 0;
    //room: RoomListModel;
    roomName: string = "";
    userName: string = "";
    userPhoneNumber: string = "";
    isDeleted: boolean = false;
    isBooked: boolean = false;
    reservationDateTime: string = "";
}