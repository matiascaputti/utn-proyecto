'use strict';

angular
    .module('StudentsModule')

        .controller('StudentsListCtrl', function (
            $scope, $timeout, $mdDialog, StudentsService
        ) {

            StudentsService.getAll()
            .then(function(result) {
                $scope.students = result.data;
            });

            $scope.goToPerson = function(person, event) {
                $mdDialog.show(
                  $mdDialog.alert()
                    .title(person.lastname + ', ' + person.firstname)
                    .content(
                        "<button class='btn btn-primary btn-register margin' ui-sref='app.assistance[show]'>Ver faltas</button><br>"+
                        "<button class='btn btn-primary btn-register margin' >Generar boletín de asistencias</button><br>"
                    )
                    .ariaLabel('Person inspect demo')
                    .ok('Cerrar')
                    .targetEvent(event)
                );
            };


        }) // end of .controller

; // end of file

