import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {
  getDatabase,
  set,
  ref,
  onValue,
  child,
  update,
  get,
} from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

// Initialize the application
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const response = await signInWithPopup(auth, provider);
  return response;
};

export const createNewUser = async (
  _id,
  firstName,
  lastName,
  picture,
  email
) => {
  const response = await set(ref(database, `users/${_id}`), {
    _id,
    email,
    firstName,
    lastName,
    picture,
  });
  return response;
};

export const getMail = () => {
  try {
    const starCountRef = ref(database, 'users/Kxz20ZXjWtT4YUQJWiGS9RpHho83');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateAviewUsage = async (aviewUsage, _id) => {
  try {
    get(child(ref(database), `users/${_id}`)).then(async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const postData = {
          ...data,
          aviewUsage,
        };
        const updates = {
          [`users/${_id}`]: postData,
        };
        const res = await update(ref(database), updates);
        console.log(res);
      } else {
        console.log('No data available');
      }
    });
  } catch (error) {
    return error;
  }
};

export const updateRequiredServices = async (services, _id) => {
  try {
    get(child(ref(database), `users/${_id}`)).then(async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const postData = {
          ...data,
          services,
        };
        const updates = {
          [`users/${_id}`]: postData,
        };
        const res = await update(ref(database), updates);
        console.log(res);
      } else {
        console.log('No data available');
      }
    });
  } catch (error) {
    return error;
  }
};

export const updateUserBio = async (payload, _id) => {
  try {
    get(child(ref(database), `users/${_id}`)).then(async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const postData = {
          ...data,
          monthlyView: payload.monthlyView,
          languagesRequired: payload.languages,
          averageDuration: payload.averageVideoDuration,
        };
        const updates = {
          [`users/${_id}`]: postData,
        };
        const res = await update(ref(database), updates);
        console.log(res);
      } else {
        console.log('No data available');
      }
    });
  } catch (error) {
    return error;
  }
};

export const getInstagramUserToken = async (req) => {
  try {
    const res = await axios({
      method: 'POst',
    })
  } catch (error) {
    console.log(error);
  }
};
