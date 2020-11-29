import * as React from 'react';

import { Reducer } from "redux";
import {
    ReservationState,
    ReservationActions,
    ReservationActionTypes
} from "./ReservationActionTypes";


const initialReservationsState: ReservationState = {
    reservations: [],
    reservationsByRoom: [],
    bookedReservationsByRoom: [],
    freeReservationsByRoom: [],
    userReservations: [],
    currentReservation: null,
};


export const ReservationReducer: Reducer<
    ReservationState,
    ReservationActions
> = (state = initialReservationsState, action) => {
    switch (action.type) {
        case ReservationActionTypes.GETALL: {
            return {
                ...state,
                reservations: action.reservations
            };
        }
        case ReservationActionTypes.GETALLBOOKED: {
            return {
                ...state,
                reservations: action.reservations
            };
        }
        case ReservationActionTypes.GETALLBOOKEDBYROOM: {
            return {
                ...state,
                bookedReservationsByRoom: action.reservations
            };
        }
        case ReservationActionTypes.GETALLFREEBYROOM: {
            return {
                ...state,
                freeReservationsByRoom: action.reservations
            };
        }
        case ReservationActionTypes.GETALLBYROOM: {
            return {
                ...state,
                reservationsByRoom: action.reservations
            };
        }
        case ReservationActionTypes.GETUSERRESERVATIONS: {
            return {
                ...state,
                userReservations: action.userReservations
            };
        }
        default: return {
            ...state,
            undefined
        };
    }
};
