import * as React from 'react';
import axios from "axios";
import { getAllRooms, getRoomById, deleteRoom } from "../../api/RoomData"
import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import {
  RoomsState,
  RoomsGetAllAction,
  RoomsGetSingleAction,
  RoomsActionTypes
} from "./RoomsTypes";

export const getRooms: ActionCreator<ThunkAction<Promise<AnyAction>, RoomsState, null, RoomsGetAllAction>> = () => {
  return async (dispatch: Dispatch) => {
    const rooms = await getAllRooms();
    return dispatch({
      rooms,
      type: RoomsActionTypes.GETALL
    });
  };
};

export const getRoomDetailed: ActionCreator<ThunkAction<Promise<AnyAction>, RoomsState, null, RoomsGetSingleAction>
> = (id: number) => {
  return async (dispatch: Dispatch) => {
    const detailedRoom = await getRoomById(id);
    return dispatch({
      detailedRoom,
      type: RoomsActionTypes.GETSINGLE
    });
  };
};

export const deleteRoomAction: ActionCreator<ThunkAction<Promise<AnyAction>, RoomsState, null, RoomsGetAllAction>
> = (id: number) => {
  return async (dispatch: Dispatch) => {
    await deleteRoom(id);
    const rooms = await getAllRooms();
    return dispatch({
      rooms,
      type: RoomsActionTypes.GETALL
    });
  };
};

