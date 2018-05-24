(window.onload = setTimeout(function() {
	$('button').addClass('loaded');
}, 20)),
	(window.onload = stickNav());
var navheight = 48;
function stickNav() {
	var e = document.querySelector('.nav');
	window.pageYOffset >= window.innerHeight ? e.classList.add('sticky') : e.classList.remove('sticky');
}
function collapseNav() {
	$('#nav-check').prop('checked', !1);
}
$(document).ready(function() {
	$('.anchor-btn').bind('click', function(e) {
		e.preventDefault();
		var t = $(this).attr('href'),
			n = $(t).offset().top;
		return (
			n == window.innerHeight - navheight && (n += navheight),
			$('html, body')
				.stop()
				.animate({ scrollTop: n }, 600),
			!1
		);
	});
}),
	$(window)
		.scroll(function() {
			var e = $(window).scrollTop();
			$('.navsec').each(function(t) {
				$(this).position().top - navheight - 2 <= e &&
					($('.nav-links a.active').removeClass('active'),
					$('.nav-links a')
						.eq(t - 1)
						.addClass('active'));
			}),
				window.innerHeight + window.scrollY >= document.body.offsetHeight &&
					($('.nav-links a.active').removeClass('active'), $('.nav-links a:last-of-type').addClass('active')),
				window.innerHeight > window.scrollY && $('.nav-links a.active').removeClass('active');
		})
		.scroll(),
	(window.onscroll = function() {
		stickNav();
	}),
	$('#contact-form').submit(function() {
		setTimeout(function() {
			console.log('Message successfully submitted.'),
				document.querySelector('#contact-form').reset(),
				$('#submit-success').fadeIn();
		}, 750);
	}),
	$('#submit-success').hide(),
	$('#success-close').click(function() {
		$('#submit-success').fadeOut();
	}),
	particlesJS('particles-js', {
		particles: {
			number: { value: 80, density: { enable: !0, value_area: 800 } },
			color: { value: '#2e9cca' },
			shape: {
				type: 'circle',
				stroke: { width: 1, color: '#2e9cca' },
				polygon: { nb_sides: 5 },
				image: { src: 'img/github.svg', width: 100, height: 100 }
			},
			opacity: {
				value: 0.49716301422833176,
				random: !1,
				anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 }
			},
			size: { value: 3, random: !0, anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 } },
			line_linked: { enable: !0, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
			move: {
				enable: !0,
				speed: 6,
				direction: 'none',
				random: !1,
				straight: !1,
				out_mode: 'out',
				bounce: !1,
				attract: { enable: !1, rotateX: 600, rotateY: 1200 }
			}
		},
		interactivity: {
			detect_on: 'window',
			events: { onhover: { enable: !0, mode: 'repulse' }, onclick: { enable: !0, mode: 'push' }, resize: !0 },
			modes: {
				grab: { distance: 400, line_linked: { opacity: 1 } },
				bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
				repulse: { distance: 200, duration: 0.4 },
				push: { particles_nb: 4 },
				remove: { particles_nb: 2 }
			}
		},
		retina_detect: !0
	});
