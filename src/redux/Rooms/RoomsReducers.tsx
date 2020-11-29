import * as React from 'react'; 

import { Reducer } from "redux";
import {
    RoomsState,
    RoomsActions,
    RoomsActionTypes
  } from "./RoomsTypes";


const initialRoomsstate: RoomsState = {
    rooms: [],
    detailedRoom: null
};


export const RoomsReducer: Reducer<
  RoomsState,
  RoomsActions
> = (state = initialRoomsstate, action) => {
  switch (action.type) {
    case RoomsActionTypes.GETALL: {
      return {
        ...state,
        rooms: action.rooms
      };
    }
    case RoomsActionTypes.GETSINGLE: {
      return {
        ...state,
        detailedRoom: action.detailedRoom
      };
    }
    //case..
  }
  return state;
};
