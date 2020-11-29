import * as React from 'react';
import axios from "axios";
import { getAllReviews, getRoomReviews } from "../../api/ReviewData";
import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";


import {
    ReviewsState,
    ReviewsGetAllAction,
    ReviewsGetByRoomAction,
    ReviewsActionTypes
} from "./ReviewActionTypes";

export const getReviews: ActionCreator<ThunkAction<Promise<AnyAction>, ReviewsState, null, ReviewsGetAllAction>>
    = () => {
        return async (dispatch: Dispatch) => {
            const reviews = await getAllReviews();
            return dispatch({
                reviews,
                type: ReviewsActionTypes.GETALL
            });
        };
    };

export const getReviewsByRoomAction: ActionCreator<ThunkAction<Promise<AnyAction>, ReviewsState, null, ReviewsGetByRoomAction>>
    = (roomId: number) => {
        return async (dispatch: Dispatch) => {
            const reviewsByRoom = await getRoomReviews(roomId);
            return dispatch({
                reviewsByRoom,
                type: ReviewsActionTypes.GETBYROOM
            });
        };
    };