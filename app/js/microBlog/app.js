'use strict';


// Declare app level module which depends on filters, and services
angular.module('microBlog', [
  'ngRoute',
  'microBlog.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/post/:postId', {templateUrl: 'partials/detail.html', controller: 'DetailCtrl'});
  $routeProvider.when('/info', {templateUrl: 'partials/info.html', controller: 'InfoCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
