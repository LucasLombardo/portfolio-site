//add fadein animation after page loaded to prevent flash on page load
window.onload = setTimeout(function addLoadedClass() {
	$('button').addClass('loaded');
}, 20);

window.onload = stickNav();

var navheight = 48;
//smooth scrolling
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

//set actives
$(window)
	.scroll(function() {
		var scrollDistance = $(window).scrollTop();
		//highlight active section
		$('.navsec').each(function(i) {
			if ($(this).position().top - navheight - 2 <= scrollDistance) {
				$('.nav-links a.active').removeClass('active');
				$('.nav-links a')
					.eq(i - 1)
					.addClass('active');
			}
		});
		//if at bottom of the page, highlight contact
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			$('.nav-links a.active').removeClass('active');
			$('.nav-links a:last-of-type').addClass('active');
		}
		//if above navbar, highlight none
		if (window.innerHeight > window.scrollY) {
			$('.nav-links a.active').removeClass('active');
		}
	})
	.scroll();

//sticky nav scroll logic
window.onscroll = function() {
	stickNav();
};

function stickNav() {
	var navbar = document.querySelector('.nav');
	if (window.pageYOffset >= window.innerHeight) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}

//make nav menu collapse on link click
function collapseNav() {
	$('#nav-check').prop('checked', false);
}

//contact form
// function SubForm(e) {
// 	e.preventDefault();
// 	var url = $(this)
// 			.closest('form')
// 			.attr('action'),
// 		data = $(this)
// 			.closest('form')
// 			.serialize();
// 	$.ajax({
// 		url: url,
// 		type: 'post',
// 		data: data,
// 		success: function() {
// 			//whatever you wanna do after the form is successfully submitted
// 		}
// 	});
// }

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
