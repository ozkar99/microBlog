'use strict';

/* Controllers */
var microBlogControllers = angular.module('microBlogAdmin.controllers', [])


microBlogControllers.controller('DeleteCtrl', ['$scope', '$http', function($scope, $http) {
        /* get list post here*/
    $http.get('/phones.json').success(function(data) {
        $scope.posts = data;
    });

    /*delete post*/
    $scope.deletePost = function(id) {
        $http.delete('/api/delete', + id).success( function() {
            console.log("Post borrado con exito");
        });
    };
    
}]);


microBlogControllers.controller('CreateCtrl', ['$scope', '$http', function($scope, $http) {

    /*create post*/
    $scope.createPost = function(titulo, post) {
        $http.post('/api/post', {
            titulo: $scope.titulo,
            post: $scope.post
        }).success( function() {
            console.log("Datos actualizados con exito");            
        });
    };
   
}]);
