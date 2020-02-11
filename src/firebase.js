import firebase from 'firebase';
import Vue from 'vue';
const VueFire = require('vuefire')
Vue.use(VueFire)
  
  // Your web app's Firebase configuration
  
  let firebaseConfig = {
    apiKey: "AIzaSyDg-iieQ33Kbv6KJEuVeJ82c-5dR9web2g",
    authDomain: "prueba12-6330d.firebaseapp.com",
    databaseURL: "https://prueba12-6330d.firebaseio.com",
    projectId: "prueba12-6330d",
    storageBucket: "prueba12-6330d.appspot.com",
    messagingSenderId: "429965647251",
    appId: "1:429965647251:web:9e49fb01368e57b9e65c66"
  };
  // Initialize Firebase\
  export default firebase.initializeApp(firebaseConfig);
  export let db = firebase.database();