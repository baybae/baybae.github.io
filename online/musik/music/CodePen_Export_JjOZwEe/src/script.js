// In order for Pins to display properly, you will need the Masonry plugin by David DeSandro. 

/*
https://codepen.io/stevenventimiglia/pen/GEEoPe
https://widgets.pinterest.com/v3/pidgets/users/victorsalme/pins/
https://api.pinterest.com/v3/pidgets/boards/victorsalme/stairs/pins/
*/

// Your Pinterest username
var pinUser = 'victorsalme';

// Number of Pins you wish to display
var numPins = '20';

// ----------------------------------

var $pinProfile = $('.pin-user-profile');
var $pinFeed = $('.pinterest-feed');
var $pinLink = $('.pinterest-link');

$.ajax({
dataType: 'jsonp',
type: 'GET',
url: 'https://api.pinterest.com/v3/pidgets/boards/steven_ventimiglia/guinea-pigs/pins/?access_token=AQnH60vIsJtYcssWyfWyCVBVudGQFO8NbCXJxehEaEqbdgArzAAAAAA&fields=id%2Clink%2Cnote%2Curl'}).done(function(response) {
  
var pins = response.data.pins;
var html = '';
for (var i = 0; i < numPins; i++) {
var imageUrl = pins[i].images['237x'].url;
var pinUrl = pins[i].id;
    
html += '<div class="pinterest-feed-pin"><a href="#" </a><img src="'+ imageUrl +'" alt="Pin Feed"></div>';
}   

  
$pinFeed.html(html);
}).fail(function() {
console.log('Uh oh');
});

$(window).load(function () {
                setTimeout(function() {
        $('.pinterest-feed').masonry({
            itemSelector: '.pinterest-feed-pin',
          percentPosition: true
        });
                  
(function($) {$('.pin-user-profile-image').find('img').each(function(b,a){a=$(a);a.attr({src:a.attr('src').replace(/30x30/,'60x60')});a.attr('width',60);a.attr('height',60)});}(jQuery));                  
                    }, 1000); 
 });