import firebase from 'firebase';
import fetch from 'isomorphic-fetch';
const db = () => firebase.database();

const API_URL = 'https://www.googleapis.com/blogger/v3/blogs/4789269094064278868/posts?key=';


const initializeBlog = async ({ BLOGGER_API_KEY = '' }) => {
  const res = await fetch(`${API_URL}${BLOGGER_API_KEY}`);
  const json = await res.json();
  return json.items;
};


export default {
  initializeBlog
};
