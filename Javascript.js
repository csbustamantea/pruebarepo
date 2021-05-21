


$('div').mouseover(function () {


    $(this).css('background', 'white').css('color', 'blueviolet').css('zoom','1.1');


});




$('div').mouseout(function () {


    $(this).css('background', 'blueviolet').css('color', 'black').css('zoom','0');


});

$('.evento1').click(function () {


    $(this).css('background', 'white')


})

$('.evento2').dblclick(function () {

    $(this).css('background', 'blueviolet')


})

$('.evento3').mouseover(function () {

    $(this).css('zoom', '2')


})
$('.evento4').mouseout(function () {

    $(this).css('zoom', '0')


})