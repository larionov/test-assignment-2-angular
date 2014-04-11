'use strict';

describe('Directive: colorObjects', function () {

  // load the directive's module
  beforeEach(module('testAngular1App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<color-objects></color-objects>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the colorObjects directive');
  }));
});
