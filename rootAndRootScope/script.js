/// <reference path="../angular-1.7.8/angular.js" />
var app = angular
.module('Demo',[])
.controller("redColorController",function($scope,$rootScope){
    $scope.redColor = "I am red color";
    $rootScope.rootScopeColor = " I am root scope color";
})
.controller("greenColorController",function($scope){
  $scope.greenColor = "I am green color";
})
