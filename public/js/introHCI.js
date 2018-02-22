'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$(".likeBtn").click(function(event){
		ga('create','UA-93709601-2','auto');
		ga('send','event','like','click');
	});
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}