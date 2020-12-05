import * as React from 'react';
import axios from "axios";
import { LoginModel } from "../model/User/LoginModel";
import { RegisterModel } from "../model/User/RegisterModel"
import { Token, User } from "../model/User/User";

const baseURL = "https://localhost:44326/"

export const registerUser = async (regmodel: RegisterModel): Promise<string> => {
    var response = await axios.post<string>(
        baseURL + "api/Auth/Register",
        regmodel
    );
    return response.data;
};

export const registerAdmin = async (regmodel: RegisterModel): Promise<string> => {
    var response = await axios.post(
        baseURL + "api/Auth/RegisterAdmin",
        regmodel
    )
    return response.data;
};

export const loginUser = async (logmodel: LoginModel): Promise<Token> => {
    var response = await axios.post<Token>(
        baseURL + "api/Auth/Login",
        logmodel
    );
    return response.data;
};

export const logoutUser = async (): Promise<void> => {
    var response = await axios.post(
        baseURL + "api/Auth/Logout"
    );
    return;
};
