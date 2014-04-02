'use strict';

/* Controllers */
var microBlogControllers = angular.module('microBlogAdmin.controllers', [])


microBlogControllers.controller('DefaultCtrl', ['$scope', '$http', function($scope, $http) {
        /* get list post here*/
    $http.get('/phones.json').success(function(data) {
        $scope.posts = data;
    });
}]);


microBlogControllers.controller('CreateCtrl', ['$scope', '$http', function($scope, $http) {
    /* listen on event to push to db */
}]);

microBlogControllers.controller('DeleteCtrl', ['$scope', '$http', function($scope, $http) {
    /* listen on event to delete from db */
}]);


