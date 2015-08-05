'use strict';

/**
 * @ngdoc function
 * @name geekAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geekAngularApp
 */
 angular.module('geekAngularApp')
 .controller('MainCtrl', function ($scope,$http) {
  $scope.awesomeThings = [];


  $scope.RefreshBlog = function(){
    $http.get("http://localhost:9001/blogs"). 
    then(function(response) {
       // console.log("Complete");
       //debugger;
       $scope.awesomeThings = response.data;
       console.log($scope.awesomeThings);
     }, function(response) {
      console.log(response);
      $scope.error = 'Service not ready';
    });
  }

  $scope.RefreshBlog();
  $scope.AddMyInputToAwesomeThing = function()
  {
    var newPost = {
      title : $scope.myTitle,
      content : $scope.myContent,
      post_by : "ChinChin",
      comments : [] };

      $http.post('http://localhost:9001/blogs',newPost).
      then(function(response) {
       $scope.RefreshBlog();
     }, function(response) {

     });
      $scope.myTitle = "";
      $scope.myContent = "";

    }
  }

  );
