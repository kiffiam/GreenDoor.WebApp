import { ReservationShortModel } from "../Reservation/ReservationShortModel"

export class User {
    id: string = ""
    firstName: string = ""
    lastName: string = ""
    userName: string = ""
    email: string = ""
    phone: string = ""
    role: UserRoles = UserRoles.Anon
}

export enum UserRoles {
    Admin = 'Admin',
    User = 'User',
    Anon = "Anon"
}

export interface Token {
    result: string;
}