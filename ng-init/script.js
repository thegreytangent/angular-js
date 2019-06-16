/// <reference path="../angular-1.7.8/angular.js" />

var app = angular.module("myModule",[])
.controller("myController",function($scope){
    let employees = [
        {
            name: "Ben",
            gender: "Male",
            city: 'Silay'
        },
        {
            name: "Sarah",
            gender: "Female",
            city: 'Talisay'
        },
        {
            name: "Jason",
            gender: "Male",
            city: 'Bago'
        },
        {
            name: "Noel",
            gender: "Male",
            city: 'Bacolod'
        }
    ];

    $scope.employees = employees;
})