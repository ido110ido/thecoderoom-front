import styled from "styled-components";

export const BackGroundLobby = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #022e3c;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Logo = styled.img`
  margin-top: 10px;
  width: 50vw;
  max-width: 800px;
`;
export const RoomStack = styled.div`
  margin-top: 50px;
  display: grid;
  justify-content: center;
  height: 100%;
  overflow-y: scroll;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  border-radius: 15px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;
export const RoomBlock = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #034d63;
  width: 30vh;
  max-width: 350px;
  aspect-ratio: 1;
  border-radius: 15px;
  transition: 0.2s;
  &:hover {
    scale: 1.02;
  }
  @media (max-width: 1000px) {
    width: 35vw;
  }
`;
export const TypeEffectTitle = styled.h1`
  color: #fff;
  font-family: monospace;
  width: fit-content;
  overflow: hidden;
  border-right: 0.15em solid orange;
  margin: 0 auto;
  letter-spacing: 0.15em;
  display: inline-block;
  animation: typing 3.5s steps(30, end), blink-caret 1s step-end infinite;

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;
