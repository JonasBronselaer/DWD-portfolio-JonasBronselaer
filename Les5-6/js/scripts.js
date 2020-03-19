(function() {
	'use strict';

	window.addEventListener('load', function() {
		let loginmodal = document.querySelector('#loginmodal');
		let btnLogin = document.querySelector('#btnLogin');
		let btnCancel = document.querySelector('#btnCancel');
		btnLogin.addEventListener('click', function(e) {
			e.preventDefault();
			loginmodal.classList.add('show');
		});
		btnCancel.addEventListener('click', function(e) {
			e.preventDefault();
			loginmodal.classList.remove('show');
		});
	});
})();