//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDyXSMfim-fhcFurYalLRu8A4AD41dyaII",
      authDomain: "let-s-chat-app-6c171.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-6c171-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-6c171",
      storageBucket: "let-s-chat-app-6c171.appspot.com",
      messagingSenderId: "602516287670",
      appId: "1:602516287670:web:42e0a6b1e9703c67577617"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code   
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location ="index.htm";
}
