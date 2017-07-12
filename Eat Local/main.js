// surrounding function; always starts jQuery
(function(){
// my first event written in jQuery ($); kicks off all of my code
  $(document).ready(initialize);

    var config = {
      apiKey: "AIzaSyCIKtoTRP5CP8efUAt1zMTJyyrakDQ5Tg4",
      authDomain: "eat-local-7f942.firebaseapp.com",
      databaseURL: "https://eat-local-7f942.firebaseio.com",
      projectId: "eat-local-7f942",
      storageBucket: "eat-local-7f942.appspot.com",
      messagingSenderId: "138148680651"
    };

  function initialize(){
    firebase.initializeApp(config);
    $('select').material_select();
    $('#mealSelect').on('change', searchMealType);
  }

  function searchMealType(){
    var mealType = $('#mealSelect option:selected').text().toLowerCase();
    firebase.database().ref("Restaurant").once('value', function(snapshot){
      var restaurant = snapshot.val();
      for(var i in restaurant){
        var name = i;
        var meal_type = restaurant[i].meal_type;
        if(meal_type === mealType){
          $('#results').append("<h4>"+name+"</h4>");
        } else {
          console.log(name + " is a restaurant in your database, but it does not server the meal you are looking for.");
        }
      }
    });
  }
})();
