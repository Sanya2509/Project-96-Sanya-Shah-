var firebaseConfig = {
  apiKey: "AIzaSyCR5EvzC1H_S7E_VUACZfNnGGef9QRqH50",
  authDomain: "project-96-8d521.firebaseapp.com",
  databaseURL: "https://project-96-8d521-default-rtdb.firebaseio.com",
  projectId: "project-96-8d521",
  storageBucket: "project-96-8d521.appspot.com",
  messagingSenderId: "959822619361",
  appId: "1:959822619361:web:6ae7feb4a5b1292dee0da0",
  measurementId: "G-NNZRMMQQMW"
};



firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
