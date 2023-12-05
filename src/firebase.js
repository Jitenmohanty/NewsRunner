import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpTww96u6gAuqDDkNawdg13Apz06PS8yg",
  authDomain: "news-runner-441e7.firebaseapp.com",
  projectId: "news-runner-441e7",
  storageBucket: "news-runner-441e7.appspot.com",
  messagingSenderId: "227540906385",
  appId: "1:227540906385:web:d9d968b8153f57f1f1aa30",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firesto();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getFirestore(app);

export { auth, provider, storage };
// export default db;
