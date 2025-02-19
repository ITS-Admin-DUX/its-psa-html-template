$(document).ready(function() {
  
  $(".bs-sidebar").affix();
  
  $("body").scrollspy({
  	target: ".bs-sidebar",
	offset: 80
  });
  
  // xs view only: collapse menu when "nav-link" class link is selected
  $(".nav-link").click(function() {
	$(".navbar-collapse").removeClass("in");
  	$(".navbar-collapse").addClass("collapse");
  });
  
  // smooth scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top - 70
            }, 1000);
            return false;
        }
      }
	});
  
});
