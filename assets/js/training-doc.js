$(document).ready(function() {
	
	var filename = window.location.hash.substring(1)+'.html';
	
	$.get(filename, function(data) {
		$(data).filter('section').each(function() {
			$('#main').append(this);
			$('#main section').addClass('row');
		});
	});
	
	$('#main section').each(function() {
		$('<div class="col-md-8 col-md-offset-2">').prependTo('section');
		$('</div>').appendTo('section');
	});
	
});
