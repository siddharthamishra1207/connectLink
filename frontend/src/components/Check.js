
import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";


const Check = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [room, setRoom] = useState("");

    
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


  return (
    <div><div>
      {userDetails ? (
        <>
          <h3>Welcome {userDetails.fullName} 🙏🙏</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>Gender: {userDetails.gender}</p>
            
          </div>
         
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
        
      
    </div>
  )
}

export default Check
