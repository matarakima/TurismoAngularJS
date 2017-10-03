//(function() {
'use strict';
appbanco.factory('serviciobanco', serviciobanco);

appbanco.$inject = ['$http', '$resource'];

function serviciobanco($http, $resource) {
    return $resource('http://localhost:1029/api/Bancos/:id', { id: "@_id" }, {
        'update': { method: 'PUT' }
    });

};
/*appbanco.factory('serviciobanco', serviciobanco);

serviciobanco.$inject = ['$http', '$location', '$q', 'webapi']; //'exception', 'logger', ];

function serviciobanco($http, $location, $q, webapi) { //} exception, logger, ) {
    var isPrimed = false;
    var primePromise;

    var service = {
        obtenerBancos: obtenerBancos,
        obtenerBanco: obtenerBanco,
        editarBanco: editarBanco,
        eliminarBanco: eliminarBanco,
        registrarBanco: registrarBanco,
        ready: ready
    };

    return service;

    function editarBanco(banco) {
        return $q(function(resolve, reject) {
            var params = { dto: angular.toJson(banco), credentials: '' };
            webapi.EditarBanco(params, function(data) {
                resolve(data);
            }, function(datoerror) {
                alert('Ocurrio un error editando el banco');
                console.log(datoerror);
                reject(datoerror);
            });
        });
    };

    function eliminarBanco(id) {
        return $q(function(resolve, reject) {
            var params = { id: id, credentials: '' };
            webapi.EliminarBanco(params, function(data) {
                resolve(data);
            }, function(datoerror) {
                alert('Ocurrio un error eliminando el banco');
                console.log(datoerror);
                reject(datoerror);
            });
        });
    };

    function registrarBanco(banco) {
        return $q(function(resolve, reject) {
            var params = { dto: banco, credentials: '' };
            //webapi.data = banco;
            var webapp = new webapi();
            webapp.data = banco;
            webapi.RegistrarBanco(webapp, function(data) {
                resolve(data);
            }, function(datoerror) {
                alert('Ocurrio un error registrando el banco');
                console.log(datoerror);
                reject(datoerror);
            });
        });
    };

    function obtenerBancos() {
        return $q(function(resolve, reject) {
            var params = { credentials: '' };
            webapi.ObtenerBancos(params, function(data) {
                resolve(data);
            }, function(datoerror) {
                alert('Ocurrio un error obteniendo los bancos');
                console.log(datoerror);
                reject(datoerror);
            });
        });
    };

    function obtenerBanco(id) {
        return $q(function(resolve, reject) {
            var params = { id: id, credentials: '' };
            webapi.ObtenerBanco(params, function(data) {
                resolve(data);
            }, function(datoerror) {
                alert('Ocurrio un error obteniendo el banco');
                console.log(datoerror);
                reject(datoerror);
            });
        });
    };

    function prime() {
        // This function can only be called once.
        if (primePromise) {
            return primePromise;
        }

        primePromise = $q.when(true).then(success);
        return primePromise;

        function success() {
            isPrimed = true;
            //logger.info('Primed data');
        }
    };

    function ready(nextPromises) {
        var readyPromise = primePromise || prime();

        return readyPromise
            .then(function() { return $q.all(nextPromises); })
            .catch(); //exception.catcher('"ready" function failed'));
    };
}*/
//})