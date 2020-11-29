import * as React from 'react';
import { ReviewViewModel } from '../../model/Review/ReviewViewModel';

export enum ReviewsActionTypes {
    GETALL = "REVIEWS/GETALL",
    GETBYROOM = "REVIEWS/GETBYROOM"
}

export interface ReviewsGetAllAction {
    type: ReviewsActionTypes.GETALL;
    reviews: ReviewViewModel[];
}

export interface ReviewsGetByRoomAction {
    type: ReviewsActionTypes.GETBYROOM;
    reviewsByRoom: ReviewViewModel[];
}


//Action-ök uniója
export type ReviewsActions =
    | ReviewsGetAllAction
    | ReviewsGetByRoomAction


export interface ReviewsState {
    readonly reviews: ReviewViewModel[];
    readonly reviewsByRoom: ReviewViewModel[];
}