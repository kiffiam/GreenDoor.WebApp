import * as React from 'react';
import axios from "axios";
import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { LoginModel } from "../../model/User/LoginModel"
import { RegisterModel } from "../../model/User/RegisterModel"
import setAuthHeaderToken from "../../auth/AuthHandler";
import jwt_decode from "jwt-decode";

import {
    UserState,
    UserGetAllAction,
    UserLoginAction,
    UserRegisterAction,
    UserActionTypes,
    UserLogoutAction
} from "./UserActionTypes";
import { loginUser, logoutUser, registerUser, getAllUsers } from '../../api/UserData';


export const getUsers: ActionCreator<ThunkAction<Promise<AnyAction>, UserState, null, UserGetAllAction>> = () => {
    return async (dispatch: Dispatch) => {
        const users = await getAllUsers();
        return dispatch({
            users,
            type: UserActionTypes.GETALL
        });
    };
};

export const logOutAction: ActionCreator<ThunkAction<Promise<AnyAction>, UserState, null, UserLogoutAction>>
    = () => {
        return async (dispatch: Dispatch) => {
            await logoutUser()
                .then(response => {
                    localStorage.removeItem('token');
                    setAuthHeaderToken("");
                    console.log(localStorage.getItem('token'));
                });
            return dispatch({
                type: UserActionTypes.LOGOUT
            });
        };
    };

export const loginUserAction: ActionCreator<ThunkAction<Promise<AnyAction>, UserState, null, UserLoginAction>>
    = (loginModel: LoginModel) => {
        return async (dispatch: Dispatch) => {
            var result;
            await loginUser(loginModel)
                .then(response => {
                    const token = response.result;
                    localStorage.setItem('token', token);
                    setAuthHeaderToken(token);
                    result = jwt_decode(token);
                    console.log(localStorage.getItem('token'));
                });
            const currentUser = result;
            return dispatch({
                currentUser,
                type: UserActionTypes.LOGIN
            });
        };
    };

export const registerUserAction: ActionCreator<ThunkAction<Promise<AnyAction>, UserState, null, UserRegisterAction>>
    = (registerModel: RegisterModel) => {
        return async (dispatch: Dispatch) => {
            //const currentUser = await registerUser(registerModel);
            var result;
            await registerUser(registerModel)
                .then(response => {
                    const token = response;
                    localStorage.setItem('token', token);
                    setAuthHeaderToken(token);
                    result = jwt_decode(token);
                    console.log(localStorage.getItem('token'));
                });
            const currentUser = result;
            return dispatch({
                currentUser,
                type: UserActionTypes.REGISTER
            });
        };
    };