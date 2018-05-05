window.onload = function addTransitions() {
	setTimeout(function() {
		document.querySelector('button').classList.add('loaded');
	}, 100);
};

//Scroll Logic - NEEDS IMPROVEMENTS

window.onscroll = function() {
	myFunction();
};

var navbar = document.querySelector('.navbar');
var about = document.querySelector('#about');

function myFunction() {
	if (window.pageYOffset >= window.innerHeight) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}
