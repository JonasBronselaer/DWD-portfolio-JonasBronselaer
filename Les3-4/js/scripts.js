	// your code here...

		'use strict'
		let btnNormal = document.querySelector('#btnNormal')
		let btnGray = document.querySelector('#btnGray');
		let btnSepia = document.querySelector('#btnSepia');
		let btnHue = document.querySelector('#btnHue');
		let btnBlur = document.querySelector('#btnBlur')
		let pepebus = document.querySelector('#imgB');
		let reset = function(){
			pepebus.classList.remove('normal');
			pepebus.classList.remove('gray');
			pepebus.classList.remove('sepia');
			pepebus.classList.remove('hue');
			pepebus.classList.remove('blur');
		}
		btnNormal.addEventListener('click', function() {
			console.log('ok');
			reset();
			pepebus.classList.add('normal');
		});
		btnGray.addEventListener('click', function() {
			console.log('ok');
			reset();
			pepebus.classList.add('gray');
		});
		btnSepia.addEventListener('click', function() {
			console.log('ok');
			reset();
			pepebus.classList.add('sepia');
		});
		btnHue.addEventListener('click', function() {
			console.log('ok');
			reset();
			pepebus.classList.add('hue');
		});
		btnBlur.addEventListener('click', function() {
			console.log('ok');
			reset();
			pepebus.classList.add('blur');
		});