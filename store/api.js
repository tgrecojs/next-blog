import firebase from 'firebase';
import fetch from 'isomorphic-fetch';
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


const submitPost = ({name = 'Anonomyous', email = 'Anonomyous@hotmail.com', 
reason = 'BECAUSE',
companyName = 'Anonomyous Co.', 
additionalInfo = '',
date = new Date().getTime() } = {}) => {
  db().ref(`/entries/${date}`).set({
    name, email, reason, companyName, additionalInfo
  });
};

const initializeBlog = async ({ BLOGGER_API_KEY = '' }) => {
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/4789269094064278868/posts?key=${BLOGGER_API_KEY}`);
  const json = await res.json();
  console.log(json);
  return json.items;
};

export default {
  initializeDB,
  submitPost,
  initializeBlog
};
