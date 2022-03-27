function addUser(){
    user_name = document.getElementById("login_button").value;

    localStorage.setItem("user_name", user_name);

    window.location = "ArTwitter_room.html";
}