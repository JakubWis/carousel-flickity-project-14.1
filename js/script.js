var elem = document.querySelector('.main-carousel');
var btnRestart = document.getElementById('restart');
var progressBar = document.querySelector('.progress-bar')
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



