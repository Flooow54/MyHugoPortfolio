"use strict";

// don't work so don't use until fixed
(function ($) {
  jQuery(document).ready(function () {
    
    $("#navbar2 .nav-item .nav-link").click(function() {
        debugger
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

  });
})(jQuery);

/*
var getSiblings = function (elem) {

	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}

	return siblings;

};
var elem = document.querySelector('#navbar2');
elem.onclick = function(){
    elem.classList.add('active');
    var siblings = getSiblings(elem);
    sibling.classList.removeClass('active');

};
*/
