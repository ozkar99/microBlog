'use strict';

/* Controllers */
var microBlogControllers = angular.module('microBlog.controllers', [])


microBlogControllers.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        /* get list post here*/
    $http.get('/phones.json').success(function(data) {
        $scope.posts = data;
    });
}]);


microBlogControllers.controller('InfoCtrl', ['$scope', '$http', function($scope, $http) {
     $http.get('/info.json').success(function(data) {
        $scope.info = data;
    });
}]);
