//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyAHfK5XDCPStXbjavaat3uYeZ3tlYHE_EI",
  authDomain: "kwitter-86dab.firebaseapp.com",
  projectId: "kwitter-86dab",
  storageBucket: "kwitter-86dab.appspot.com",
  messagingSenderId: "421522730509",
  appId: "1:421522730509:web:ddca93aab20005a8d76f44"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code

      //End code
    });
  });
}
getData();