//(function() {
'use strict';
angular
    .module('app.inicio')
    .config(['$routeProvider', 'blockUIConfig', function($routeProvider, blockUIConfig) {
        $routeProvider.when('/inicio', {
            templateUrl: 'js/view/inicio/principal.html',
            controller: 'inicioCtrl'
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
        url: '/inicio',
        config: {
            templateUrl: 'view/inicio/principal.html',
            controller: 'inicioCtrl'
        }
    }];
}*/

//})();