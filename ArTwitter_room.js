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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  console.log(room_name);
  localStorage.setItem("room_name", room_name);
  window.location = "ArTwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room names: " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "ArTwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}