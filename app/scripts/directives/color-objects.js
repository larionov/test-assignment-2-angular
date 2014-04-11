'use strict';

angular.module('testAngular1App')
  .directive('colorObjects', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the colorObjects directive');
      }
    };
  });
