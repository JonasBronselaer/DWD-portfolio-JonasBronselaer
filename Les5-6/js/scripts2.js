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

		//SlideShow Buttons
		let lnkFirst = document.querySelector('#lnkFirst');
    	let lnkPrev = document.querySelector('#lnkPrev');
    	let lnkNext = document.querySelector('#lnkNext');
    	let lnkLast = document.querySelector('#lnkLast');
      	let imgBig = document.querySelector('#large__figure img');
      	let txtTitle = document.querySelector('#large__figure .large__title');
		let thumbs = document.querySelectorAll('.main__thumbs figure');
		let currThumb = 0;

		lnkFirst.addEventListener('click', function(e) {
			e.preventDefault();
			currThumb = 0;
			let thumb = thumbs[currThumb];
			imgBig.src = thumb.querySelector('a').href;
			txtTitle.innerHTML = thumb.querySelector('img').alt;
		});
		lnkPrev.addEventListener('click', function(e) {
			e.preventDefault();
			if (currThumb > 0) currThumb--;
			let thumb = thumbs[currThumb];
			imgBig.src = thumb.querySelector('a').href;
			txtTitle.innerHTML = thumb.querySelector('img').alt;
		});
		lnkNext.addEventListener('click', function(e) {
			e.preventDefault();
			if (currThumb < thumbs.length - 1) currThumb++;
			let thumb = thumbs[currThumb];
			imgBig.src = thumb.querySelector('a').href;
			txtTitle.innerHTML = thumb.querySelector('img').alt;
		});
		lnkLast.addEventListener('click', function(e) {
			e.preventDefault();
			currThumb = thumbs.length - 1;
			let thumb = thumbs[currThumb];
			imgBig.src = thumb.querySelector('a').href;
			txtTitle.innerHTML = thumb.querySelector('img').alt;
		});

		//ThumbFilter
		let selAlbum = document.querySelector('#selAlbum');
		let btnSearch = document.querySelector('#btnSearch');
		selAlbum.addEventListener('change', function(){
			doFilter();
		})
		btnSearch.addEventListener('click', function(){
			doFilter();
		})

		let doFilter = function() {
			for (let thumb of thumbs){
				thumb.classList.remove('hide');
			}

			if (selAlbum != -1) {
				for (let thumb of thumbs) {
					let thumbAlbumId = thumb.getAttribute('data-albumid');
					if (thumbAlbumId != selAlbum.value) thumb.classList.add('hide')
				}
			}
		}
    });
})();
