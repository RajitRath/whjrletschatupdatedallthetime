
var firebaseConfig = {
      apiKey: "AIzaSyDURdcwYyMl2swiZFSlmUSLI-HzNKYVcuc",
      authDomain: "kwitter-c6661.firebaseapp.com",
      projectId: "kwitter-c6661",
      storageBucket: "kwitter-c6661.appspot.com",
      messagingSenderId: "297092828209",
      appId: "1:297092828209:web:45a12afa5384448c7cd910"
    };

    
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
