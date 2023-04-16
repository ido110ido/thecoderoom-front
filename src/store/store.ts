import { configureStore } from "@reduxjs/toolkit";
import roomsReduce, { IRoomsState } from "./Slicers/rooms";
export interface RootState {
  rooms: IRoomsState;
}
export default configureStore({
  reducer: {
    rooms: roomsReduce,
  },
});
