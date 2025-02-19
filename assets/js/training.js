$(document).ready(function() {			
	
	$.ajaxSetup ({
		cache: false
	});
			
	// collapsible panes, links
	$.get('assets/csv/training.csv', function(data) {
		var arrTag = [], arrTagTot = [];
		$.each($.csv.toObjects(data), function(key,val) {
			//var tag = createTag(val.subheading);
			if ($.inArray(val.tag, arrTag) == -1) {
				arrTag.push(val.tag);
				arrTagTot.push(0);
				
				if (val.section == '1') {
					$('#section-1 h1').text(val.heading);
					$('#section-1 .accordion').append('<div class="panel panel-default"><div class="panel-heading collapsed" data-toggle="collapse" data-target="#'+val.tag+'"><h2 id="'+val.tag+'-heading" class="panel-title"><a href="#'+val.tag+'" data-toggle="collapse">'+val.subheading+'</a></h2></div><div id="'+val.tag+'" class="panel-collapse collapse list-group"><div id="'+val.tag+'-list" class="panel-body padding-0"></div></div></div>');
				} else if (val.section == '2') {
					$('#section-2 h1').text(val.heading);
					$('#section-2 .accordion').append('<div class="panel panel-default"><div class="panel-heading collapsed" data-toggle="collapse" data-target="#'+val.tag+'"><h2 id="'+val.tag+'-heading" class="panel-title"><a href="#'+val.tag+'" data-toggle="collapse">'+val.subheading+'</a></h2></div><div id="'+val.tag+'" class="panel-collapse collapse list-group"><div id="'+val.tag+'-list" class="panel-body padding-0"></div></div></div>');
				} else if (val.section == '3') {
					$('#section-3 h1').text(val.heading);
					$('#section-3 .accordion').append('<div class="panel panel-default"><div class="panel-heading collapsed" data-toggle="collapse" data-target="#'+val.tag+'"><h2 id="'+val.tag+'-heading" class="panel-title"><a href="#'+val.tag+'" data-toggle="collapse">'+val.subheading+'</a></h2></div><div id="'+val.tag+'" class="panel-collapse collapse list-group"><div id="'+val.tag+'-list" class="panel-body padding-0"></div></div></div>');
				}
			}
		});						
		//		
		$.each($.csv.toObjects(data), function(key,val) {
			for (var i=0; i<arrTag.length; i++) {
				//var tag = createTag(val.subheading);
				if (val.tag == arrTag[i]) {
					arrTagTot[i] = arrTagTot[i]+1;
					createLink(arrTag[i]);
				}
					
				function createLink(forTag) {
				$('#'+forTag+'-list').append('<a href="../../../training/assets/js/assets/docs/'+val.tag+'/#'+val.page+'" target="_blank" class="list-group-item">'+val.doc+'</a>');
				}
			}
		});
		//
		for (var x=0; x<arrTagTot.length; x++) {
			$('#'+arrTag[x]+'-heading').append('<small><span class="badge">'+arrTagTot[x]+'</span></small>');
		}
	}, 'text');

	//
	function createTag(withThis) {
		if (withThis.indexOf(' ') >= 0) {
			return withThis.replace(/\s+/g, '-').toLowerCase();
		} else if (withThis.indexOf('/') >= 0) {
			return withThis.replace(/\//g, '-').toLowerCase();
		}
	}
	
	$('#section-1 button').click(function() {
		if ($('i',this).hasClass('fa-angle-double-down')) {
			$('#section-1 .panel-collapse').collapse('show');
			$('i',this).removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
		} else if ($('i',this).hasClass('fa-angle-double-up')) {
			$('#section-1 .panel-collapse').collapse('hide');
			$('i',this).removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
		}
	});
	$('#section-2 button').click(function() {
		if ($('i',this).hasClass('fa-angle-double-down')) {
			$('#section-2 .panel-collapse').collapse('show');
			$('i',this).removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
		} else if ($('i',this).hasClass('fa-angle-double-up')) {
			$('#section-2 .panel-collapse').collapse('hide');
			$('i',this).removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
		}
	});
	$('#section-3 button').click(function() {
		if ($('i',this).hasClass('fa-angle-double-down')) {
			$('#section-3 .panel-collapse').collapse('show');
			$('i',this).removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
		} else if ($('i',this).hasClass('fa-angle-double-up')) {
			$('#section-3 .panel-collapse').collapse('hide');
			$('i',this).removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
		}
	});
	
});