import * as React from 'react';
import { FeedPost } from '../../model/Feedpost/FeedPost';

export enum FeedPostsActionTypes {
    GETALL = "FEEDPOSTS/GETALL"
}

export interface FeedPostsGetAllAction {
    type: FeedPostsActionTypes.GETALL;
    feedPosts: FeedPost[];
}


//Action-ök uniója
export type FeedPostsActions =
    | FeedPostsGetAllAction


export interface FeedPostsState {
    readonly feedPosts: FeedPost[];

}