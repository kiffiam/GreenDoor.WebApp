import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { Reducer } from "redux";
import {
    ReviewsState,
    ReviewsActions,
    ReviewsActionTypes
} from "./ReviewActionTypes";


const initialReviewstate: ReviewsState = {
    reviews: [],
    reviewsByRoom: []
};


export const ReviewsReducer: Reducer<ReviewsState, ReviewsActions> = (state = initialReviewstate, action) => {
    switch (action.type) {
        case ReviewsActionTypes.GETALL: {
            return {
                ...state,
                reviews: action.reviews
            };
        }
        case ReviewsActionTypes.GETBYROOM: {
            return {
                ...state,
                reviewsByRoom: action.reviewsByRoom
            };
        }
        //case..
        default: return state;
    }

};
