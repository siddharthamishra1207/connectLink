
import "./Message.js";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import {useEffect } from "react";
import { useUserDetails } from "../hooks/useUserDetails";

const socket = io.connect("https://web-back-a09n.onrender.com");

function Message() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [gender, setGender] = useState("boy"); // Default gender is "boy"
  const [showChat, setShowChat] = useState(false);

  const userDetails = useUserDetails();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if userDetails is truthy and setLoading accordingly
    if (userDetails) {
      setLoading(false);
      
    }
  }, [userDetails]);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if(!loading){
    setUsername(userDetails.fullName);
    setGender(userDetails.gender);
  }

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
        
            <label> Enter the Room Id : </label>
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
            
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} gender={gender} />
      )}
    </div>
  );
}

export default Message;
