'use strict';

angular
    .module('AssistanceModule')

        .controller('AssistanceSetCtrl', function (
            $scope, $timeout, $mdDialog, $mdToast, $state,
            Auth, CoursesService, StudentsService, AssistanceService
        ) {

            var assistanceSet = this;

            assistanceSet.currentUser = Auth.getCurrentUser();


            CoursesService.getAll()
            .then(function(result) {
                assistanceSet.courses = result.data;

                StudentsService.getAll()
                .then(function(result) {
                    assistanceSet.students = result.data;
                });
            });

            assistanceSet.open = function($event) {
                assistanceSet.status.opened = true;
            };

            assistanceSet.status = {
                opened: false
            };

            assistanceSet.selectedDate = new Date();

            assistanceSet.saveActa = function() {
                var assistance = {
                    course: assistanceSet.selectedCourse,
                    preceptor: Auth.getCurrentUser(),
                    students: _.where(assistanceSet.students, {course: assistanceSet.selectedCourse._id})
                };

                AssistanceService.create(assistance)
                .then(function() {
                    $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Planilla de asistencia creada'));
                    $timeout(function() {
                        $state.go('app.main');
                    }, 1500);
                });

            };

        }) // end of .controller

; // end of file

