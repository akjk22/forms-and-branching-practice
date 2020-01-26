$(document).ready(function(){
    
    $("#q5").keyup(function(){
        let valid = $("#q5").val().replace(/\D/g,'');
        $("#q5").val(valid);
    })

});