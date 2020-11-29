import * as React from 'react';
import axios from "axios";
import {
    bookReservations,
    unBookReservations,
    getAllReservations as getAllReservations,
    getAllBookedReservations as getAllBookedReservations,
    getAllBookedReservationsByRoomId as getAllBookedReservationsByRoomId,
    getAllFreeReservationsByRoomId as getAllFreeReservationsByRoomId,
    getUserReservations as getUserReservations,
    getAllReservationsByRoomId,
} from "../../api/ReservationData";

import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";


import {
    ReservationState,
    ReservationGetAllAction,
    ReservationGetAllBookedAction,
    ReservationGetAllBookedByRoomAction,
    ReservationGetAllFreeByRoomAction,
    ReservationGetAllByRoomAction,
    ReservationGetUserReservationsAction,
    ReservationActionTypes,
    ReservationUnBookAction,
    ReservationBookAction
} from "./ReservationActionTypes";


//admin
export const getAllReservationsAction: ActionCreator<ThunkAction<Promise<AnyAction>, ReservationState, null, ReservationGetAllAction>>
    = () => {
        return async (dispatch: Dispatch) => {
            const reservations = await getAllReservations();
            return dispatch({
                reservations,
                type: ReservationActionTypes.GETALL
            });
        };
    };

export const getAllBookedReservationsAction: ActionCreator<ThunkAction<Promise<AnyAction>, ReservationState, null, ReservationGetAllBookedAction>>
    = () => {
        return async (dispatch: Dispatch) => {
            const reservations = await getAllBookedReservations();
            return dispatch({
                reservations,
                type: ReservationActionTypes.GETALLBOOKED
            });
        };
    };

//admin
export const getAllBookedByRoomIdAction: ActionCreator<ThunkAction<Promise<AnyAction>, ReservationState, null, ReservationGetAllBookedByRoomAction>>
    = (id: number) => {
        return async (dispatch: Dispatch) => {
            const reservations = await getAllBookedReservationsByRoomId(id);
            return dispatch({
                reservations,
                type: ReservationActionTypes.GETALLBOOKEDBYROOM
            });
        };
    };

//admin 
export const getAllFreeByRoomAction: ActionCreator<ThunkAction<Promise<AnyAction>, ReservationState, null, ReservationGetAllFreeByRoomAction>> =
    (id: number) => {
        return async (dispatch: Dispatch) => {
            const reservations = await getAllFreeReservationsByRoomId(id);
            return dispatch({
                reservations,
                type: ReservationActionTypes.GETALLFREEBYROOM
            });
        };
    };

export const getAllByRoomAction: ActionCreator<ThunkAction<Promise<AnyAction>, ReservationState, null, ReservationGetAllByRoomAction>> =
    (id: number) => {
        return async (dispatch: Dispatch) => {
            const reservations = await getAllReservationsByRoomId(id);
            return dispatch({
                reservations,
                type: ReservationActionTypes.GETALLBYROOM
            });
        };
    };

//user 
export const getUserReservationsAction: ActionCreator<ThunkAction<Promise<AnyAction>, ReservationState, null, ReservationGetUserReservationsAction>> =
    () => {
        return async (dispatch: Dispatch) => {
            const userReservations = await getUserReservations();
            return dispatch({
                userReservations,
                type: ReservationActionTypes.GETUSERRESERVATIONS
            });
        };
    };


//user
/*export const bookReservationAction: ActionCreator<ThunkAction<Promise<AnyAction>, ReservationState, null, ReservationBookAction>> =
    (userId: string, id: number) => {
        return async (dispatch: Dispatch) => {
            const result = await bookReservations(userId, id);
            return dispatch({
                result,
                type: ReservationActionTypes.BOOK
            });
        };
    };*/

//user
/*export const unBookReservationAction: ActionCreator<ThunkAction<Promise<AnyAction>, ReservationState, null, ReservationUnBookAction>> =
    (userId: string, id: number) => {
        return async (dispatch: Dispatch) => {
            const result = await unBookReservations(userId, id);
            return dispatch({
                result,
                type: ReservationActionTypes.UNBOOK
            });
        };
    };*/