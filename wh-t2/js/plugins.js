// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    var adjustImagesSizes = function () {
        var windowWidth = $(window).width();
        var columnImgElement = $(".column img");

        if (windowWidth >= 100) {
            columnImgElement.each(function () {
                var smallImage = columnImgElement.attr('data-1x');
                $(this).attr("src", smallImage);
            });
        }

        if (windowWidth >= 600) {
            columnImgElement.each(function () {
                var mediumImage = columnImgElement.attr('data-2x');
                $(this).attr("src", mediumImage);
            });
        }

        if (windowWidth >= 900) {
            columnImgElement.each(function () {
                var largeImage = columnImgElement.attr("data-3x");
                $(this).attr("src", largeImage);
            });
        }
    };

    $(window).bind('resize', function () {
        adjustImagesSizes();
    });
}());


	
	
	
	
