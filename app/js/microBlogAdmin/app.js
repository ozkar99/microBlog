'use strict';


// Declare app level module which depends on filters, and services
angular.module('microBlogAdmin', [
  'ngRoute',
  'microBlogAdmin.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/microBlogAdmin/default.html', controller: 'DefaultCtrl'});
  $routeProvider.when('/create', {templateUrl: 'partials/microBlogAdmin/create.html', controller: 'CreateCtrl'});
  $routeProvider.when('/delete', {templateUrl: 'partials/microBlogAdmin/delete.html', controller: 'DeleteCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
