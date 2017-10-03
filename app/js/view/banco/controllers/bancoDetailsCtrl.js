'use strict';

appbanco.controller('bancoDetailsCtrl', bancoDetailsCtrl);

bancoDetailsCtrl.$inject = ['$q', '$scope', '$routeParams', '$location', 'serviciobanco'];

function bancoDetailsCtrl($q, $scope, $routeParams, $location, serviciobanco) {
    if ($routeParams.id) {
        obtenerBanco();
    } else {
        $scope.title = "Registrar banco";
        $scope.codigoexterno = "";
        $scope.nombre = "";
        $scope.activo = false;
        $scope.ID = 0;
    }


    function obtenerBanco() {
        var data = serviciobanco.get({ id: $routeParams.id }, function() {
            $scope.codigoexterno = data.ban_codigoexterno;
            $scope.nombre = data.ban_nombre;
            $scope.activo = data.ban_activo;
            $scope.ID = $routeParams.id;
        });
        /*
        serviciobanco.obtenerBanco($routeParams.id).then(function(data) {
            $scope.codigoexterno = data.ban_codigoexterno;
            $scope.nombre = data.ban_nombre;
            $scope.activo = data.ban_activo;
            $scope.ID = $routeParams.id;
        });*/
    };

    function obtenerdto() {
        var dto = {
            ban_id: $scope.ID,
            ban_codigoexterno: $scope.codigoexterno,
            ban_nombre: $scope.nombre,
            ban_activo: $scope.activo
        };
        return dto;
    };

    $scope.guardar = function() {

        if ($routeParams.id) {
            serviciobanco.editarBanco(obtenerdto()).then(function(data) {
                alert("Almacenamiento satrisfactorio");
                $location.path('/banco');
            });
        } else {
            $scope.banco = new serviciobanco();

            //banco._id = obtenerdto();
            $scope.banco.$save(function() {
                alert("Almacenamiento satrisfactorio");
                $location.path('/banco');
            }, function(dato) {
                console.log(dato);
            });
            /*
            serviciobanco.registrarBanco(obtenerdto()).then(function(data) {
                alert("Almacenamiento satrisfactorio");
                $location.path('/banco');
            });*/
        }
    };

    $scope.cancelar = function() {
        $location.path('/banco');
    };
};