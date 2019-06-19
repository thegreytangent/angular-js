var myApp = angular.module("crud", ["ngRoute"])
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/post.html',
      controller: 'postCtrl'
    })
    .when('/create', {
      templateUrl: 'templates/create.html',
      controller: 'createCtrl'
    })
    .when('/view/:id',{
      templateUrl: 'templates/view.html',
      controller: 'viewCtrl'
    })
    .when('/delete/:id',{
      templateUrl: 'templates/delete.html',
      controller: 'deleteCtrl'
    })
    

});

myApp.controller("postCtrl", function ($scope, $http) {
  $http.get("http://localhost/AngularJS/crud/webservices/allpost.php")
    .then(function (res) {
      $scope.posts = res.data;
    });
});

myApp.controller("createCtrl", function ($scope, $http) {
  $scope.info = "this controller";
  
  $scope.getContent = {
    title: "",
    description: ""
  }

  $scope.content = angular.copy($scope.getContent);
  
  $scope.submitForm = function() {
    $http.post('./webservices/addPost.php',{data:$scope.content}).then(function(){
      alert('Form has been submitted');
      $scope.content = angular.copy($scope.getContent);
    });
  }

})

myApp.controller("viewCtrl",function($scope,$http,$routeParams){
 $http({
   url: "http://localhost/AngularJS/crud/webservices/getPost.php",
   params: {id:$routeParams.id},
   method: "get"
 })
 .then(function(res){
  $scope.result = res.data;
 });
});

myApp.controller("deleteCtrl",function($scope,$http,$routeParams){
  $http({
    url: "http://localhost/AngularJS/crud/webservices/delete.php",
    method: "get",
    params:{id:$routeParams.id}
  });
});
