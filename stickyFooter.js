'use strict';
app.directive('stickyFooter', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var bumpIt = function () {
                $('body').css('margin-bottom', element.height());
            };

            var didResize = false;

            bumpIt();

            $(window).on('load', function () {
                didResize = true;
            });

            $(window).on('resize', function () {
                didResize = true;
            });

            setInterval(function () {
                if (didResize) {
                    didResize = false;
                    bumpIt();
                }
            }, 250);
        }
    };
});
