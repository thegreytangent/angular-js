/// <reference path="../angular-1.7.8/angular.js"/>

var app = angular.module("Demo",[])
.controller("countryController",function(){
	this.name = "Philippines";
})
.controller("stateController",function(){
	this.name = "Asia"; 
})
.controller("cityController",function(){
	this.name = "Bacolod";
})
