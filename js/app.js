// Problem: User when clicking on image goes to dead end
// Solution: Create an overlay with the large image

var $overlay = $('<div id="overlay"></div>');
var $closeButton = $('<p class="close"><a href="#">Close X</a></p>');
var $image = $("<img>");
var $caption = $("<p></p>");
$overlay.append($closeButton);
	// 2.1 An image
$overlay.append($image);
	// 2.1 A caption
$overlay.append($caption);
// 2. Add an overlay
$("body").append($overlay);

	

// 1. Capture the click event on a link to an image
$("#gallery a").click(function(event){
	event.preventDefault()
	var imageLocation = $(this).attr("href");
		
	// 1.2 Update overlay with the image linked in the link
	$image.attr("src", imageLocation);
	// 1.1 Show the overlay.
	$overlay.fadeIn(500);
	// 1.3 Get child's alt attribute and set capition
	var captionText = $(this).text();
	$caption.text(captionText);
	
});


// 3. When overlay is clicked
$overlay.click(function(){
	// 3.1 Hide the overlay
	$overlay.fadeOut(500);
});

