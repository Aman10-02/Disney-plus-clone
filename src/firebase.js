
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBWELzSSCHax4NFrLOAx4QnOcEG1Fe0R4c",
  authDomain: "disneyplus-clone-a33d5-76239.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5-76239",
  storageBucket: "disneyplus-clone-a33d5-76239.appspot.com",
  messagingSenderId: "861607143806",
  appId: "1:861607143806:web:678d0ea0103c9ba4416b2f",
  measurementId: "G-2Q856E6128"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
