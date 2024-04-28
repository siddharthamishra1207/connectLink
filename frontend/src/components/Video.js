import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Video = () => {
  const [roomID, setRoom] = useState("");
  const navigate = useNavigate();

  const joinRoom = () => {
    navigate(`/room/${roomID}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full px-4">
        <div className="mb-4">
          <label
            htmlFor="room"
            className="block text-xs font-medium uppercase text-gray-700"
          >
            Enter the Room Id :
          </label>
          <input
            className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="room"
            type="text"
            value={roomID}
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
        </div>

        <button
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={joinRoom}
        >
          Join A Room
        </button>
      </div>
    </div>
  );
};

export default Video;
