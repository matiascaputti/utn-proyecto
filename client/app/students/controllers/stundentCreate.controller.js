'use strict';

angular
    .module('StudentsModule')

        .controller('StudentCreateCtrl', function (
            $scope, $state, $timeout, $mdDialog, $mdToast,
            StudentsService
        ) {
            var create = this;

            StudentsService.getAll()
            .then(function(result) {
                $scope.students = result.data;
            });


            $scope.saveStudent = function() {
                StudentsService.create(create.student)
                .then(function() {
                    $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Alumno creado'));
                    $timeout(function() {
                        $state.go('app.main');
                    }, 1500);
                });
            };


        }) // end of .controller

; // end of file

