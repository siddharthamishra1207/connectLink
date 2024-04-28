import { useState, useEffect } from "react";
import { auth, db } from "../components/firebase"; // Assuming firebase is initialized elsewhere
import { doc, getDoc } from "firebase/firestore";

export const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("User is not logged in");
          }
        }
      });
    };

    fetchUserData();
  }, []);

  return userDetails;
};