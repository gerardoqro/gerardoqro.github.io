function videoG() {
	let person = prompt("Please enter your name", "Harry Potter");
	if (person != null) {
	  document.getElementById("demo").innerHTML =
	  "Hello " + person + "! How are you today?";
	}
  }


function playVideo(miv) {
	var myVideo = document.getElementById(miv); 
 	myVideo.play(); 
} 

function pauseVideo(miv) { 
	var myVideo = document.getElementById(miv);
	myVideo.pause(); 
} 

$(function(){
	$(".thumbnails a").attr('rel', 'gallery').fancybox();

	$("#nav-list li, #scroll_up").click(function(e) {
		e.preventDefault();
		 $('html, body').animate({
				scrollTop: $($(this).children("a").attr("href")).offset().top
		 },1500);
	 });
 });