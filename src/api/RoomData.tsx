
import { RoomDetailedModel } from '../model/Room/RoomDetailedModel';
import { RoomListModel } from '../model/Room/RoomListModel';
import axios from "axios";

const baseURL = "https://localhost:44326/"

export const getAllRooms = async (): Promise<RoomListModel[]> => {
  var response = await axios.get<RoomListModel[]>(
    baseURL + "api/Rooms"
  );
  return response.data;
};

export const getRoomById = async (id: number): Promise<RoomDetailedModel[]> => {
  var response = await axios.get<RoomDetailedModel[]>(
    baseURL + "api/Rooms/" + id
  );
  return response.data;
};

export const postRoom = async (room: RoomDetailedModel): Promise<RoomDetailedModel> => {
  var response = await axios.post<RoomDetailedModel>(
    baseURL + "api/Rooms",
    room
  )
  return response.data;
};

export const updateRoom = async (id: number, room: RoomDetailedModel): Promise<RoomDetailedModel> => {
  var response = await axios.put<RoomDetailedModel>(
    baseURL + "api/Rooms/" + id,
    room
  );
  return response.data;
};

export const deleteRoom = async (id: number): Promise<RoomDetailedModel> => {
  var response = await axios.delete(
    baseURL + "api/Rooms/" + id
  );
  return response.data;
};