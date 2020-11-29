import * as React from 'react';
import { User } from "../../model/User/User";

export enum UserActionTypes {
    GETALL = "USERS/GETALL",
    LOGIN = "USERS/LOGIN",
    REGISTER = "USERS/REGISTER",
    LOGOUT = "USERS/LOGOUT"

}

export interface UserGetAllAction {
    users: User[];
    type: UserActionTypes.GETALL;
}
export interface UserLoginAction {
    currentUser: User;
    type: UserActionTypes.LOGIN;
}
export interface UserRegisterAction {
    currentUser: User;
    type: UserActionTypes.REGISTER;
}
export interface UserLogoutAction {
    type: UserActionTypes.LOGOUT;
}

//Action-ök uniója
export type UserActions =
    | UserGetAllAction
    | UserLoginAction
    | UserRegisterAction
    | UserLogoutAction

export interface UserState {
    readonly currentUser: User;
    readonly users: User[];
}
