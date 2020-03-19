(function() {
	'use strict';

	window.addEventListener('load', function() {
		let mainThumbs = document.querySelectorAll('.main__thumbs figure');
        let largeFigure = document.querySelector('#large__figure');
        let photo = largeFigure.querySelector('img');
        let largeTitle = document.querySelector('.large__title');
        // attach click events to thumbnails
        for (let thumb of mainThumbs) {
	        let link = thumb.querySelector('a');
	        let img = thumb.querySelector('figure img');
	        link.addEventListener('click', function(e) {
		        // prevent default link action
		        e.preventDefault();
		        // show image
		        photo.src = link.href;
		        photo.alt = img.alt;
		        largeTitle.innerHTML = photo.alt;
		        // change active state
		        document.querySelector('.main__thumbs .active').classList.remove('active');
		        thumb.classList.add('active');
	    	});
	    }
    });
})();
