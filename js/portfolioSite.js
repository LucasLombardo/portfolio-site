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

//handle form submission
$('#contact-form').submit(function(evt) {
	evt.preventDefault(); //prevents the default action
	var data = $(this)
		.closest('form')
		.serialize();
	$.ajax({
		url: 'https://getsimpleform.com/messages?form_api_token=774c63f8bb6c2ffb17296de7f6d4dfdb',
		type: 'post',
		data: data,
		success: function() {
			console.log('Message successfully submitted.');
			document.querySelector('#contact-form').reset();
			$('#submit-success').fadeIn();
		}
	});
});

//hide success message on load and fade out when user clicks the x box
$('#submit-success').hide();
$('#success-close').click(function hideMsg() {
	$('#submit-success').fadeOut();
});

//particles.js
particlesJS('particles-js', {
	particles: {
		number: { value: 80, density: { enable: true, value_area: 800 } },
		color: { value: '#2e9cca' },
		shape: {
			type: 'circle',
			stroke: { width: 1, color: '#2e9cca' },
			polygon: { nb_sides: 5 },
			image: { src: 'img/github.svg', width: 100, height: 100 }
		},
		opacity: {
			value: 0.49716301422833176,
			random: false,
			anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
		},
		size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
		line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
		move: {
			enable: true,
			speed: 6,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 }
		}
	},
	interactivity: {
		detect_on: 'window',
		events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
});
