"use strict";angular.module("testAngular1App",[]),angular.module("testAngular1App").controller("MainCtrl",["$scope",function(a){a.exampleProperties={id:{base:!0,type:"number",palleteType:"range",valueColors:{"..5":"rgb(40,175,204)","6..10":"rgb(40,190,204)","10..15":"rgb(190,40,204)","16..":"rgb(204,194,40)"}},type:{base:!0,type:"string",palleteType:"value",valueColors:{donut:"rgb(40,175,204)",bar:"rgb(136,204,40)",twist:"rgb(175,204,40)",filled:"rgb(126,204,70)"}},name:{base:!0,type:"string"},batter:{base:!1,type:"string"},topping:{base:!1,type:"string"},kkal:{base:!1,type:"number"},created:{base:!1,type:"date",palleteType:"range",valueColors:{"..2014-01-31":"rgb(40,175,204)","2014-02-01..2014-04-01":"rgb(40,190,204)","2014-04-02..2014-06-01":"rgb(190,40,204)","2014-06-02..":"rgb(204,194,40)"}}},a.exampleData=[{id:1,type:"donut",name:"Cake",batter:"Regular",topping:"None",kkal:82,created:"2014-01-28"},{id:2,type:"donut",name:"Cake",batter:"Regular",topping:"Glazed",kkal:45,created:"2014-02-06"},{id:3,type:"donut",name:"Cake",batter:"Regular",topping:"Sugar",kkal:53,created:"2014-02-12"},{id:4,type:"donut",name:"Cake",batter:"Regular",topping:"Powdered Sugar",kkal:98,created:"2014-02-27"},{id:5,type:"donut",name:"Cake",batter:"Regular",topping:"Chocolate with Sprinkles",kkal:10,created:"2014-03-13"},{id:6,type:"donut",name:"Cake",batter:"Regular",topping:"Chocolate",kkal:97,created:"2014-04-05"},{id:7,type:"donut",name:"Cake",batter:"Regular",topping:"Maple",kkal:53,created:"2014-04-16"},{id:8,type:"donut",name:"Cake",batter:"Chocolate",topping:"None",kkal:95,created:"2014-05-05"},{id:9,type:"donut",name:"Cake",batter:"Chocolate",topping:"Glazed",kkal:8,created:"2014-05-08"},{id:10,type:"donut",name:"Cake",batter:"Chocolate",topping:"Sugar",kkal:33,created:"2014-05-17"},{id:11,type:"donut",name:"Cake",batter:"Chocolate",topping:"Powdered Sugar",kkal:36,created:"2014-05-29"},{id:12,type:"donut",name:"Cake",batter:"Chocolate",topping:"Chocolate with Sprinkles",kkal:37,created:"2014-06-07"},{id:13,type:"donut",name:"Cake",batter:"Chocolate",topping:"Chocolate",kkal:73,created:"2014-06-24"},{id:14,type:"donut",name:"Cake",batter:"Chocolate",topping:"Maple",kkal:51,created:"2014-07-02"},{id:15,type:"donut",name:"Cake",batter:"Blueberry",topping:"None",kkal:30,created:"2014-07-16"},{id:16,type:"donut",name:"Cake",batter:"Blueberry",topping:"Glazed",kkal:42,created:"2014-07-23"},{id:17,type:"donut",name:"Cake",batter:"Blueberry",topping:"Sugar",kkal:14,created:"2014-09-27"},{id:18,type:"donut",name:"Cake",batter:"Blueberry",topping:"Powdered Sugar",kkal:43,created:"2014-10-03"},{id:19,type:"donut",name:"Cake",batter:"Blueberry",topping:"Chocolate with Sprinkles",kkal:89,created:"2014-10-04"},{id:20,type:"donut",name:"Cake",batter:"Blueberry",topping:"Chocolate",kkal:56,created:"2014-10-12"},{id:21,type:"donut",name:"Cake",batter:"Blueberry",topping:"Maple",kkal:8,created:"2014-11-02"},{id:22,type:"donut",name:"Cake",batter:"Devil's Food",topping:"None",kkal:74,created:"2014-11-11"},{id:23,type:"donut",name:"Cake",batter:"Devil's Food",topping:"Glazed",kkal:11,created:"2014-12-06"},{id:24,type:"donut",name:"Cake",batter:"Devil's Food",topping:"Sugar",kkal:100,created:"2014-12-09"},{id:25,type:"donut",name:"Cake",batter:"Devil's Food",topping:"Powdered Sugar",kkal:79,created:"2014-12-16"},{id:26,type:"donut",name:"Cake",batter:"Devil's Food",topping:"Chocolatewith Sprinkles",kkal:64,created:"2014-02-09"},{id:27,type:"donut",name:"Cake",batter:"Devil's Food",topping:"Chocolate",kkal:88,created:"2014-02-10"},{id:28,type:"donut",name:"Cake",batter:"Devil's Food",topping:"Maple",kkal:14,created:"2014-02-26"},{id:29,type:"donut",name:"Raised",batter:"Regular",topping:"None",kkal:44,created:"2014-03-18"},{id:30,type:"donut",name:"Raised",batter:"Regular",topping:"Glazed",kkal:97,created:"2014-03-30"},{id:31,type:"donut",name:"Raised",batter:"Regular",topping:"Sugar",kkal:34,created:"2014-04-03"},{id:32,type:"donut",name:"Raised",batter:"Regular",topping:"Chocolate",kkal:82,created:"2014-04-10"},{id:33,type:"donut",name:"Raised",batter:"Regular",topping:"Maple",kkal:71,created:"2014-04-18"},{id:34,type:"donut",name:"Old Fashioned",batter:"Regular",topping:"None",kkal:58,created:"2014-04-22"},{id:35,type:"donut",name:"Old Fashioned",batter:"Regular",topping:"Glazed",kkal:18,created:"2014-05-20"},{id:36,type:"donut",name:"Old Fashioned",batter:"Regular",topping:"Chocolate",kkal:61,created:"2014-05-25"},{id:37,type:"donut",name:"Old Fashioned",batter:"Regular",topping:"Maple",kkal:46,created:"2014-07-07"},{id:38,type:"donut",name:"Old Fashioned",batter:"Chocolate",topping:"None",kkal:88,created:"2014-07-20"},{id:39,type:"donut",name:"Old Fashioned",batter:"Chocolate",topping:"Glazed",kkal:83,created:"2014-07-26"},{id:40,type:"donut",name:"Old Fashioned",batter:"Chocolate",topping:"Chocolate",kkal:16,created:"2014-08-10"},{id:41,type:"donut",name:"Old Fashioned",batter:"Chocolate",topping:"Maple",kkal:61,created:"2014-08-14"},{id:42,type:"bar",name:"Bar",batter:"Regular",topping:"Chocolate",kkal:21,created:"2014-08-15"},{id:43,type:"bar",name:"Bar",batter:"Regular",topping:"Maple",kkal:62,created:"2014-09-19"},{id:44,type:"twist",name:"Twist",batter:"Regular",topping:"Glazed",kkal:8,created:"2014-09-22"},{id:45,type:"twist",name:"Twist",batter:"Regular",topping:"Sugar",kkal:68,created:"2014-10-05"},{id:46,type:"filled",name:"Filled",batter:"Regular",topping:"Glazed",kkal:86,created:"2014-10-13"},{id:47,type:"filled",name:"Filled",batter:"Regular",topping:"Powdered Sugar",kkal:1,created:"2014-10-29"},{id:48,type:"filled",name:"Filled",batter:"Regular",topping:"Chocolate",kkal:73,created:"2014-11-22"},{id:49,type:"filled",name:"Filled",batter:"Regular",topping:"Maple",kkal:63,created:"2014-11-29"}]}]),function(){function a(a){for(var b=5381,c=0;c<a.length;c++)b=(b<<5)+b+a.charCodeAt(c);return b}function b(a){return!isNaN(parseFloat(a))&&isFinite(a)}function c(a,b,c){var d,e,f,g,h,i,j,k;switch(a&&void 0===b&&void 0===c&&(b=a.s,c=a.v,a=a.h),g=Math.floor(6*a),h=6*a-g,i=c*(1-b),j=c*(1-h*b),k=c*(1-(1-h)*b),g%6){case 0:d=c,e=k,f=i;break;case 1:d=j,e=c,f=i;break;case 2:d=i,e=c,f=k;break;case 3:d=i,e=j,f=c;break;case 4:d=k,e=i,f=c;break;case 5:d=c,e=i,f=j}return{r:Math.floor(255*d),g:Math.floor(255*e),b:Math.floor(255*f)}}function d(d){b(d)&&(d=d.toFixed(5));var e=a(d),f=(16711680&e)>>16,g=.8,h=.8,i=c(f/255,g,h);return"rgb("+i.r+","+i.g+","+i.b+")"}angular.module("testAngular1App").filter("notUsed",function(){return function(a,b,c){var d=_.filter(a,function(a){return""===a.name||b[c]===a.name||-1===b.indexOf(a.name)});return d}}),angular.module("testAngular1App").controller("colorObjectsController",["$scope","$element","$window","$compile",function(a,b,c){var f=this,g={init:function(){a.groupMode=!1,a.draggingClone=!1,a.draggingInsertClone=!1,a.dragging=!1,a.draggingHash=!1,a.dragStart=!1,a.rootElement=!1,a.elementsMap={},a.gutterWidth=10,a.expanded=!1,a.defaultColor="#eee",a.selectedProperty="",a.sortLevel=[],a.containerWidth=800,a.objectWidth=200,a.objectHeight=80,a.selectProperties=[],a.selectProperties.push({name:"",value:""});for(var b in a.colorObjectsProperties)a.sortLevel.push(""),a.selectProperties.push({name:b,value:b});a.$watch("sortLevel",function(){for(var b=!1,c=0;c<a.sortLevel.length;c++)b||""!==a.sortLevel[c]||(b=!0),b&&(a.sortLevel[c]="");a.groupMode=""!==a.sortLevel.join(""),f.initGroups()},!0)},initGroups:function(){var b=_.filter(a.sortLevel,function(a){return""!==a}),c=_.map(b,function(b){return function(c){var d=a.colorObjectsProperties[b],f=c[b];if("value"==d.palleteType)return f;for(var g in d.valueColors){{d.valueColors[g]}if(g=g.split(".."),(""===g[0]||e(f,d.type)>=e(g[0],d.type))&&(""===g[1]||e(f,d.type)<=e(g[1],d.type)))return g.join("..")}return"default"}});a.groups=_.groupByMulti(a.colorObjects,c,a)},initPropertiesSettings:function(b){return angular.forEach(b,function(b,c){b.palleteType||(b.palleteType="value",b.valueColors={},angular.forEach(a.colorObjects,function(a){void 0===b.valueColors[a[c]]&&(b.valueColors[a[c]]=d(a[c]))}))}),b},getGroupColor:function(b,c){var d=a.colorObjectsProperties[c];return d.valueColors&&d.valueColors[b]?d.valueColors[b]:a.defaultColor},getItemColor:function(b){if(void 0===b)return a.defaultColor;if(a.selectedProperty){var c=a.selectedProperty,d=a.colorObjectsProperties[c],f=b[c];if("value"===d.palleteType){if(d.valueColors&&d.valueColors[f])return d.valueColors[f]}else for(var g in d.valueColors){var h=d.valueColors[g];if(g=g.split(".."),(""===g[0]||e(f,d.type)>=e(g[0],d.type))&&(""===g[1]||e(f,d.type)<=e(g[1],d.type)))return h}}return a.defaultColor},transformPoint:function(b,c,d){d=!!d;var e=c.clientX-b.left-(d?0:a.offsetStart.x),f=c.clientY-b.top-(d?0:a.offsetStart.y);return{x:e,y:f}},getRootOffset:function(b,c){c=!!c;var d=b[0].getBoundingClientRect();return{left:d.left,top:d.top-(c?0:a.list[0].scrollTop)}},moveItem:function(b,c,d){var e;a.$apply(function(){d?(e=a.colorObjects.splice(b,1),a.colorObjects.splice(c+(c>b?-1:0),0,e[0])):(e=a.colorObjects[c],a.colorObjects[c]=a.colorObjects[b],a.colorObjects[b]=e)})},getItemPosition:function(b){var c=Math.floor(a.containerWidth/(a.objectWidth+a.gutterWidth)),d=Math.floor(b/c),e=Math.floor(b%c);return{x:a.gutterWidth+e*(a.objectWidth+a.gutterWidth),y:d*(a.objectHeight+a.gutterWidth)}},getItemAtPoint:function(b){var c=Math.floor(a.containerWidth/(a.objectWidth+a.gutterWidth)),d=Math.floor(b.x/(a.objectWidth+a.gutterWidth)),e=Math.floor(b.y/(a.objectHeight+a.gutterWidth)),f=e*c+d;(d>c-1||!a.colorObjects[f])&&(f=!1);var g=b.x-(d*a.objectWidth+(d+1)*a.gutterWidth)<0;return{index:f,isSeparator:g}},onStartDrag:function(b,d,e){a.groupMode||angular.element(c).on("mousemove",function(a){f.onMouseMove(a)}),a.$apply(function(){a.offsetStart=d,a.dragStart=!1,a.dragging=e.$index,a.draggingHash=e.item.$$hashKey})},onMouseMove:function(b){if(a.dragging!==!1){a.dragStart=!0,a.expanded=!1;var c=f.getRootOffset(a.rootElement,!0),d=f.transformPoint(c,b),e=a.rootElement[0].scrollTop;a.draggingClone.css("left",d.x+"px"),a.draggingClone.css("top",d.y+"px"),c.top-=e;var g=f.getItemAtPoint(f.transformPoint(c,b,!0));if(a.dragOver=g.index,g.isSeparator){var h=f.getItemPosition(g.index);a.dragOver=!1,a.draggingInsertClone.css("left",h.x-a.gutterWidth/2-2+"px"),a.draggingInsertClone.css("top",h.y-e+"px")}a.$apply()}},getHashByIndex:function(b){return a.colorObjects[b].$$hashKey},filterBase:function(a){return _.pick(a,function(a){return a.base})},filterNotBase:function(a){return _.pick(a,function(a){return!a.base})},onMouseUp:function(b){var d=f.getRootOffset(a.rootElement),e=f.getItemAtPoint(f.transformPoint(d,b,!0));a.dragStart!==!1&&e.index!==!1&&f.moveItem(a.dragging,e.index,e.isSeparator),a.expanded=a.expanded!==a.draggingHash&&a.dragging!==!1&&a.dragStart===!1?a.draggingHash:!1,a.dragging=!1,a.dragStart=!1,a.dragOver=!1,a.$apply(),angular.element(c).off("mousemove")}};angular.extend(this,g),angular.extend(a,g)}]).directive("colorObjects",["$compile","$q","$window",function(a,b,c){return{restrict:"A",controller:"colorObjectsController",require:"colorObjects",template:'<form>Color by: <br/><select ng-options="a.value as a.name for a in selectProperties" ng-model="selectedProperty"></select><div class="legend"><p ng-repeat="(n, color) in colorObjectsProperties[selectedProperty].valueColors">{{n}} <span class="color" ng-style="{backgroundColor: color}">{{color}}</p></div><div class="sort">Group by: <p ng-repeat="(name, property) in colorObjectsProperties" ng-show="$index === 0 || sortLevel[$index -1]">level{{$index}} <select ng-options="b.value as b.name for b in selectProperties| notUsed:sortLevel:$index" ng-model="sortLevel[$index]"></select></p></div></form><ul id="colorObjectsList" ng-show="!groupMode" class="list" ng-class="{groupMode:groupMode, list: true}"><li ng-repeat="item in colorObjects" ng-class="{expanded: item.$$hashKey === expanded, dragging: $index === dragging, dragOver: $index === dragOver}" color-objects-item ng-style="{left: x + \'px\', top: y + \'px\', backgroundColor: getItemColor(item)}">{{pos}} {{$index}}</li></ul><div ng-if="groupMode" class="list" ng-class="{groupMode:groupMode, list: true}"><div groups-tree groups="groups" name="global"></div></div><li color-objects-item class="dragging-clone item" ng-show="(dragging !== false) && dragStart"></li><li color-objects-item class="dragging-insert-clone item" ng-show="dragging !== false  && dragStart && dragOver === false"></li>',scope:{colorObjects:"=",colorObjectsProperties:"="},compile:function(){return function(a,b,d,e){a.list=b,e.init(b),e.initPropertiesSettings(a.colorObjectsProperties),a.draggingClone=angular.element(b[0].querySelector(".dragging-clone")),a.draggingInsertClone=angular.element(b[0].querySelector(".dragging-insert-clone")),a.rootElement=angular.element(document.querySelector("#colorObjectsList")),b.addClass("color-objects"),angular.element(c).on("mouseup",e.onMouseUp)}}}}]).directive("colorObjectsItem",[function(){return{restrict:"A",require:"^?colorObjects",template:'<p ng-repeat="(name, options) in filterBase(colorObjectsProperties)" ng-class="{base: options.base}">{{name}}: {{item[name]}}</p><p ng-repeat="(name, options) in filterNotBase(colorObjectsProperties)" ng-class="{base: options.base}">{{name}}: {{item[name]}}</p>',link:function(a,b,c,d){b.addClass("item"),d&&(a.$watch("$index",function(){var b=d.getItemPosition(a.$index);a.x=b.x,a.y=b.y}),b.on("mousedown",function(c){if(0===c.button){var e={x:c.offsetX,y:c.offsetY};d.onStartDrag(b,e,a),a.$apply(function(){d.dragging=a.$index,d.draggingHash=a.item.$$hashKey})}}))}}}]).directive("groupsTree",["$compile",function(a){return{restrict:"A",require:"^colorObjects",link:function(b,c){b.$watch("groups",function(){var d="",e=function(a,c,f){if(angular.isArray(a))d+='<li ng-repeat="item in '+c+'" ng-class="{expanded: item.$$hashKey === expanded}" color-objects-item ng-style="{left: x + \'px\', top: y + \'px\', backgroundColor: getItemColor(item)}">{{item}}</li>';else for(var g in a)d+="<li><h1>"+b.sortLevel[f]+" | "+g+"</h1>",d+="<ul ng-style=\"{backgroundColor: getGroupColor('"+g+"', '"+b.sortLevel[f]+'\')}" class="clearfix indent" path="'+c+'">',e(a[g],c+"['"+g+"']",f+1),d+="</ul></li>"};e(b.groups,"groups",0),c.html(""),a(d)(b,function(a){c.append(angular.element(a))})},!0)}}}]);var e=function(a,b){return"number"===b?a:"date"===b?Date.parse(a):void 0};_.groupByMulti=function(a,b,c){if(!b.length)return a;var d=_.groupBy(a,b[0],c),e=b.slice(1);for(var f in d)d[f]=_.groupByMulti(d[f],e,c);return d}}();