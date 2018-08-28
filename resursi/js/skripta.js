$(function(){
	
	var imp = impress();
	
	$('#strelicaLevo').click(function(e){
		imp.prev();
		e.preventDefault();
	});
	
	$('#strelicaDesno').click(function(e){
		imp.next();
		e.preventDefault();
	});

});
