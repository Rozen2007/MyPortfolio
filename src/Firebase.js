import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC6IJBY3a-9JQWklHC1OFZhEUleOGfk9NI",
  authDomain: "rozen-portfolio.firebaseapp.com",
  projectId: "rozen-portfolio",
  storageBucket: "rozen-portfolio.appspot.com",
  messagingSenderId: "255877274784",
  appId: "1:255877274784:web:911bef282c7108825c7dc5",
  measurementId: "G-JNLM47FYE0"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;