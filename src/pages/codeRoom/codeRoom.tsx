import React, { useRef, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { io, Socket } from "socket.io-client";
import { useParams } from "react-router-dom";
import { IRoom } from "../../types/interface/IRoom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  CodeEditorPage,
  CodeRoomTitle,
} from "../../styledComponent/codeEditorPage/codeEditorPage";

let socket: Socket | null = null;

const CodeRoom = (): JSX.Element => {
  const room: IRoom | null = useSelector(
    (state: RootState) => state.rooms.rooms
  );
  const roomId: string = room?._id || "";
  const editorRef = useRef<null | any>(null);
  const [code, setCode] = useState<string>(room?.description || "");
  const [isFirstUser, setIsFirstUser] = useState<boolean>(false);

  function handleEditorDidMount(editor: any, monaco: any): void {
    editorRef.current = editor;
  }

  useEffect(() => {
    if (socket) {
      // Emit a "disconnect" event before disconnecting the socket
      socket.emit("leave_room", roomId);
      socket.disconnect();
      socket = null;
    }

    // Connect the socket to the new room
    socket = io("https://thecoderoom-server.onrender.com");
    socket.emit("join_room", roomId);

    // Listen for updated code and read-only mode events
    socket.on("updated_code", (data: any) => {
      setCode(data.value);
    });
    socket.on("read_only_mode", () => {
      setIsFirstUser(true);
    });

    // Listen for the disconnect event and log it
    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  }, [roomId]);

  const handleChange = (value: any) => {
    socket?.emit("sent_message", { value, roomId });
  };

  return (
    <CodeEditorPage>
      <div>
        <CodeRoomTitle>{room?.title}</CodeRoomTitle>
      </div>
      <Editor
        height="100%"
        width="100vw"
        className="codeEditor"
        defaultLanguage="javascript"
        onMount={handleEditorDidMount}
        defaultValue={code}
        value={code}
        theme="vs-dark"
        onChange={handleChange}
        options={{ readOnly: isFirstUser }}
      />
    </CodeEditorPage>
  );
};

export default CodeRoom;
