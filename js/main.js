let counter = 0;
let waarde = Math.floor(Math.random()* 11);

$('.mijn').click(function(){
    counter++;
    alert( "Je hebt " + counter + " eentcoin gemijnerd" );
    $('.total').html("totaal aantal munten: " + counter);
    $('.portfolio').html("Portfolio: €" + counter * waarde);
});

$('.waarde').html("1 eentcoin = € " + waarde);


$('.doneer').click(function(){
    counter = 0;
    alert("Je hebt alles weggegeven, nu is er wereldvrede!");
    $('.total').html("totaal aantal munten: " + counter);
    $('.portfolio').html("Portfolio: €" + counter * waarde);
});


