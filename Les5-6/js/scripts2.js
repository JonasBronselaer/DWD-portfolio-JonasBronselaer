(function() {
	'use strict';

	window.addEventListener('load', function() {
		//Aanklikken van thumbs
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

		//ThumbFilter voorlopig
		let selAlbum = document.querySelector('#selAlbum');
		let btnSearch = document.querySelector('#btnSearch');
		let btnReset = document.querySelector('#btnReset');
		let filters__years = document.querySelector('.filters__years')
		let cb1 = filters__years.querySelector('label:nth-of-type(1) input');
		let cb2 = filters__years.querySelector('label:nth-of-type(2) input');
		let cb3 = filters__years.querySelector('label:nth-of-type(3) input');
		cb1.addEventListener('click', function(){
		doFilter();
		})
		
		cb2.addEventListener('click', function(){
		doFilter();
		})
		
		cb3.addEventListener('click', function(){
		doFilter();
		})

		selAlbum.addEventListener('change', function(){
			doFilter();
		})
		btnSearch.addEventListener('click', function(e){
		e.preventDefault();
			doFilter();
		})
		btnReset.addEventListener('click', function(e){
		e.preventDefault();
		inpSearch.value = "";
		cb1.checked = false;
		cb2.checked = false;
		cb3.checked = false;
		selAlbum.value = -1;
		doFilter();
		})

			let doFilter = function() {
				for (let thumb of thumbs){
					thumb.classList.remove('hide');
				}

				if (cb1.checked == true){
				for (let thumb of thumbs) {
					let year = thumb.getAttribute('data-year');
					if (year != cb1.value) thumb.classList.add('hide')
				}        
				}
				
				if (cb2.checked == true){
				for (let thumb of thumbs) {
					let year = thumb.getAttribute('data-year');
					if (year != cb2.value) thumb.classList.add('hide')
				}        
				}    

				if (cb3.checked == true){
				for (let thumb of thumbs) {
					let year = thumb.getAttribute('data-year');
					if (year != cb3.value) thumb.classList.add('hide')
				}        
				}

				for(let thumb of thumbs){
				let inpSearch = document.querySelector('#inpSearch');
				let imageUrl= thumb.querySelector('img').alt;

				if(!imageUrl.includes(inpSearch.value.charAt(0).toUpperCase())){
					thumb.classList.add('hide');
				}
				}
				if (selAlbum.value != -1) {
				for (let thumb of thumbs) {
					let thumbAlbumId = thumb.getAttribute('data-albumid');
					if (thumbAlbumId != selAlbum.value) thumb.classList.add('hide')
				}
			}
		}
	});
})();
