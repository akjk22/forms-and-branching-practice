$(document).ready(function() {
    $("#celebrity").submit(function(event) {
      var age = parseInt($("#age").val());
      var hobby = $("#hobby").val();
      var movie = $("#movie").val();
      alert('this is working');

      if (age > 35 && hobby === 'Cooking' && movie === 'Chef') {
        alert('this is working');
      }   
    
      // $("#rachel").show();

      // } else { age > 40 && value === 'sports' && value === 'Space Jam') {
      //   alert('this is working');
      // }  

      // } $("#jordan").show();

      // else if (age < 30 && value === 'music' && value === 'Bohemian Rapsody') {
      //   alert('this is working');
      // } 
      
      // $("#bieber").show();

      event.preventDefault();
    });
  });