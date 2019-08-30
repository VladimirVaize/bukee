$(document).ready(function(){
  $('.block-carousel').slick({
  	dots: true,
  	arrows: false,
  });
});
$("#nextContents").click(function() {
	$("#nextContentsList").fadeIn();
	$("#nextContents").hide();
});