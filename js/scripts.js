/*!
    * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };


	//carrousel



var animateRecursive = function () {

    var photobanner = $(".photobanner");
    
    /**
     * 1. Always get the first child from .photobanner
     */
    var elem = photobanner.children().first();

    /**
     * 2. Append it to .photobanner as last element a cloned version of your 'elem'
     */
    photobanner.append(elem.clone());

    /**
     * 3. Animate it to go to the left and adjust duration
     */
    elem.stop(true, true).animate({
        marginLeft: (-1 * elem.outerWidth()) + 'px'
    }, {
        duration: 1000,
        easing: 'linear',
        complete: function () {

            /**
             * 4. Remove the hidden element to keep .photobanner clean
             */
            elem.remove();

            /**
             * 5. Repeat
             */
            animateRecursive();

        }
    });

};

animateRecursive();

    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
