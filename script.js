const firebaseConfig = {
    apiKey: "AIzaSyCuIjd0N6Nc3vXiDo4EaD3Jc8wYVkHDeHw",
    authDomain: "contactform-accfb.firebaseapp.com",
    databaseURL: "https://contactform-accfb-default-rtdb.firebaseio.com",
    projectId: "contactform-accfb",
    storageBucket: "contactform-accfb.appspot.com",
    messagingSenderId: "342738326174",
    appId: "1:342738326174:web:da72f8d6f8e7a3cacfa18f"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);

// reference messages collection
var messagesRef = firebase.database().ref('messages');

// add event listener
document.getElementById('contactForm').addEventListener('submit' , submitForm);

function submitForm(e){
e.preventDefault();

// grab values
var name = getInputVal('name');
var email = getInputVal('email');

console.log(name);
console.log(email);
savemessage(name, email);
}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save message to firebase

function savemessage(name, email){
    var newMessageRef = messagesRef.push();
    newMessagesRef.set({
        name: name,
        email: email
    });
}