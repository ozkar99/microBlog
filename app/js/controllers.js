'use strict';

/* Controllers */
var microBlogControllers = angular.module('microBlog.controllers', [])

/*load all the posts here*/
microBlogControllers.controller('DefaultCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('/api/posts').success(function(data) {
        $scope.posts = data.slice().reverse();
    });

    if (! $scope.posts ) {
        $scope.posts = [{
                    titulo: "Error en conexion a la DB",
                    post: "No me puedo conectar al servidor de base de datos" }];
    }

}]);


/* information controller*/
microBlogControllers.controller('InfoCtrl', ['$scope', '$http', function($scope, $http) {
     $http.get('/info.json').success(function(data) {
        $scope.info = data;
    });
}]);


/*create post*/
microBlogControllers.controller('CreatePostCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.createPost = function(titulo, post) {
        $http.post('/api/post', {
            titulo: $scope.titulo,
            post: $scope.post
        }).success( function() {
            /*redirect to home ?*/
        });
    };

}]);
