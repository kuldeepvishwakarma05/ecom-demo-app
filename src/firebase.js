import firebase from '/firebase'

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyAOvdPHz85VYL26UX9Melh0re4IPFjpd_o",
  authDomain: "ecommerce-44ef0.firebaseapp.com",
  projectId: "ecommerce-44ef0",
  storageBucket: "ecommerce-44ef0.appspot.com",
  messagingSenderId: "1008560741354",
  appId: "1:1008560741354:web:24ba426c0568b6a85e7093",
  measurementId: "G-MP6V1XWRMS",
});


const auth = firebase.auth();

export {auth};