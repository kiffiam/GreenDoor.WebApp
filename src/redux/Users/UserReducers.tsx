import * as React from 'react';
import { Reducer } from "redux";
import { User } from "../../model/User/User"
import {
    UserState,
    UserActions,
    UserActionTypes
} from "./UserActionTypes";


const initialUsersState: UserState = {
    users: [],
    currentUser: new User(),
};

export const UserReducer: Reducer<
    UserState,
    UserActions
> = (state = initialUsersState, action) => {
    switch (action.type) {
        case UserActionTypes.GETALL: {
            return {
                ...state,
                users: action.users
            };
        }
        case UserActionTypes.LOGIN: {
            return {
                ...state,
                currentUser: action.currentUser
            };
        }
        case UserActionTypes.REGISTER: {
            return {
                ...state,
                currentUser: action.currentUser
            };
        }
        case UserActionTypes.LOGOUT: {
            return {
                ...state,
                currentUser: new User()
            };
        }
        default: return {
            ...state,
            undefined
        };
    }
};