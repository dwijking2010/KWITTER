var firebaseConfig = {
  apiKey: "AIzaSyDiIAn53vbKn1dHeeYxeK5TjDMFGfBwDxE",
  authDomain: "dkwitter-ba99e.firebaseapp.com",
  databaseURL: "https://dkwitter-ba99e-default-rtdb.firebaseio.com",
  projectId: "dkwitter-ba99e",
  storageBucket: "dkwitter-ba99e.appspot.com",
  messagingSenderId: "338097185498",
  appId: "1:338097185498:web:d7f1348875168f439bbbe3"
};
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";


function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr><br>";
      document.getElementById("output").innerHTML+=row;

      });
    });
  }
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";

}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
