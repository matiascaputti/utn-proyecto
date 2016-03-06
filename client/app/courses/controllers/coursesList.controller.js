'use strict';

angular
    .module('CoursesModule')

        .controller('CoursesListCtrl', function (
            $scope, $timeout, $mdDialog, CoursesService
        ) {

            $scope.title = 'TURNS LIST';

            CoursesService.getAll()
            .then(function(result) {
                $scope.courses = result.data;
            });

            $scope.goToPerson = function(person, event) {
                $mdDialog.show(
                  $mdDialog.alert()
                    .title('Opciones - Curso: ' + person)
                    .content(
                        "<button class='btn btn-primary btn-register margin' ui-sref='app.courses[show]'>Ver estadísticas</button><br>"+
                        "<button class='btn btn-primary btn-register margin' disabled>Editar curso</button><br>"+
                        "<button class='btn btn-primary btn-register margin' disabled>Generar reporte de curso</button><br>"
                    )
                    .ariaLabel('Person inspect demo')
                    .ok('Cerrar')
                    .targetEvent(event)
                );
            };


        }) // end of .controller

; // end of file

