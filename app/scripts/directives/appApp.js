 var app = angular.module('jsondemoApp');

app.directive('d3Bar', function() {
  return {
    restrict: 'AE',
    replace: true,
    template: '<p style="background-color: red">Hello World</p>',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.css('background-color', 'blue');
        scope.$apply(function() {
          scope.color = "blue";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  };
});