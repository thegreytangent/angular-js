/// <reference path="../angular-1.7.8/angular.js" />

var app = angular.module("myModule",[])
.controller("myController",function($scope){
	$scope.output = stringService.processString(input);
});