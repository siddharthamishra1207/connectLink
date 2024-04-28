
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTzbgewh_JY0n2fWxJhjPsCvRoy5HkXv0",
    authDomain: "webcom-44844.firebaseapp.com",
    projectId: "webcom-44844",
    storageBucket: "webcom-44844.appspot.com",
    messagingSenderId: "946774149204",
    appId: "1:946774149204:web:f46c720cd84246e6f405c1"
  };
  


const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);
export default app;