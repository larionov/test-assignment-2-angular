(function () {
'use strict';

angular.module('testAngular1App')
.filter('notUsed', function () {
    return function (a, used, index) {
      var out = _.filter(a, function (item) {
        return item.name === "" || used[index] === item.name || used.indexOf(item.name) === -1;
      });
      return out;
    };
});

angular.module('testAngular1App')
  .controller('colorObjectsController', [
    '$scope', '$element', '$window', '$compile',
    function ($scope, $element, $window, $compile) {
      var colorObjects = this;
      var methods = {
        init: function (element) {
          $scope.groupMode = false;
          $scope.draggingClone = false;
          $scope.draggingInsertClone = false;
          $scope.dragging = false;
          $scope.draggingHash = false;
          $scope.dragStart = false;
          $scope.rootElement = false;
          $scope.elementsMap = {};
          $scope.gutterWidth = 10;
          $scope.expanded = false;
          $scope.defaultColor = '#eee';
          $scope.selectedProperty = '';
          $scope.sortLevel = [];

          $scope.containerWidth = 800;
          $scope.objectWidth = 200;
          $scope.objectHeight = 80;

          $scope.selectProperties = [];
          $scope.selectProperties.push({name: '', value: ''});

          // init 'group by' select box
          var i = 0;
          for (var key in $scope.colorObjectsProperties) {
            $scope.sortLevel.push('');
            $scope.selectProperties.push({name: key, value: key});
          }


          // clear group levels below erased
          $scope.$watch('sortLevel', function (o, n) {
            var erase = false;
            for (var i = 0; i < $scope.sortLevel.length; i++) {
              if (!erase && $scope.sortLevel[i] === '') {
                erase = true;
              }
              if (erase) {
                $scope.sortLevel[i] = '';
              }
            }
            $scope.groupMode = ($scope.sortLevel.join('') !== '');

            colorObjects.initGroups();
          }, true);

        },

        // build groups tree
        initGroups: function () {
          var sortFiltered = _.filter($scope.sortLevel, function (t) {return t !== '';});
          var g = _.map(sortFiltered, function (k, i) {
            return function (item, index, arr) {
              var property = $scope.colorObjectsProperties[k],
                value = item[k];
              if (property.palleteType == 'value') {
                return value;
              } else {

                for (var range in property.valueColors) {
                  var color = property.valueColors[range];
                  range = range.split('..');
                  if (range[0] === "" || cV(value, property.type) >= cV(range[0], property.type)) {
                    if (range[1] === "" || cV(value, property.type) <= cV(range[1], property.type)) {
                      return range.join('..');
                    }
                  }
                }
                return 'default';
              }
            };
          });
          $scope.groups = _.groupByMulti($scope.colorObjects, g, $scope);
        },
        initPropertiesSettings: function (properties) {
          angular.forEach(properties, function (property, key) {
            if (!property.palleteType) {
              property.palleteType = 'value';
              property.valueColors = {};
              angular.forEach($scope.colorObjects, function (item, index) {
                if (undefined === property.valueColors[item[key]]) {
                  property.valueColors[item[key]] = hashStringToColor(item[key]);
                }
              });
            }
          });
          return properties;
        },
        getGroupColor: function (group, propertyName) {
          var property = $scope.colorObjectsProperties[propertyName];
            if (property.valueColors && property.valueColors[group]) {
                return property.valueColors[group];
            }
          return $scope.defaultColor;

        },
        getItemColor: function (item) {
          if (item === undefined) {
            return $scope.defaultColor;
          }
          if ($scope.selectedProperty) {
            var propertyName = $scope.selectedProperty,
              property = $scope.colorObjectsProperties[propertyName],
              value = item[propertyName];
            if (property.palleteType === 'value') {
              if (property.valueColors && property.valueColors[value]) {
                  return property.valueColors[value];
              }
            } else {
              for (var range in property.valueColors) {
                var color = property.valueColors[range];
                range = range.split('..');
                if (range[0] === "" || cV(value, property.type) >= cV(range[0], property.type)) {
                  if (range[1] === "" || cV(value, property.type) <= cV(range[1], property.type)) {
                    return color;
                  }
                }
              }

            }
          }
          return $scope.defaultColor;
        },

        transformPoint: function (offset, point, noOffset) {
          noOffset = !!noOffset;
          var x = point.clientX - offset.left - (noOffset ? 0 : $scope.offsetStart.x);
          var y = point.clientY - offset.top - (noOffset ? 0 :  $scope.offsetStart.y);
          return {x: x, y: y};
        },

        getRootOffset: function (element, noOffset) {
          noOffset = !!noOffset;
          var rect = element[0].getBoundingClientRect();
          return {left: rect.left, top: rect.top - (noOffset ? 0 : $scope.list[0].scrollTop)};
        },

        moveItem: function (index, newIndex, isSeparator) {
          var tmp;
          $scope.$apply(function () {
            if (isSeparator) {
                tmp = $scope.colorObjects.splice(index, 1);
                $scope.colorObjects.splice(newIndex + (index < newIndex ? -1 : 0), 0, tmp[0]);
            } else {
                tmp = $scope.colorObjects[newIndex];
                $scope.colorObjects[newIndex] = $scope.colorObjects[index];
                $scope.colorObjects[index] = tmp;
            }
          });
        },
        getItemPosition: function (index) {
          var x = 0, y = 0, cols = Math.floor($scope.containerWidth / ($scope.objectWidth + $scope.gutterWidth));
          var row = Math.floor(index / cols),
            col = Math.floor(index % cols);
          return {
            x: $scope.gutterWidth+ col * ($scope.objectWidth + $scope.gutterWidth),
            y: row * ($scope.objectHeight + $scope.gutterWidth)
          };
        },
        getItemAtPoint: function (point) {
          var cols = Math.floor($scope.containerWidth / ($scope.objectWidth + $scope.gutterWidth));
          var col = Math.floor(point.x / ($scope.objectWidth + $scope.gutterWidth)),
            row = Math.floor(point.y / ($scope.objectHeight + $scope.gutterWidth)),
            index = row * cols + col;
          if (col > cols - 1 || !$scope.colorObjects[index]) {
            index = false;
          }
          var isSeparator = point.x - (col * $scope.objectWidth + (col + 1)* $scope.gutterWidth) < 0;
          return {
            index: index,
            isSeparator: isSeparator
          };
        },
        onStartDrag: function (el, offset, s) {
          if (!$scope.groupMode) {
            angular.element($window).on('mousemove', function (e) {
              colorObjects.onMouseMove(e);
            });
          }
          $scope.$apply(function () {
            $scope.offsetStart = offset;
            $scope.dragStart = false;
            $scope.dragging = s.$index;
            $scope.draggingHash = s.item.$$hashKey;
          });
        },
        onMouseMove: function (e) {
          if ($scope.dragging !== false) {
              $scope.dragStart = true;
          } else {
            return;
          }

          $scope.expanded = false;

          var off = colorObjects.getRootOffset($scope.rootElement, true),
            point = colorObjects.transformPoint(off, e),
            scrollTop = $scope.rootElement[0].scrollTop;
          $scope.draggingClone.css('left', point.x + 'px');
          $scope.draggingClone.css('top',  point.y + 'px');

          off.top -= scrollTop;
          var insertPosition = colorObjects.getItemAtPoint(colorObjects.transformPoint(off, e, true));
          $scope.dragOver = insertPosition.index;
          if (insertPosition.isSeparator) {
            var pos = colorObjects.getItemPosition(insertPosition.index);
            $scope.dragOver = false;

            $scope.draggingInsertClone.css('left', (pos.x - $scope.gutterWidth /2 - 2) + 'px');
            $scope.draggingInsertClone.css('top',  pos.y - scrollTop + 'px');
          }
          $scope.$apply();
        },
        getHashByIndex: function (index) {
          return $scope.colorObjects[index].$$hashKey;
        },
        filterBase: function (properties) {
          return _.pick(properties, function (item) {
            return item.base;
          });
        },

        filterNotBase: function (properties) {
          return _.pick(properties, function (item) {
            return !item.base;
          });
        },

        onMouseUp: function (e) {
          var off = colorObjects.getRootOffset($scope.rootElement),
            insertPosition = colorObjects.getItemAtPoint(colorObjects.transformPoint(off, e, true));
          if ($scope.dragStart !== false && insertPosition.index !== false) {
              colorObjects.moveItem($scope.dragging, insertPosition.index, insertPosition.isSeparator);

          }
          if ($scope.expanded !== $scope.draggingHash && $scope.dragging !== false && $scope.dragStart === false) {
            $scope.expanded = $scope.draggingHash;
          } else {
            $scope.expanded = false;
          }
          $scope.dragging = false;
          $scope.dragStart = false;
          $scope.dragOver = false;
          $scope.$apply();
          angular.element($window).off('mousemove');
        }
      };
      angular.extend(this, methods);
      angular.extend($scope, methods);
  }])
  .directive('colorObjects', ['$compile', '$q', '$window', function ($compile, $q, $window) {
    return {
      restrict: 'A',
      controller: 'colorObjectsController',
      require: 'colorObjects',
      template:
        '<form>' +
          'Color by: <br/><select ng-options="a.value as a.name for a in selectProperties" ng-model="selectedProperty"></select>' +
          '<div class="legend">' +
              '<p ng-repeat="(n, color) in colorObjectsProperties[selectedProperty].valueColors">{{n}} <span class="color" ng-style="{backgroundColor: color}">{{color}}</p>' +
          '</div>' +
          '<div class="sort">Group by: ' +
            '<p ng-repeat="(name, property) in colorObjectsProperties" ng-show="$index === 0 || sortLevel[$index -1]">' +
                'level{{$index}} <select ng-options="b.value as b.name for b in selectProperties| notUsed:sortLevel:$index" ng-model="sortLevel[$index]"></select>' +
            '</p>' +
          '</div>' +
        '</form>' +
        '<ul id="colorObjectsList" ng-show="!groupMode" class="list" ng-class="{groupMode:groupMode, list: true}">' +
          '<li ng-repeat="item in colorObjects" ng-class="{expanded: item.$$hashKey === expanded, dragging: $index === dragging, dragOver: $index === dragOver}" color-objects-item ng-style="{left: x + \'px\', top: y + \'px\', backgroundColor: getItemColor(item)}">{{pos}} {{$index}}</li>' +
        '</ul>' +
        '<div ng-if="groupMode" class="list" ng-class="{groupMode:groupMode, list: true}">' +
          '<div groups-tree groups="groups" name="global"></div>' +
        '</div>' +
        '<li color-objects-item class="dragging-clone item" ng-show="(dragging !== false) && dragStart"></li>' +
        '<li color-objects-item class="dragging-insert-clone item" ng-show="dragging !== false  && dragStart && dragOver === false"></li>',

      scope: {
        colorObjects: '=',
        colorObjectsProperties: '='
      },
      compile: function (element, attrs) {

        return function (scope, element, attrs, colorObjects) {
          scope.list = element;
          colorObjects.init(element);
          colorObjects.initPropertiesSettings(scope.colorObjectsProperties);

          scope.draggingClone = angular.element(element[0].querySelector('.dragging-clone'));
          scope.draggingInsertClone = angular.element(element[0].querySelector('.dragging-insert-clone'));
          scope.rootElement = angular.element(document.querySelector('#colorObjectsList'));
          element.addClass('color-objects');

          angular.element($window).on('mouseup', colorObjects.onMouseUp);
        };
      }
    };
  }])
  .directive('colorObjectsItem', [function () {
    return {
      restrict: 'A',
      require: '^?colorObjects',
      template: '<p ng-repeat="(name, options) in filterBase(colorObjectsProperties)" ng-class="{base: options.base}">{{name}}: {{item[name]}}</p>' +
      '<p ng-repeat="(name, options) in filterNotBase(colorObjectsProperties)" ng-class="{base: options.base}">{{name}}: {{item[name]}}</p>'
      ,
      link: function (scope, element, attrs, colorObjects) {
        element.addClass('item');
        if (!colorObjects) {return;}
        scope.$watch('$index', function () {
          var pos = colorObjects.getItemPosition(scope.$index);
          scope.x = pos.x;
          scope.y = pos.y;
        });

        element.on('mousedown', function (e) {
          if (e.button !== 0) {
            return;
          }
          var offset = {x: e.offsetX, y: e.offsetY};
          colorObjects.onStartDrag(element, offset, scope);
          scope.$apply(function () {
            colorObjects.dragging = scope.$index;
            colorObjects.draggingHash = scope.item.$$hashKey;
          });
        });
      }
    };
}])
  .directive('groupsTree', ['$compile', function ($compile) {
    return {
      restrict: 'A',
      require: '^colorObjects',
      link: function (scope, element, attrs, colorObjects) {
        scope.$watch('groups', function () {
          var template = '';

          var parseTree = function (node, path, l) {
            if (angular.isArray(node)) {
              template += '<li ng-repeat="item in ' + path + '" ng-class="{expanded: item.$$hashKey === expanded}" color-objects-item ng-style="{left: x + \'px\', top: y + \'px\', backgroundColor: getItemColor(item)}">{{item}}</li>';
            } else {
              for (var g in node) {
                template += '<li><h1>' + scope.sortLevel[l] + " | " + g + '</h1>';
                template += '<ul ng-style="{backgroundColor: getGroupColor(\''+g+'\', \''+scope.sortLevel[l]+'\')}" class="clearfix indent" path="' + path + '">';
                parseTree(node[g], path + "['" + g + "']", l + 1);
                template += '</ul></li>';
              }
            }
          };

          parseTree(scope.groups, 'groups', 0);

          element.html('');
          $compile(template)(scope, function (clonedElement, scope) {
            element.append(angular.element(clonedElement));
          });

        }, true);
      }
    };
  }]);

function djb2(str){
  var hash = 5381;
  for (var i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }
  return hash;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function hsvToRgb(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (h && s === undefined && v === undefined) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
    };
}

function hashStringToColor(str) {
  if (isNumber(str)) {
    str = str.toFixed(5);
  }
  var hash = djb2(str);
  var h = (hash & 0xFF0000) >> 16;
  var s = 0.8;
  var v = 0.8;
  var color = hsvToRgb(h/255, s, v);
  return "rgb(" + color.r + ',' + color.g + ',' + color.b + ')';
}
var cV = function (value, type) {
  if (type === 'number') {
    return value;
  }
  if (type === 'date') {
    return Date.parse(value);
  }
};

_.groupByMulti = function (obj, values, context) {
    if (!values.length){
      return obj;
    }
    var byFirst = _.groupBy(obj, values[0], context),
      rest = values.slice(1);
    for (var prop in byFirst) {
      byFirst[prop] = _.groupByMulti(byFirst[prop], rest, context);
    }
    return byFirst;
};

})();

