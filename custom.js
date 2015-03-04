$(document).ready(function(){
	var grid = document.querySelector('#grid');
	var msnry = new Masonry( grid, {
		itemSelector: '.item',
		gutter: 10,
		isFitWidth: true,
		isAnimated: false
	});

	var gallery = document.querySelector('#gallery');
		// layout Masonry again after all images have loaded
		imagesLoaded(gallery, function() {
		var msnry2 = new Masonry( gallery, {
			itemSelector: '.item',
			gutter: 10,
			isFitWidth: true,
			isAnimated: false
		});
	});

	$('.fancybox').fancybox({
        padding : 0,
        openEffect  : 'elastic'
    });

	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://www.youtube.com']"),

	    // The element that is fluid width
	    $fluidEl = $("body");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

	  $(this)
	    .data('aspectRatio', this.height / this.width)

	    // and remove the hard coded width/height
	    .removeAttr('height')
	    .removeAttr('width');

	});

	// When the window is resized
	$(window).resize(function() {

	  var newWidth = $fluidEl.width();

	  // Resize all videos according to their own aspect ratio
	  $allVideos.each(function() {

	    var $el = $(this);
	    $el
	      .width(newWidth)
	      .height(newWidth * $el.data('aspectRatio'));

	  });

	// Kick off one resize to fix all videos on page load
	}).resize();
});