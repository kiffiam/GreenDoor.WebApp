import * as React from 'react';
import { ReservationDetailedModel } from '../../model/Reservation/ReservationDetailedModel';
import { RoomDetailedModel } from '../../model/Room/RoomDetailedModel';
import { RoomListModel } from '../../model/Room/RoomListModel';

export enum ReservationActionTypes {
  GETALL = "RESERVATION/GETALL",
  GETALLBOOKED = "RESERVATION/GETALLBOOKED",
  GETALLBOOKEDBYROOM = "RESERVATION/GETALLBOOKEDBYROOM",
  GETALLFREEBYROOM = "RESERVATION/GETALLFREEBYROOM",
  GETALLBYROOM = "RESERVATION/GETALLBYROOM",
  GETUSERRESERVATIONS = "RESERVATION/GETUSERRESERVATIONS",
  BOOK = "RESERVATION/BOOK",
  UNBOOK = "RESERVATION/BOOK"
}

export interface ReservationGetAllAction {
  reservations: ReservationDetailedModel[];
  type: ReservationActionTypes.GETALL;
}


export interface ReservationGetAllBookedAction {
  type: ReservationActionTypes.GETALLBOOKED;
  reservations: ReservationDetailedModel[];
}

export interface ReservationGetAllBookedByRoomAction {
  type: ReservationActionTypes.GETALLBOOKEDBYROOM;
  reservations: ReservationDetailedModel[];
}

export interface ReservationGetAllByRoomAction {
  type: ReservationActionTypes.GETALLBYROOM;
  reservations: ReservationDetailedModel[];
}


export interface ReservationGetAllFreeByRoomAction {
  type: ReservationActionTypes.GETALLFREEBYROOM;
  reservations: ReservationDetailedModel[];
}

export interface ReservationGetUserReservationsAction {
  type: ReservationActionTypes.GETUSERRESERVATIONS;
  userReservations: ReservationDetailedModel[];
}

export interface ReservationBookAction {
  type: ReservationActionTypes.BOOK;
}

export interface ReservationUnBookAction {
  type: ReservationActionTypes.UNBOOK;
}



//Action-ök uniója
export type ReservationActions =
  | ReservationGetAllAction
  | ReservationGetAllBookedAction
  | ReservationGetAllBookedByRoomAction
  | ReservationGetAllByRoomAction
  | ReservationGetAllFreeByRoomAction
  | ReservationGetUserReservationsAction
  | ReservationBookAction
  | ReservationUnBookAction

///KELLENEK ezek a book unbookok?? valszeg nem

export interface ReservationState {
  readonly reservations: ReservationDetailedModel[];
  readonly reservationsByRoom: ReservationDetailedModel[];
  readonly freeReservationsByRoom: ReservationDetailedModel[];
  readonly bookedReservationsByRoom: ReservationDetailedModel[];
  readonly userReservations: ReservationDetailedModel[];
  readonly currentReservation: ReservationDetailedModel | null;
}
