import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IRoom } from "../../types/interface/IRoom";

export interface IRoomsState {
  rooms: IRoom | null;
  allRooms: IRoom[];
}

const roomsData = await axios.get("http://localhost:8000" + "/rooms");

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    allRooms: roomsData.data.data,
    rooms: null,
  } as IRoomsState,
  reducers: {
    getSingleRoom: (state, action) => {
      const theRoom = state.allRooms.find(
        (room) => room._id === action.payload
      );
      if (theRoom) state.rooms = theRoom;
    },
  },
});
export const { getSingleRoom } = roomsSlice.actions;

export default roomsSlice.reducer;
