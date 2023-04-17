import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LobbyPage from "./pages/lobbyPage/lobbyPge";
import CodeRoom from "./pages/codeRoom/codeRoom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LobbyPage />} />
          <Route path="/:id" element={<CodeRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
