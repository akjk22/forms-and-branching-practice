$(document).ready(function(){
    $('#animal').submit(function(){ 
        
        let value = $('#options').val();
        
      if (value === 'turtles') {
          $('#turtles').show();
      }
      else if (value === 'snakes') {
          $('#snakes').show();
      }
      else if (value === 'insects') {
          $('#insects').show();
      }

        event.preventDefault();
    }); 


     

});