import * as React from 'react';
import axios from "axios";
import { ReviewViewModel } from "../model/Review/ReviewViewModel";
import { ReviewModel } from "../model/Review/ReviewModel";


const baseURL = "https://localhost:44326/"


export const getAllReviews = async (): Promise<ReviewViewModel[]> => {
    var response = await axios.get<ReviewViewModel[]>(
        baseURL + "api/Reviews"
    );
    return response.data;
};

export const getRoomReviews = async (roomId: number): Promise<ReviewViewModel[]> => {
    var response = await axios.get<ReviewViewModel[]>(
        baseURL + "api/Reviews/" + roomId
    );
    return response.data;
};


export const addReview = async (review: ReviewModel, roomId: number): Promise<ReviewViewModel> => {
    var response = await axios.post(
        baseURL + "api/Reviews/" + roomId,
        review
    );
    return response.data;
};

//TODO: nem kell
export const deleteReview = async (id: number): Promise<boolean> => {
    var response = await axios.delete(
        baseURL + "api/Review/" + id
    );
    return response.data;
};