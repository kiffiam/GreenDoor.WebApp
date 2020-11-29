import * as React from 'react';
import { RoomDetailedModel } from '../../model/Room/RoomDetailedModel';
import { RoomListModel } from '../../model/Room/RoomListModel';

export enum RoomsActionTypes {
  GETALL = "ROOMS/GETALL",
  GETSINGLE = "ROOMS/GETSINGLE"
}

export interface RoomsGetAllAction {
  type: RoomsActionTypes.GETALL;
  rooms: RoomListModel[];
}

export interface RoomsGetSingleAction {
  type: RoomsActionTypes.GETSINGLE;
  detailedRoom: RoomDetailedModel;
}

/*export interface IRoomsGetFeaturedAction {
  type: RoomsActionTypes.GETFEATURED;
  featuredRooms: RoomList[];
  isFirstPage: boolean;
}
 
export interface IRoomsGetMyAction {
  type: RoomsActionTypes.GETMY;
  myRooms: RoomList[];
}

export interface IRoomsGetSingleAction {
  type: RoomsActionTypes.GETSINGLE;
  RoomList: RoomListListRoomList;
}
*/

//Action-ök uniója
export type RoomsActions =
  | RoomsGetAllAction
  | RoomsGetSingleAction



export interface RoomsState {
  readonly rooms: RoomListModel[];
  readonly detailedRoom: RoomDetailedModel | null;
}
