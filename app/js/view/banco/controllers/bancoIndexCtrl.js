//(function() {
'use strict';

appbanco.controller('bancoIndexCtrl', bancoIndexCtrl);

bancoIndexCtrl.$inject = ['$q', '$scope', '$interval', 'serviciobanco']; //, 'logger']

function bancoIndexCtrl($q, $scope, $interval, serviciobanco) { //, logger) {

    $scope.gridOptions = {
        exporterMenuCsv: true,
        enableGridMenu: true,
        enableSorting: true,
        enableFiltering: true,
        fastWatch: true,
        columnDefs: [
            { field: 'ban_id', displayName: 'Id' },
            { field: 'ban_codigoexterno', displayName: 'Código externo', enableColumnResizing: true, headerCellClass: $scope.highlightFilteredHeader },
            { field: 'ban_nombre', displayName: 'Nombre', enableColumnResizing: true, headerCellClass: $scope.highlightFilteredHeader },
            { field: 'ban_activo', displayName: 'Activo', cellTemplate: '<input type="checkbox" ng-checked="{{COL_FIELD}}" disabled="true" />' },
            { field: 'ban_id', name: 'edit', displayName: 'Edit', cellTemplate: '<a href="/banco/details/{{COL_FIELD}}">Editar</a>' },
            { field: 'ban_id', name: 'delete', displayName: 'Eliminar', cellTemplate: '<button id="deleteBtn" type="button" class="btn-small" ng-click="grid.appScope.eliminar(COL_FIELD)" >Eliminar</button> ' }
        ],
        gridMenuCustomItems: [{
            //  title: 'Rotate Grid',
            //action: function($event) {
            //this.grid.element.toggleClass('rotated');
            //},
            //order: 210
        }],
        exporterCsvFilename: 'bancos.csv',
        exporterPdfDefaultStyle: { fontSize: 9 },
        exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
        exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
        exporterPdfFooter: function(currentPage, pageCount) {
            return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function(docDefinition) {
            docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
            docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
            return docDefinition;
        },
        exporterPdfOrientation: 'portrait',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth: 500,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;

            // interval of zero just to allow the directive to have initialized
            $interval(function() {
                gridApi.core.addToGridMenu(gridApi.grid, [{ title: 'Dynamic item', order: 100 }]);
            }, 0, 1);


        }
    };

    $scope.eliminar = function(id) {
        var data = $scope.gridOptions.data.filter(function(item) {
            return item.ban_id == id;
        });
        if (data) {
            confirm(data[0].ban_nombre);
        }
    };

    function obtenerBancos() {
        var data = serviciobanco.query(function() {
            $scope.gridOptions.data = data;
        });
        /*
        serviciobanco.obtenerBancos().then(function(data) {
            $scope.gridOptions.data = data;
        });*/
    };
    obtenerBancos();
};
//})();