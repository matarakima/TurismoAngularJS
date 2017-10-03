//(function() {
'use strict';

appbanco.config(['$routeProvider', 'blockUIConfig', function($routeProvider, blockUIConfig) {
    $routeProvider
        .when('/banco/', {
            templateUrl: 'js/view/banco/index.html',
            controller: 'bancoIndexCtrl'
        })
        .when('/banco/details/:id', {
            templateUrl: 'js/view/banco/details.html',
            controller: 'bancoDetailsCtrl'
        })
        .when('/banco/details', {
            templateUrl: 'js/view/banco/details.html',
            controller: 'bancoDetailsCtrl'
        });
    blockUIConfig.message = 'Cargando...';
    //blockUIConfig.templateUrl = 'templates/progress.html';
}]);
/*.run(appRun);

appRun.$inject = ['routehelper']

function appRun(routehelper) {
    routehelper.configureRoutes(getRoutes());
}

function getRoutes() {
    return [{
        url: '/banco',
        config: {
            templateUrl: 'view/banco/index.html',
            controller: 'bancoIndexCtrl'
        }
    }];
}*/
//})();