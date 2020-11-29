import * as React from 'react';
import axios from "axios";
import { FeedPost } from '../model/Feedpost/FeedPost';


const baseURL = "https://localhost:44326/"


export const getAllFeedPosts = async (): Promise<FeedPost[]> => {
    var response = await axios.get<FeedPost[]>(
        baseURL + "api/FeedPosts"
    );
    return response.data;
};

export const addFeedPost = async (feedPost: FeedPost): Promise<FeedPost> => {
    var response = await axios.post<FeedPost>(
        baseURL + "api/FeedPosts",
        feedPost
    );
    return response.data;
};

export const updateFeedPost = async (id: number, feedPost: FeedPost): Promise<FeedPost> => {
    var response = await axios.put<FeedPost>(
        baseURL + "api/FeedPosts/" + id,
        feedPost
    );
    return response.data;
};

export const deleteFeedPost = async (id: number): Promise<boolean> => {
    var response = await axios.delete(
        baseURL + "api/FeedPosts/" + id
    );
    return response.data;
};