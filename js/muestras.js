$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

		var res = tab_id.split("-");
		//console.log("#"+tab_id+' #slides'+res[1]+' .slidesjs-container');
		$("#"+tab_id+' #slides'+res[1]+' .slidesjs-container').css("width", "836");
		$("#"+tab_id+' #slides'+res[1]+' .slidesjs-container').css("height", "469.583");

	})

})
