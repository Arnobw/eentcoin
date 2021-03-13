let counter = 0;

$('.btn').click(function(){
    counter++;
    alert( "Je hebt " + counter + " eentcoin gemijnerd" );
    $('.total').html("totaal aantal munten: " + counter);
});




