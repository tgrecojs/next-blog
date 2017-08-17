import firebase from 'firebase';

const db = () => firebase.database();

const initializeDB = ({
  FIREBASE_API_KEY = '',
  FIREBASE_AUTH_DOMAIN = '',
  FIREBASE_DATABASE_URL = '',
  FIREBASE_PROJECT_ID = '',
  FIREBASE_STORAGE_BUCKET = '',
  FIREBASE_MESSAGING_SENDER_ID = ''
} = {}) => {
  try {
    firebase.initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
    });
  } catch (err) {
    // we skip the 'already exists' message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }
};

const submitPost = ({name, email, companyName, additionalInfo} = {}) => {
  return db.ref('/entries' + email).set({
    email, name, companyName, additionalInfo
  });
};


export default {
  initializeDB,
  submitPost
};
