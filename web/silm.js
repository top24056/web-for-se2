var heighttable;


$( document ).ready(function(){
	$('#a').slimscroll({
        height : 'auto',
		width : 'auto',
		axis : 'x',
		positionX : 'bottom',
		alwaysVisible: true,
		distance : '25px',		 
	})
})
$(window).resize(function(){
	    $('#a').slimscroll({
            height : 'auto',
			width : 'auto',
			axis : 'x',
			positionX : 'bottom',
			alwaysVisible: true,
			distance : '25px',
		});
})