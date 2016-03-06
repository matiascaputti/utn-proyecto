'use strict';

angular
    .module('StudentsModule')

        .controller('StudentsListCtrl', function (
            $scope, $timeout, $mdDialog, StudentsService
        ) {

            StudentsService.getAll()
            .then(function(result) {
                $scope.people = result.data;
            });

            $scope.goToPerson = function(person, event) {
                $mdDialog.show(
                  $mdDialog.alert()
                    .title('Opciones - Alumno: ' + person)
                    .content(
                        "<button class='btn btn-primary btn-register margin' ui-sref='app.assistance[show]'>Ver faltas</button><br>"+
                        "<button class='btn btn-primary btn-register margin' disabled>Ver calificaciones</button><br>"+
                        "<button class='btn btn-primary btn-register margin' disabled>Generar boletín de asistencias</button><br>"+
                        "<button class='btn btn-primary btn-register margin' disabled>Ver calificaciones</button><br>"
                    )
                    .ariaLabel('Person inspect demo')
                    .ok('Cerrar')
                    .targetEvent(event)
                );
            };


        }) // end of .controller

; // end of file

