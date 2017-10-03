//(function() {
'use strict';
app.service('webapi', webapi);

webapi.$inject = ['$http', '$resource'];

function webapi($http, $resource) {
    return $resource('http://localhost:1029/api', null, {
        //'ObtenerBancos': { method: 'GET', url: 'ConsultarOrdenGiro', isArray: true },
        'ObtenerBancos': { method: 'GET', url: 'http://localhost:1029/api/Bancos/Get', isArray: true },
        'ObtenerBanco': { method: 'GET', url: 'http://localhost:1029/api/Bancos/Get/' },
        'RegistrarBanco': { method: 'POST', url: 'http://localhost:1029/api/Bancos/Post' },
        'EditarBanco': { method: 'PUT', url: 'http://localhost:1029/api/Bancos/Put' },
        'EliminarBanco': { method: 'DELETE', url: 'http://localhost:1029/api/Bancos/Delete' }
    });

};
//})();