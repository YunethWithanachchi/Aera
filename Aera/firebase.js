// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref,set,push,onDisconnect,serverTimestamp,update,onChildAdded} from "firebase/database";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9821q_YpfGHH9ZFPBXgVXQSyxbAfSGvk",
    authDomain: "aera-3f59e.firebaseapp.com",
    projectId: "aera-3f59e",
    storageBucket: "aera-3f59e.firebasestorage.app",
    messagingSenderId: "533520508445",
    appId: "1:533520508445:web:a0906e788e0d6e524888f4",
    measurementId: "G-J7K9HKBL6K",
    databaseURL: "https://aera-3f59e-default-rtdb.firebaseio.com"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const realTimeDatabase =getDatabase(app);
export const storage = getStorage(app);
export {ref,set,onDisconnect,serverTimestamp,push,update,onChildAdded}