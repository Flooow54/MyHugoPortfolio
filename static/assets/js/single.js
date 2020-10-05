"use strict";

var isMobile = false, isTablet = false, isLaptop = false;
(function ($) {
  jQuery(document).ready(function () {
    function detectDevice() {
      if (window.innerWidth <= 425) {
        isMobile = true;
        isTablet = false;
        isLaptop = false;
      } else if (window.innerWidth <= 768) {
        isMobile = false;
        isTablet = true;
        isLaptop = false;
      } else {
        isMobile = false;
        isTablet = false;
        isLaptop = true;
      }
    }
    detectDevice();

    // =========== Add anchor to the headers ================
    function addAnchor(element) {
      element.innerHTML = `<a href="#${element.id}" class="header-anchor">${element.innerHTML}<sup><i class="fas fa-link"></i></sup><span id="copytext-${element.id}" class="tooltiptext">Copier le lien</span></a>`;
    }

    var headerTypes = ["h1", "h2", "h3", "h4"];
    for (var i = 0; i < headerTypes.length; i++) {
      var headers = document.querySelectorAll(headerTypes[i]);
      if (headers) {
        headers.forEach(addAnchor);
      }
    }

    // =========== Copy anchor link to clipboard ================
    $('.header-anchor').on("click", function(event){ 
        event.preventDefault();
        navigator.permissions.query({name: "clipboard-write"}).then(result => { 
            if (result.state == "granted" || result.state == "prompt") {
                var anchorValue= $(this).attr("href");
                var link = window.location.href + anchorValue;
                navigator.clipboard.writeText(link); 
                $(this).find("span").text("Copié !");
                $(this).find("span").css({"visibility":"visible", "opacity":"1"});
            }
        });
        return false; 
    });
    // reset tooltip
    $('.header-anchor').on("mouseleave", function(event){ 
        $(this).find("span").text("Copier le lien");
        $(this).find("span").css({"visibility":"", "opacity":""});
    });

    

  });
})(jQuery);



  