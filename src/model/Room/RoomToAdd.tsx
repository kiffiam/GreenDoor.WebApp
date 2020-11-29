import * as React from 'react';

export interface AddRoomModel {
    name: string;
    minTime: string;
    maxTime: string;
    recordTime: string;
    intervalTime: string;
    difficulty: number;
    //picutre
    description: string;
}

export interface UpdateRoomModel {
    id: number;
    name: string;
    minTime: string;
    maxTime: string;
    recordTime: string
    intervalTime: string;
    difficulty: number;
    //picutre
    description: string;
}
