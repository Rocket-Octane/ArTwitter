//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDMzZ-HUE8ryC0bAnkIx-K7r_x6sW_i1Fo",
    authDomain: "artwitter-8932d.firebaseapp.com",
    databaseURL: "https://artwitter-8932d-default-rtdb.firebaseio.com",
    projectId: "artwitter-8932d",
    storageBucket: "artwitter-8932d.appspot.com",
    messagingSenderId: "427011711318",
    appId: "1:427011711318:web:f6ba0d04ee82d6d91676f7"
  };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref("room_name").push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
