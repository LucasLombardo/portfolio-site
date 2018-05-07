//add fadein animation after page loaded to prevent flash on page load
window.onload = setTimeout(function addLoadedClass() {
	$('button').addClass('loaded');
}, 20);

//smooth scrolling with actives
//Elena Scherer
//https://codepen.io/eksch/pen/qdbaxy

var navheight = 48;

$(document).ready(function() {
	$('.anchor-btn').bind('click', function(e) {
		e.preventDefault(); // prevent hard jump, the default behavior

		var target = $(this).attr('href'); // Set the target as variable
		var targetScroll = $(target).offset().top;
		if (targetScroll == window.innerHeight - navheight) targetScroll += navheight;

		// perform animated scrolling by getting top-position of target-element and set it as scroll target
		$('html, body')
			.stop()
			.animate(
				{
					scrollTop: targetScroll
				},
				600
			);

		return false;
	});
});

$(window)
	.scroll(function() {
		var scrollDistance = $(window).scrollTop();
		//highlight active section
		$('.navsec').each(function(i) {
			if ($(this).position().top - navheight - 2 <= scrollDistance) {
				$('.navbar a.active').removeClass('active');
				$('.navbar a')
					.eq(i)
					.addClass('active');
			}
		});
		//if at bottom of the page, highlight contact
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			$('.navbar a.active').removeClass('active');
			$('.navbar a:last-of-type').addClass('active');
		}
	})
	.scroll();

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

//particleground
document.addEventListener(
	'DOMContentLoaded',
	function() {
		particleground(document.getElementById('particles'), {
			dotColor: '#2e9cca',
			lineColor: '#aaabb8'
		});
		var intro = document.getElementById('intro');
	},
	false
);
