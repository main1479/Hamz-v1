

   var mixer = mixitup('.container');

function opennav() {
    document.getElementById('mynav').style.width ="90%"
};
function closenav() {
    document.getElementById('mynav').style.width ="0%"
};

$('.js-sticky').waypoint(function (direction) {
    if (direction == 'down') {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky')
   }
});
