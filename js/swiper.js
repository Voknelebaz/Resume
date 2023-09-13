"use strict";

(function () {
    'use strict';
    var breakpoint = window.matchMedia('(max-width:53.125rem)');
    var swiper;
    var breakpointChecker = function breakpointChecker() {
        if (breakpoint.matches === true) {
            if (swiper !== undefined) swiper.destroy(true, true);
            return;
        } else if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };
    var enableSwiper = function enableSwiper() {
        swiper = new Swiper('.swiper', {
            autoplay: {
                delay: 1500,
            },
            loop: true,
            slidesPerView: 3,
        });
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
})();
