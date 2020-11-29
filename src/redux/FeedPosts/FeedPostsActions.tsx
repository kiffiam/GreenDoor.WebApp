import * as React from 'react';
import axios from "axios";
import { getAllFeedPosts } from "../../api/FeedPostData"
import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";


import {
    FeedPostsState,
    FeedPostsGetAllAction,
    FeedPostsActionTypes
} from "./FeedPostsTypes";

export const getFeedPosts: ActionCreator<ThunkAction<Promise<AnyAction>, FeedPostsState, null, FeedPostsGetAllAction>> = () => {
    return async (dispatch: Dispatch) => {
        const feedPosts = await getAllFeedPosts();
        return dispatch({
            feedPosts,
            type: FeedPostsActionTypes.GETALL
        });
    };
};