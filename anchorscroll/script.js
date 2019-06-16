/// <reference path="../angular-1.7.8/angular.js" />

let demoApp = angular.module('demoModule',[])
.controller('demoController',function($scope,$location,$anchorScroll){
	$scope.scrollTo = function(scrollLocation) {
		$location.hash(scrollLocation);
		$anchorScroll();
	}
});