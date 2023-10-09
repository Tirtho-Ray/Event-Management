
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC8XduYHC7yLeInb-970PzDHoCG-x2GJ9M",
  authDomain: "travel-place-73809.firebaseapp.com",
  projectId: "travel-place-73809",
  storageBucket: "travel-place-73809.appspot.com",
  messagingSenderId: "1037111308500",
  appId: "1:1037111308500:web:f84185bbadffe0a0424b41"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;