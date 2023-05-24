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
  const app = initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
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
