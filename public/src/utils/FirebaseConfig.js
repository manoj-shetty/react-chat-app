import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4RkyOCQLAhn_COX-okqWtT-PtM7-zC5c",
    authDomain: "chat-app-1998d.firebaseapp.com",
    projectId: "chat-app-1998d",
    storageBucket: "chat-app-1998d.appspot.com",
    messagingSenderId: "208145276583",
    appId: "1:208145276583:web:08ee508c042c411761c582",
    measurementId: "G-Z0SR8L62LT"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);