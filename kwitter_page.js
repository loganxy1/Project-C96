//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCCKpTCbpT6ISZeH-0DGKZP0nsFeakRp34",
      authDomain: "project-c95-36e8e.firebaseapp.com",
      databaseURL: "https://project-c95-36e8e-default-rtdb.firebaseio.com",
      projectId: "project-c95-36e8e",
      storageBucket: "project-c95-36e8e.appspot.com",
      messagingSenderId: "118397132419",
      appId: "1:118397132419:web:bd0ab9c529e98d736245b6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("user_name");
    roomname = localStorage.getItem("roomname");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
                name: username,
                message: msg, 
                like: 0
          });
          document.getElementById("msg").innerHTML = ""; 
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
