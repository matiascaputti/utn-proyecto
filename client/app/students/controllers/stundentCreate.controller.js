'use strict';

angular
    .module('StudentsModule')

        .controller('StudentCreateCtrl', function (
            $scope, $state, $timeout, $mdDialog, $mdToast,
            StudentsService
        ) {
            var self = this;

            StudentsService.getAll()
            .then(function(result) {
                self.students = result.data;
            });


            self.saveStudent = function() {
                StudentsService.create(self.student)
                .then(function() {
                    $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Alumno creado correctamente'));
                    $timeout(function() {
                        $state.go('app.main');
                    }, 1500);
                });
            };

            self.updateStudent = function() {
                StudentsService.update(self.selectedStudent)
                .then(function() {
                    $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Alumno actualizado correctamente'));
                    $timeout(function() {
                        $state.go('app.main');
                    }, 1500);
                });
            };

            self.deleteStudent = function() {
                StudentsService.delete(self.selectedStudent._id)
                .then(function() {
                    $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Alumno eliminado'));
                    $timeout(function() {
                        $state.go('app.main');
                    }, 1500);
                });
            };


        }) // end of .controller

; // end of file

