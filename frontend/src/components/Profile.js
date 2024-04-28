import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import NewPage from "./NewPage";

function Profile() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  if (userDetails) {
  }

  return (
    <div>
      {userDetails ? (
        <>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img
                className="lg:w-1/4 md:w-1/3 w-2/3 mb-10 object-cover object-center rounded-full"
                alt="hero"
                src={`https://avatar.iran.liara.run/public/${userDetails.gender}?username=${userDetails.fullName}`} // Update profile picture source
              />
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {userDetails.fullName} {/* Display username */}
                </h1>
                <div className="flex flex-row items-center justify-center">
                  <h4 className="leading-relaxed font-semibold">Email : </h4>
                  <h4 className="leading-relaxed">
                    {userDetails.email} {/* Display email */}
                  </h4>
                </div>

                <div className="my-5 flex justify-center">

                    <Link to="/video "> 
                  <button className="mx-3 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Video Call
                  </button>
                  </Link>

                    <Link to="/newPage">  
                  <button className=" mx-3 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Message 
                  </button>
                  </Link>
                </div>
                <button onClick={handleLogout} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Log out
                  </button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;
