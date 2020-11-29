import { ReservationShortModel } from '../Reservation/ReservationShortModel';

export interface RoomDetailedModel {
    id: number;
    name: string
    minTime: string
    maxTime: string
    recordTime: string
    intervalTime: string;
    difficulty: number
    //picutre
    description: string
    availableReservations: ReservationShortModel[]
}