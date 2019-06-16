/// <reference path="../angular-1.7.8/angular.min.js" />
/// <reference path="../angular-1.7.8/angular-route.js" />
const folderLocation = "http://localhost/AngularJS/layoutTemplates"

let app = angular.module('Demo', ['ui.router'])
.config(function ($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider,$locationProvider) { //$locationProvider
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlRouterProvider.otherwise('/home');
  $stateProvider

  .state("home", {
    url: "/home",
    templateUrl: `templates/home.html`,
    controller: "homeController",
    controllerAs: "homeCtrl",
    data: {
      customData1: "Home state custom data 1",
      customData2: "Home state custom data 2"
    }
  })
  .state("courses", {
    url: "/courses",
    templateUrl: `templates/courses.html`,
    controller: "coursesController",
    controllerAs: "coursesCtrl",
    caseInsensitiveMatch: true,
    data: {
      customData1: "Courses state custom data 1",
      customData2: "Courses state custom data 2"
    }
  })
  .state("studentSearch",{
    url: "/studentsSearch/:name",
    templateUrl: `templates/studentsSearch.html`,
    controller: "studentsSearchController",
    controllerAs: "studentsSearchCtrl"
  })
  .state("studentParent",{
    url: "/students",
    templateUrl: "templates/studentParent.html",
    controller: "studentParentController",
    controllerAs: "stdParentCtrl",
    resolve: {
      studentTotals: function($http){
        return $http.get("server.php?total").then(function(response){
          return response.data;
        });
      },studentList: function ($http) {
        console.log($http);
        return $http.get(`server.php`)
        .then(function (res) {
          return res.data;
        })
      }
    },
    abstract: true
  })
  .state("studentParent.students",{
    url: "/",
    views: {
      "studentData": {
        templateUrl: "templates/students.html",
        controller: "studentsController",
        controllerAs: "studentsCtrl",
        resolve: {
          studentList:function($http) {
            return $http.get("server.php").then(function(response){
              return response.data;
            })
          }
        }
      },
      "totalData": {
        templateUrl: "templates/studentsTotal.html",
        controller: "studentsTotalController",
        controllerAs: "studentsTotalCtrl",
      }
    }
  })
  .state("studentParent.studentDetails",{
    url: "/:id",
    views: {
      "studentData": {
        templateUrl: "templates/studentDetails.html",
        controller: "studentDetailsController",
        controllerAs: "studentDetailsCtrl"
      }
    }
  })
  $locationProvider.html5Mode(true);
})

.controller("homeController", function ($state) {
  this.message = "Home Page";

  this.homeCustomData1 = $state.current.data.customData1;
  this.homeCustomData2 = $state.current.data.customData2;

  this.coursesCustomData1 = $state.get("courses").data.customData1;
  this.coursesCustomData2 = $state.get("courses").data.customData2;

})

.controller("coursesController", function () {
  this.courses = ["C#", "VB.net", "SQL", "C++"];
})
.controller("studentsController", function (studentList, $state, $location,studentTotals) {
  var vm = this;
  vm.studentSearch = function() {
    $state.go("studentSearch",{
      name: vm.name
    });

    vm.students = studentList;
    vm.studentTotals = studentTotals;
  }
  vm.reload = function () {
    $state.reload();
    console.log('reload');
  }
  vm.students = studentList;
})
.controller("studentDetailsController", function ($http, $stateParams) {
  let vm = this;
  $http({
    url: `server.php`,
    params: { id: $stateParams.id },
    method: "get"
  }).then(function (res) {
    console.log($stateParams);
    vm.student = res.data;
  })
})
.controller("studentsSearchController", function ($http, $stateParams) {
  var vm = this;
  if ($stateParams.name) {
    $http({
      url: "server.php/getStudentsByName",
      method: "get",
      params: {name: $stateParams.name},
    }).then(function(response){
      vm.students = response.data;
      console.log(vm.students);
    });
  } else {
    $http.get(`server.php`).then((res) => {
      vm.students = res.data

    });
  }
})
.controller("studentParentController",function(studentTotals){
  this.males = studentTotals.males;
  this.females = studentTotals.females;
  this.total = studentTotals.total;
})
.controller("studentsTotalController",function(studentTotals){
  this.total = studentTotals.total;
})
