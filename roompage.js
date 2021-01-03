//Firebase Links
var firebaseConfig = {
    apiKey: "AIzaSyCeBBBdlQFzKcC7hX-IIih_mDITKlzsUvw",
    authDomain: "parlons-database.firebaseapp.com",
    databaseURL: "https://parlons-database-default-rtdb.firebaseio.com",
    projectId: "parlons-database",
    storageBucket: "parlons-database.appspot.com",
    messagingSenderId: "1093542039452",
    appId: "1:1093542039452:web:be08f8dab14a7f4c9f8259"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
//---------------------------------------------
var username = localStorage.getItem("Username")
var roomname = localStorage.getItem("Room Name")
document.getElementById("displayRoomName").innerHTML = "You are in Room Name / Number: " + roomname

function sendMsg(){
    var msg = document.getElementById("msg").value
    firebase.database().ref(roomname).push({
          Name:username,
          Roomname:roomname,
          message:msg,
          likes:0
    })
    document.getElementById("msg").value = ""
    }
    function logout(){
    localStorage.removeItem("Room Name")
    localStorage.removeItem("Username")
    window.location = "login.html"
}