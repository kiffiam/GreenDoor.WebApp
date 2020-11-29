import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { Reducer } from "redux";
import {
    FeedPostsState,
    FeedPostsActions,
    FeedPostsActionTypes
} from "./FeedPostsTypes";


const initialFeedPoststate: FeedPostsState = {
    feedPosts: []
};


export const FeedPostsReducer: Reducer<FeedPostsState, FeedPostsActions> = (state = initialFeedPoststate, action) => {
    switch (action.type) {
        case FeedPostsActionTypes.GETALL: {
            return {
                ...state,
                feedPosts: action.feedPosts
            };
        }
        //case..
        default: return state;
    }

};
