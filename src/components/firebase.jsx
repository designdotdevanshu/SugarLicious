import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKeiwTN9IQ4zoBG0E1EwhJZgKLraPz8Kw",
  authDomain: "perky-beans.firebaseapp.com",
  projectId: "perky-beans",
  storageBucket: "perky-beans.appspot.com",
  messagingSenderId: "1009457199620",
  appId: "1:1009457199620:web:1cfc99086271518fcad351",
  measurementId: "G-KY2V3ZVKQV",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getDatabase(app);

export {db, storage};
