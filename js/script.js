$(document).ready(function(){
  new WOW().init();
});
$(document).ready(function(){
  $('.carousel').carousel({
    interval:4000,
    speed:1000,

  });
});


// Burger Class animation
$(document).ready(function() {
	$('.navbar-toggler').click(function(event) {
		$('.burger__icon').toggleClass('activebrg');
    });
	$('.navbar-toggler').click(function(event) {
		$('.navbar-toggler').toggleClass('activebrg');
    });
});

// header fix


$(document).ready(function () {
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '1400');
  });
});
