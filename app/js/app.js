//(function() {
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
    'ngSanitize',
    'ngRoute',
    'ngResource',
    'ngMessages',
    'blockUI',
    'app.banco',
    'app.inicio',

    'myApp.version'
]);

app.config(['$locationProvider', '$routeProvider', 'blockUIConfig', function($locationProvider, $routeProvider, blockUIConfig) {
    //$locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({ redirectTo: '/inicio' });
    blockUIConfig.message = 'Cargando...';
    //blockUIConfig.templateUrl = 'templates/progress.html';
}]);
//})();