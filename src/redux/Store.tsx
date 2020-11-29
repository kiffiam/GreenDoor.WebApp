import * as React from 'react';
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { RoomsState } from './Rooms/RoomsTypes';
import { RoomsReducer } from './Rooms/RoomsReducers';
import { FeedPostsState } from './FeedPosts/FeedPostsTypes';
import { FeedPostsReducer } from './FeedPosts/FeedPostsReducers';
import { ReservationReducer } from './Reservations/ReservationReducers';
import { ReservationState } from './Reservations/ReservationActionTypes';
import { ReviewsState } from './Reviews/ReviewActionTypes';
import { ReviewsReducer } from './Reviews/ReviewReducers';
import { UserReducer } from "../redux/Users/UserReducers";
import { UserState } from "../redux/Users/UserActionTypes";



export interface ApplicationState {
  rooms: RoomsState;
  feedPosts: FeedPostsState;
  reservations: ReservationState;
  reviews: ReviewsState;
  users: UserState;

}

const rootReducer = combineReducers<ApplicationState>({
  rooms: RoomsReducer,
  feedPosts: FeedPostsReducer,
  reservations: ReservationReducer,
  reviews: ReviewsReducer,
  users: UserReducer
});

export default function configureStore(): Store<ApplicationState> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
} 