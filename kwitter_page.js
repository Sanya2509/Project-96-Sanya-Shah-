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
  room_name = localStorage.getItem("room_name");



function getData() {
     firebase.database().ref("/"+room_name).on('value', function(snapshot) 
     { document.getElementById("output").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot)
      { childKey  = childSnapshot.key; childData = childSnapshot.val();
           if(childKey != "purpose") 
           {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
  
    document.getElementById("msg").value = "";
  
   }


   function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
  
  
