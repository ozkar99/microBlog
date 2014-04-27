'use strict';

/* Controllers */
var microBlogControllers = angular.module('microBlog.controllers', [])


microBlogControllers.controller('DefaultCtrl', ['$scope', '$http', function($scope, $http) {
        /* get list post here*/
    $http.get('/api/posts').success(function(data) {
        $scope.posts = data;
        console.log(data);
    });
}]);


microBlogControllers.controller('InfoCtrl', ['$scope', '$http', function($scope, $http) {
     $http.get('/info.json').success(function(data) {
        $scope.info = data;
    });
}]);
