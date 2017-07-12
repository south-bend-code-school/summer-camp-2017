// surrounding function; always starts jQuery
(function(){
// my first event written in jQuery ($); kicks off all of my code
  $(document).ready(initialize);

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6SK7HIse0wSqg33D91V1lxG6FopgAu94",
    authDomain: "water-tracker-ebaa0.firebaseapp.com",
    databaseURL: "https://water-tracker-ebaa0.firebaseio.com",
    projectId: "water-tracker-ebaa0",
    storageBucket: "water-tracker-ebaa0.appspot.com",
    messagingSenderId: "166287174583"
  };

  var email;

  function initialize(){
    firebase.initializeApp(config);
    $('#submitButton').on('click', saveData);
  }

  function saveData(){
    email = $('#email').val();
    console.log(email);
    location.assign("./info.html?id="+email);
  }

  function (){

  }

})();
