
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Profile from "./components/Profile";
import SignUpPage from "./components/SignUpPage";
import Login from "./components/Login";
import Hero from "./components/Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Check from "./components/Check";
import NewPage from "./components/NewPage";
import useAuth from "./hooks/useAuth";
import Message from "./components/Message";
import Th from "./components/Th";
import Video from "./components/Video";
import Room from "./components/Room";

function App() {
  const { user } = useAuth();

  return (
    <div> 
    <Router>
      {user ? (
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/check" element={<Check />} />
          <Route path="/newPage" element={<NewPage />} />
          <Route path="/th" element={<Th />} />
          <Route path="/video" element={<Video />} />
          <Route path="/room/:roomID" element={<Room />} />

          <Route path='/messages' element={<Message/>} />

          {/* Redirect to profile if user exists */}
          
         
        </Routes>
      ) : (
        <Routes>
          
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
         
        </Routes>
      )}
    </Router>
    <ToastContainer/>
    </div>
  );
}
export default App;