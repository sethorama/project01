var $overlay = $('<div id="overlay"></div>');
var $closeButton = $('<p class="close"><a href="#">Close X</a></p>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($closeButton);	
$overlay.append($image);	
$overlay.append($caption);
$("body").append($overlay);


$("#gallery a").click(function(event){
	event.preventDefault()
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);
	$overlay.fadeIn(500);
	var captionText = $(this).text();
	$caption.text(captionText);
	
});



$overlay.click(function(){
	$overlay.fadeOut(500);
});

