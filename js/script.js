	$('.collapsable div').hide();

	//Toggles a slide on any h2 tags inside the sidebar.
	$('.collapsable h2').click(function() {
		$(this).next().slideToggle();
	});


	$('#js-samples').click(function() {
		$('.samples').css('z-index', '2');
	
	$('#js-sheets').click(function() {
		$('.sheets').css('z-index', '2');

	$('#js-home').click(function() {
		$('.home').css('z-index', '1');
		$('.samples').css('z-index', '1');
	});


	/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });




 /*Scroll to top when arrow up clicked END*/