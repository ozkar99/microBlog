'use strict';


// Declare app level module which depends on filters, and services
angular.module('microBlog', [
  'ngRoute',
  'microBlog.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/default.html', controller: 'DefaultCtrl'});
  $routeProvider.when('/info', {templateUrl: 'partials/info.html', controller: 'InfoCtrl'});
  $routeProvider.when('/create', {templateUrl: 'partials/create.html', controller: 'CreatePostCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
