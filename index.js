'use strict';

// Declare app level module which depends on views, and core components
vite.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngMessages',
  'myApp.index',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
