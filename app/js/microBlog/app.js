'use strict';


// Declare app level module which depends on filters, and services
angular.module('microBlog', [
  'ngRoute',
  'microBlog.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/microBlog/default.html', controller: 'DefaultCtrl'});
  $routeProvider.when('/info', {templateUrl: 'partials/microBlog/info.html', controller: 'InfoCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
