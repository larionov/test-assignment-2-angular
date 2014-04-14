'use strict';

angular.module('testAngular1App')
  .controller('MainCtrl', function ($scope) {
    $scope.exampleProperties = {
        id: {
          base: true,
          type: 'number',
          palleteType: 'range',
          valueColors: {
            "..5": "rgb(40,175,204)",
            "6..10": "rgb(40,190,204)",
            "10..15": "rgb(190,40,204)",
            "16..": "rgb(204,194,40)"
          }
        },
        type: {
          base: true,
          type: 'string',
          palleteType: 'value',
          valueColors: {
            'donut': "rgb(40,175,204)",
            'bar': "rgb(136,204,40)",
            'twist': "rgb(175,204,40)",
            'filled': "rgb(126,204,70)"
          }
        },
        name: {
          base: true,
          type: 'string'
        },
        batter: {base: false, type: 'string'},
        topping: {base: false, type: 'string'},
        kkal: {base: false, type: 'number'},
        created: {
          base: false,
          type: 'date',
          palleteType: 'range',
          valueColors: {
            "..2014-01-31": "rgb(40,175,204)",
            "2014-02-01..2014-04-01": "rgb(40,190,204)",
            "2014-04-02..2014-06-01": "rgb(190,40,204)",
            "2014-06-02..": "rgb(204,194,40)"
          }
        }
    };

    $scope.exampleData = [
      {id: 1, type: 'donut', name: 'Cake', batter: 'Regular', topping: 'None', kkal: 82, created: '2014-01-28'},
      {id: 2, type: 'donut', name: 'Cake', batter: 'Regular', topping: 'Glazed', kkal: 45, created: '2014-02-06'},
      {id: 3, type: 'donut', name: 'Cake', batter: 'Regular', topping: 'Sugar', kkal: 53, created: '2014-02-12'},
      {id: 4, type: 'donut', name: 'Cake', batter: 'Regular', topping: 'Powdered Sugar', kkal: 98, created: '2014-02-27'},
      {id: 5, type: 'donut', name: 'Cake', batter: 'Regular', topping: 'Chocolate with Sprinkles', kkal: 10, created: '2014-03-13'},
      {id: 6, type: 'donut', name: 'Cake', batter: 'Regular', topping: 'Chocolate', kkal: 97, created: '2014-04-05'},
      {id: 7, type: 'donut', name: 'Cake', batter: 'Regular', topping: 'Maple', kkal: 53, created: '2014-04-16'},
      {id: 8, type: 'donut', name: 'Cake', batter: 'Chocolate', topping: 'None', kkal: 95, created: '2014-05-05'},
      {id: 9, type: 'donut', name: 'Cake', batter: 'Chocolate', topping: 'Glazed', kkal: 8, created: '2014-05-08'},
      {id: 10, type: 'donut', name: 'Cake', batter: 'Chocolate', topping: 'Sugar', kkal: 33, created: '2014-05-17'},
      {id: 11, type: 'donut', name: 'Cake', batter: 'Chocolate', topping: 'Powdered Sugar', kkal: 36, created: '2014-05-29'},
      {id: 12, type: 'donut', name: 'Cake', batter: 'Chocolate', topping: 'Chocolate with Sprinkles', kkal: 37, created: '2014-06-07'},
      {id: 13, type: 'donut', name: 'Cake', batter: 'Chocolate', topping: 'Chocolate', kkal: 73, created: '2014-06-24'},
      {id: 14, type: 'donut', name: 'Cake', batter: 'Chocolate', topping: 'Maple', kkal: 51, created: '2014-07-02'},
      {id: 15, type: 'donut', name: 'Cake', batter: 'Blueberry', topping: 'None', kkal: 30, created: '2014-07-16'},
      {id: 16, type: 'donut', name: 'Cake', batter: 'Blueberry', topping: 'Glazed', kkal: 42, created: '2014-07-23'},
      {id: 17, type: 'donut', name: 'Cake', batter: 'Blueberry', topping: 'Sugar', kkal: 14, created: '2014-09-27'},
      {id: 18, type: 'donut', name: 'Cake', batter: 'Blueberry', topping: 'Powdered Sugar', kkal: 43, created: '2014-10-03'},
      {id: 19, type: 'donut', name: 'Cake', batter: 'Blueberry', topping: 'Chocolate with Sprinkles', kkal: 89, created: '2014-10-04'},
      {id: 20, type: 'donut', name: 'Cake', batter: 'Blueberry', topping: 'Chocolate', kkal: 56, created: '2014-10-12'},
      {id: 21, type: 'donut', name: 'Cake', batter: 'Blueberry', topping: 'Maple', kkal: 8, created: '2014-11-02'},
      {id: 22, type: 'donut', name: 'Cake', batter: 'Devil\'s Food', topping: 'None', kkal: 74, created: '2014-11-11'},
      {id: 23, type: 'donut', name: 'Cake', batter: 'Devil\'s Food', topping: 'Glazed', kkal: 11, created: '2014-12-06'},
      {id: 24, type: 'donut', name: 'Cake', batter: 'Devil\'s Food', topping: 'Sugar', kkal: 100, created: '2014-12-09'},
      {id: 25, type: 'donut', name: 'Cake', batter: 'Devil\'s Food', topping: 'Powdered Sugar', kkal: 79, created: '2014-12-16'},
      {id: 26, type: 'donut', name: 'Cake', batter: 'Devil\'s Food', topping: 'Chocolatewith Sprinkles', kkal: 64, created: '2014-02-09'},
      {id: 27, type: 'donut', name: 'Cake', batter: 'Devil\'s Food', topping: 'Chocolate', kkal: 88, created: '2014-02-10'},
      {id: 28, type: 'donut', name: 'Cake', batter: 'Devil\'s Food', topping: 'Maple', kkal: 14, created: '2014-02-26'},
      {id: 29, type: 'donut', name: 'Raised', batter: 'Regular', topping: 'None', kkal: 44, created: '2014-03-18'},
      {id: 30, type: 'donut', name: 'Raised', batter: 'Regular', topping: 'Glazed', kkal: 97, created: '2014-03-30'},
      {id: 31, type: 'donut', name: 'Raised', batter: 'Regular', topping: 'Sugar', kkal: 34, created: '2014-04-03'},
      {id: 32, type: 'donut', name: 'Raised', batter: 'Regular', topping: 'Chocolate', kkal: 82, created: '2014-04-10'},
      {id: 33, type: 'donut', name: 'Raised', batter: 'Regular', topping: 'Maple', kkal: 71, created: '2014-04-18'},
      {id: 34, type: 'donut', name: 'Old Fashioned', batter: 'Regular', topping: 'None', kkal: 58, created: '2014-04-22'},
      {id: 35, type: 'donut', name: 'Old Fashioned', batter: 'Regular', topping: 'Glazed', kkal: 18, created: '2014-05-20'},
      {id: 36, type: 'donut', name: 'Old Fashioned', batter: 'Regular', topping: 'Chocolate', kkal: 61, created: '2014-05-25'},
      {id: 37, type: 'donut', name: 'Old Fashioned', batter: 'Regular', topping: 'Maple', kkal: 46, created: '2014-07-07'},
      {id: 38, type: 'donut', name: 'Old Fashioned', batter: 'Chocolate', topping: 'None', kkal: 88, created: '2014-07-20'},
      {id: 39, type: 'donut', name: 'Old Fashioned', batter: 'Chocolate', topping: 'Glazed', kkal: 83, created: '2014-07-26'},
      {id: 40, type: 'donut', name: 'Old Fashioned', batter: 'Chocolate', topping: 'Chocolate', kkal: 16, created: '2014-08-10'},
      {id: 41, type: 'donut', name: 'Old Fashioned', batter: 'Chocolate', topping: 'Maple', kkal: 61, created: '2014-08-14'},
      {id: 42, type: 'bar', name: 'Bar', batter: 'Regular', topping: 'Chocolate', kkal: 21, created: '2014-08-15'},
      {id: 43, type: 'bar', name: 'Bar', batter: 'Regular', topping: 'Maple', kkal: 62, created: '2014-09-19'},
      {id: 44, type: 'twist', name: 'Twist', batter: 'Regular', topping: 'Glazed', kkal: 8, created: '2014-09-22'},
      {id: 45, type: 'twist', name: 'Twist', batter: 'Regular', topping: 'Sugar', kkal: 68, created: '2014-10-05'},
      {id: 46, type: 'filled', name: 'Filled', batter: 'Regular', topping: 'Glazed', kkal: 86, created: '2014-10-13'},
      {id: 47, type: 'filled', name: 'Filled', batter: 'Regular', topping: 'Powdered Sugar', kkal: 1, created: '2014-10-29'},
      {id: 48, type: 'filled', name: 'Filled', batter: 'Regular', topping: 'Chocolate', kkal: 73, created: '2014-11-22'},
      {id: 49, type: 'filled', name: 'Filled', batter: 'Regular', topping: 'Maple', kkal: 63, created: '2014-11-29'},
    ];
  });

