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
                    post: "No me puedo conectar al servidor de base de datos",
                    autor: "microBlog" }];
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

    $scope.createPost = function(titulo, post, autor) {

        if ( !autor) {
          $scope.autor = "Anonimo";
        }

        if ( !titulo || !post) {
            $scope.message = "Error: Falta llenar campos.";
            $('#modal').modal('toggle');
        } else { 

           $http.post('/api/post', {
                titulo: $scope.titulo,
                post: $scope.post,
                autor: $scope.autor            
            }).success( function (data, status, headers, config) {
                $scope.message = "Post creado exitosamente";
                $('#modal').modal('toggle');
            }).error ( function (data, status, headers, config) {
                $scope.message = "Error: Error en la creacion del post";
                $('#modal').modal('toggle');
            });
        }

    };

}]);
