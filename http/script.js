/// <reference path="../angular-1.7.8/angular.js" />

var app = angular.module("myModule", [])
    .controller("myController", function ($scope, $http) {
        let successCallBack = function (res) {
            $scope.students = res.data;
            console.log(res);
        }

        let errorCallBack = function (reason) {
            $scope.error = reason.data;
            console.log(reason)
        }

        $http({
            method: 'GET',
            url: `http://localhost/angularJS/server.php`
        })
            .then(successCallBack, errorCallBack);
    });