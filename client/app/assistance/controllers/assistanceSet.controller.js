'use strict';

angular
    .module('AssistanceModule')

        .controller('AssistanceSetCtrl', function (
            $scope, $timeout, $mdDialog, $mdToast, $state,
            Auth, CoursesService, StudentsService, AssistanceService, AssistanceDataService
        ) {

            var assistanceSet = this;

            assistanceSet.currentUser = Auth.getCurrentUser();

            assistanceSet.filterStudents = function() {
                assistanceSet.selectedCourse.students = _.where(assistanceSet.students, {course: assistanceSet.selectedCourse._id});
            };

            CoursesService.getAll()
            .then(function(result) {
                assistanceSet.courses = result.data;

                StudentsService.getAll()
                .then(function(result) {
                    assistanceSet.students = result.data;
                });
            });

            AssistanceService.getAll()
            .then(function(result) {
                assistanceSet.assistances = result.data;
            });

            assistanceSet.getAssistance = function() {
                assistanceSet.todayAssistences = [];
                assistanceSet.assistances.forEach(function(item) {
                    var currentDate = moment(assistanceSet.selectedDate).format('YYYYMMDD');
                    var itemDate = moment(item.date).format('YYYYMMDD');

                    if (currentDate == itemDate) {
                        var currentCourse = assistanceSet.selectedCourse._id;
                        var itemCourse = item.course._id;

                        if (currentCourse == itemCourse) {
                            assistanceSet.todayAssistences.push(item);

                            assistanceSet.new = false;
                        } else {
                            assistanceSet.new = true;
                        }
                    } else {
                        assistanceSet.new = true;
                    }
                });
            };

            assistanceSet.open = function($event) {
                assistanceSet.status.opened = true;
            };

            assistanceSet.status = {
                opened: false
            };

            assistanceSet.selectedDate = null;

            assistanceSet.saveActa = function() {
                var assistance = {
                    date: assistanceSet.selectedDate,
                    course: assistanceSet.selectedCourse,
                    preceptor: Auth.getCurrentUser(),
                    students: _.where(assistanceSet.students, {course: assistanceSet.selectedCourse._id})
                };

                AssistanceService.create(assistance)
                .then(function(result) {

                    result.data.students.forEach(function(student) {
                        var assistanceData = {
                            assistance: result.data,
                            student: student._id,
                            status: student.check
                        };

                        AssistanceDataService.create(assistanceData);
                    });

                    $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Planilla de asistencia creada'));
                    $timeout(function() {
                        $state.go('app.main');
                    }, 1500);
                });
            };

            assistanceSet.deleteActa = function(id) {
                AssistanceService.delete(id)
                .then(function() {
                    $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Planilla de asistencia eliminada'));
                    $timeout(function() {
                        $state.go('app.main');
                    }, 1500);
                });
            };

        }) // end of .controller

; // end of file

