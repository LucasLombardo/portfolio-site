var navHeight = 48;

//add fadein animation after page loaded to prevent flash on page load
window.onload = setTimeout(function addLoadedClass() {
	document.querySelector('button').classList.add('loaded');
}, 20);

//sticky nav scroll logic
window.onscroll = function() {
	stickNav();
};

function stickNav() {
	var navbar = document.querySelector('.navbar');
	if (window.pageYOffset >= window.innerHeight) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}

//Smooth scroll  to anchor links
var targetOffset,
	currentPosition,
	body = document.body,
	buttons = document.querySelectorAll('.anchor-btn'),
	animateTime = 900;

for (let i = 0; i < buttons.length; i++) {
	let button = buttons[i];

	button.addEventListener(
		'click',
		function(event) {
			targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;
			console.log(targetOffset);
			if (targetOffset === window.innerHeight - navHeight) {
				targetOffset += navHeight;
			}
			console.log(targetOffset);
			currentPosition = getPageScroll();
			body.classList.add('in-transition');
			body.style.WebkitTransform = 'translate(0, -' + (targetOffset - currentPosition) + 'px)';
			body.style.MozTransform = 'translate(0, -' + (targetOffset - currentPosition) + 'px)';
			body.style.transform = 'translate(0, -' + (targetOffset - currentPosition) + 'px)';

			window.setTimeout(function() {
				body.classList.remove('in-transition');
				body.style.cssText = '';
				window.scrollTo(0, targetOffset);
			}, animateTime);

			event.preventDefault();
		},
		false
	);
}

function getPageScroll() {
	var yScroll;
	if (window.pageYOffset) {
		yScroll = window.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		yScroll = document.documentElement.scrollTop;
	} else if (document.body) {
		yScroll = document.body.scrollTop;
	}
	return yScroll;
}
