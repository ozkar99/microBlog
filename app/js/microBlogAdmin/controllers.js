'use strict';

/* Controllers */
var microBlogControllers = angular.module('microBlogAdmin.controllers', [])


microBlogControllers.controller('DeleteCtrl', ['$scope', '$http', function($scope, $http) {
        /* get list post here*/
    $http.get('/phones.json').success(function(data) {
        $scope.posts = data;
    });

    $scope.deletePost = function(id) {
        /*implementar borrar post aqui*/
    };
    
}]);


microBlogControllers.controller('CreateCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.createPost = function(titulo, post) {
        $http.post('/api/post', {
            title: $scope.titulo,
            post: $scope.post
        }).success( function() {
            console.log("Datos actualizados con exito");
        });
    };   
}]);
