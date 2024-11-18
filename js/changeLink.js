//play with jQuery
$('body').hide().fadeIn(3000);

//hide all images, hide all the links
$('img').hide();
$('a').hide();

//test event
$('h1').click(hidesection);
function hidesection(){
    $(this).text("Hiding.....");
    $('body').childern('p').slideToggle();
}

