// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCb-e3c366zL9v4KbJEc6Mb0DPuMtVFBBI",
    authDomain: "project-96-5369b.firebaseapp.com",
    projectId: "project-96-5369b",
    storageBucket: "project-96-5369b.appspot.com",
    messagingSenderId: "977257773072",
    appId: "1:977257773072:web:bd3727277935791eb9b295"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
localStorage.setItem("Roomname", room_name);

window.location = "kwitter_page.html";


user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToroomname(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToroomname(name) {
    console.log(name);
    localStorage.setItem("Roomname", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}