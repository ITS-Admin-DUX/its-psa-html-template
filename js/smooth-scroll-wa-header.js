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
                 scrollTop: target.offset().top - 80
            }, 1000);
            return false;
        }
      }
	});
	
  // expander keyboard accessibility
  $(document).on("keypress", "[role='button']",function(e){
	if(e.which==13 || e.which==32)
			$(this).click();
	if(e.which==32)
			e.preventDefault();
	});
  
});