import * as React from 'react';
import axios from "axios";
import { ReservationDetailedModel } from "../model/Reservation/ReservationDetailedModel";
import { ReservationShortModel } from "../model/Reservation/ReservationShortModel";


const baseURL = "https://localhost:44326/"

export const getAllReservations = async (): Promise<ReservationDetailedModel[]> => {
    var response = await axios.get<ReservationDetailedModel[]>(
        baseURL + "api/ReservationsAdmin"
    );
    return response.data;
};

export const getUserReservations = async (): Promise<ReservationDetailedModel[]> => {
    var response = await axios.get<ReservationDetailedModel[]>(
        baseURL + "api/Reservations/MyReservations"
    );
    return response.data;
};



export const bookReservations = async (id: number): Promise<boolean> => {
    var response = await axios.put<boolean>(
        baseURL + "api/Reservations/Book/" + id
    );
    return response.data;
};

export const unBookReservations = async (id: number): Promise<boolean> => {
    var response = await axios.put<boolean>(
        baseURL + "api/Reservations/Unbook/" + id
    );
    return response.data;
};

//admin
export const getAllBookedReservations = async (): Promise<ReservationDetailedModel[]> => {
    var response = await axios.get<ReservationDetailedModel[]>(
        baseURL + "api/ReservationsAdmin/AllBooked"
    );
    return response.data;
};

//anon
export const getAllFreeReservationsByRoomId = async (roomId: number): Promise<ReservationDetailedModel[]> => {
    var response = await axios.get<ReservationDetailedModel[]>(
        baseURL + "api/ReservationsAdmin/" + roomId + "/free"
    );
    return response.data;
};

//admin
export const getAllBookedReservationsByRoomId = async (roomId: number): Promise<ReservationDetailedModel[]> => {
    var response = await axios.get<ReservationDetailedModel[]>(
        baseURL + "api/ReservationsAdmin/" + roomId + "/booked"
    );
    return response.data;
};

export const getAllReservationsByRoomId = async (roomId: number): Promise<ReservationDetailedModel[]> => {
    var response = await axios.get<ReservationDetailedModel[]>(
        baseURL + "api/ReservationsAdmin/" + roomId
    );
    return response.data;
};


//admin
export const addAvailableReservations = async (roomId: number, quantity: number, fromdateTime: string): Promise<ReservationDetailedModel[]> => {
    var response = await axios.post<ReservationDetailedModel[]>(
        baseURL + "api/ReservationsAdmin/" + roomId,
        { quantity, fromdateTime },
        { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
};

//admin
export const updateReservation = async (id: number, reservation: ReservationDetailedModel): Promise<ReservationDetailedModel> => {
    var response = await axios.put<ReservationDetailedModel>(
        baseURL + "api/ReservationsAdmin/" + id,
        reservation
    );
    return response.data;
};

//admin
export const deleteReservation = async (id: number): Promise<ReservationShortModel[]> => {
    var response = await axios.delete(
        baseURL + "api/ReservationsAdmin/" + id
    );
    return response.data;
};