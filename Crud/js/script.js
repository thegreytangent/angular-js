var myApp = angular.module("crud",["ngRoute"])
myApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'templates/post.html',
    controller: 'postCtrl'
  })
  .when('/create',{
    templateUrl: 'templates/create.html',
    controller: 'createCtrl'
  })
  
});

myApp.controller("postCtrl",function($scope,$http){
  $http.get("http://localhost/AngularJS/crud/webservices/allpost.php")
  .then(function(res){
    $scope.posts = res.data;
  });
});

myApp.controller("createCtrl",function($scope) {
  $scope.info = "Create Post";
})
