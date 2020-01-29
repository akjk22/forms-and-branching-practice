$(document).ready(function() {
    $("#celebrity").submit(function() {
      var age = parseInt($("#age").val());
      var hobby = $("#hobby").val();
      var movie = $("input:radio[name=movie1]:checked").val();
      console.log(age);
      console.log(hobby);
      console.log(movie);

      if (age > 35 && hobby === "cooking" && movie === "Chef") {
        alert('this is working');

        $("#rachel").show();

      } 
      else if (age < 35 && hobby === "music" && movie === "Bohemian Rapsody") {
        $("#bieber").show();
      }  
      else {
        $("#jordan").show();
      } 

      event.preventDefault();
    });
  });