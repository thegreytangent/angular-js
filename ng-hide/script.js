/// <reference path="../angular-1.7.8/angular.js"/>

var myApp = angular.module("myModule", [])
.controller("myController", function ($scope) {
        let employees = [
            {
                name: "Ben",
                dateOfBirth: new Date("November 23, 2017"),
                gender: "Male",
                city: 'Silay',
                salary: 2342
            },
            {
                name: "Sarah",
                dateOfBirth: new Date("November 23, 2017"),
                gender: "Female",
                city: 'Talisay',
                salary: 2343.843
            },
            {
                name: "Jason",
                dateOfBirth: new Date("November 23, 2017"),
                gender: "Male",
                city: 'Bago',
                salary: 234.211
            },
            {
                name: "Noel",
                dateOfBirth: new Date("November 23, 2017"),
                gender: "Male",
                city: 'Bacolod',
                salary: 4422.3
            }
        ];

        $scope.employees = employees;
        
    });