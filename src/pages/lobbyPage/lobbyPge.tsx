import React, { useState } from "react";
import {
  BackGroundLobby,
  Logo,
  RoomBlock,
  RoomStack,
  TypeEffectTitle,
} from "../../styledComponent/lobbyPageComp/loobyComponent";
import { useNavigate } from "react-router-dom";
import { IRoom } from "../../types/interface/IRoom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getSingleRoom } from "../../store/Slicers/rooms";
const LobbyPage = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigate();
  const rooms: IRoom[] = useSelector(
    (state: RootState) => state.rooms.allRooms
  );
  const handleRoomEntrench = (room: IRoom) => {
    dispatch(getSingleRoom(room._id));
    navigation(room.title);
  };
  return (
    <BackGroundLobby>
      <Logo src="img/logo.svg" alt="THECODEROOM" />
      <RoomStack>
        {rooms.map((room, index) => (
          <RoomBlock key={index} onClick={() => handleRoomEntrench(room)}>
            <TypeEffectTitle>{room.title}</TypeEffectTitle>
          </RoomBlock>
        ))}
      </RoomStack>
    </BackGroundLobby>
  );
};

export default LobbyPage;
