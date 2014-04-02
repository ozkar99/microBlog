'use strict';


// Declare app level module which depends on filters, and services
angular.module('microBlog', [
  'ngRoute',
  'microBlog.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/microBlog/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/info', {templateUrl: 'partials/microBlog/info.html', controller: 'InfoCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
