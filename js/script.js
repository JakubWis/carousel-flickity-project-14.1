var elem = document.querySelector('.main-carousel');
var btnRestart = document.getElementById('restart');
var progressBar = document.querySelector('.progress-bar')
var templateCell = document.getElementById('template-cell').innerHTML;

(function(){ 
Mustache.parse(templateCell);
var cells = '';

for(var i = 0; i < allSlides.length; i++){
        cells += Mustache.render(templateCell, allSlides[i]);
    }

 results.insertAdjacentHTML('beforeend', cells);

})();

// Initialize and add the map
window.initMap = function() {
  // The location of Uluru
  var uluru = allSlides[0].coords
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  for (var i = 0; i < allSlides.length; i++) {
    var marker = new google.maps.Marker({position: allSlides[i].coords, map: map});
  }
  
} 

var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true
});

btnRestart.addEventListener('click', function(){
	flkty.select( 0 );
})

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});



