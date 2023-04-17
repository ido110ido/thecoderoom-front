import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IRoom } from "../../types/interface/IRoom";

export interface IRoomsState {
  rooms: IRoom | null;
  allRooms: IRoom[];
}

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    allRooms: [],
    rooms: null,
  } as IRoomsState,
  reducers: {
    addRoomsData: (state, action) => {
      state.allRooms = action.payload;
    },
    getSingleRoom: (state, action) => {
      const theRoom = state.allRooms.find(
        (room) => room._id === action.payload
      );
      if (theRoom) state.rooms = theRoom;
    },
  },
});
export const { getSingleRoom, addRoomsData } = roomsSlice.actions;

export default roomsSlice.reducer;
